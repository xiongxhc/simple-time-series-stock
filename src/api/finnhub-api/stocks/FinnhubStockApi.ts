import axios from 'axios';
import {StockPriceRequestDto, StockPriceResponseDto, StockSymbolResponseDto} from './StockPriceDto';
import {SingleValueData, Time, UTCTimestamp} from 'lightweight-charts';
import {PriceType} from './StockConst';

export default class FinnhubStocksApi {
  public baseUrl = process.env.REACT_APP_FINNHUB_URL;
  private apiKey = process.env.REACT_APP_FINNHUB_API_KEY;

  fetchStockSymbol = async (exchange = 'US'): Promise<string[]> => {
    const response = await axios.get(`${this.baseUrl}/symbol?exchange=${exchange}&token=${this.apiKey}`);
    const rawData: StockSymbolResponseDto[] = response.data;
    // In this case, we only need the `symbols`
    return rawData?.map((stock: StockSymbolResponseDto) => stock.symbol);
  };

  fetchStockPrice = async (props: StockPriceRequestDto): Promise<SingleValueData<Time>[]> => {
    const {symbol, timeframe, to, from, priceType} = props;
    const response = await axios.get(
      `${this.baseUrl}/candle?symbol=${symbol}&resolution=${timeframe}&from=${from}&to=${to}&token=${this.apiKey}`,
    );
    const rawData: StockPriceResponseDto = response.data;
    return FinnhubStocksApi.transformPriceData(rawData, priceType);
  };

  static transformPriceData(rawData: StockPriceResponseDto, priceType: PriceType): SingleValueData<Time>[] {
    return rawData?.t.map((time) => {
      const valueIndex = rawData?.t.indexOf(time);
      return {
        value: rawData[priceType][valueIndex],
        time: time as UTCTimestamp,
      };
    });
  }
}
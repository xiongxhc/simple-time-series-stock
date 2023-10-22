import axios from 'axios';
import {StockPriceRequestDto, StockPriceResponseDto, StockSymbolResponseDto} from './StockPriceDto';

export default class FinnhubStocksApi {
  public baseUrl = process.env.REACT_APP_FINNHUB_URL;
  private apiKey = process.env.REACT_APP_FINNHUB_API_KEY;

  fetchStockSymbol = async (exchange = 'US'): Promise<StockSymbolResponseDto[]> => {
    const response = await axios.get(`${this.baseUrl}/symbol?exchange=${exchange}&token=${this.apiKey}`);
    return response.data;
  };

  fetchStockPrice = async (item: StockPriceRequestDto): Promise<StockPriceResponseDto> => {
    const {symbol, timeframe, to, from} = item;
    const response = await axios.get(
      `${this.baseUrl}/candle?symbol=${symbol}&resolution=${timeframe}&from=${from}&to=${to}&token=${this.apiKey}`,
    );
    return response.data;
  };
}

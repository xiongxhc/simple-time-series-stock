import axios from 'axios';
import {StockPriceRequestDto, StockPriceResponseDto} from './StockPriceDto';

export default class FinnhubStocksApi {
    public baseUrl = process.env.REACT_APP_STOCK_PRICE_URL;
    private apiKey = process.env.REACT_APP_STOCK_PRICE_API_KEY;

   fetchStockPrice = async (item: StockPriceRequestDto): Promise<StockPriceResponseDto> => {
    const {symbol, timeframe, to, from} = item;
    const response = await axios.get(
      `${this.baseUrl}/candle?symbol=${symbol}&resolution=${timeframe}&from=${from}&to=${to}&token=${this.apiKey}`,
    );
    return response.data;
  };
}

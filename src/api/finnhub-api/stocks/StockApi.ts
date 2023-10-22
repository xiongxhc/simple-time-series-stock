import axios from 'axios';
import {StockPriceRequestDto, StockPriceResponseDto} from './StockPriceDto';

export const fetchStockPrice = async (item: StockPriceRequestDto): Promise<StockPriceResponseDto> => {
  const {symbol, timeframe, to, from} = item;
  const response = await axios.get(
    `${process.env.REACT_APP_STOCK_PRICE_URL}/candle?symbol=${symbol}&resolution=${timeframe}&from=${from}&to=${to}&token=${process.env.REACT_APP_STOCK_PRICE_API_KEY}`,
  );
  return response.data;
};

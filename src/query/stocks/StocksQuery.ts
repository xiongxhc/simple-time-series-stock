import {useQuery} from '@tanstack/react-query';
import FinnhubStocksApi from '../../api/finnhub-api/stocks/StockApi';
import {StockPriceRequestDto, StockSymbolResponseDto} from '../../api/finnhub-api/stocks/StockPriceDto';

export default class StocksQuery {
  private stockApi = new FinnhubStocksApi();

  getStockSymbol = (exchange = 'US') => {
    const {data} = useQuery({
      queryKey: [exchange],
      queryFn: () =>
        this.stockApi.fetchStockSymbol(exchange),
    });
    return data?.map((stock: StockSymbolResponseDto) => stock.symbol);
  };

  getStockPrice = (props: StockPriceRequestDto) => {
    const {symbol, timeframe, from, to} = props;
    const {data} = useQuery({
      queryKey: [symbol, timeframe, from, to],
      queryFn: () =>
        this.stockApi.fetchStockPrice({
          symbol,
          timeframe,
          from,
          to,
        }),
    });
    return data;
  };
}

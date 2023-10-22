import {useQuery} from '@tanstack/react-query';
import FinnhubStocksApi from '../../api/finnhub-api/stocks/FinnhubStockApi';
import {StockPriceRequestDto} from '../../api/finnhub-api/stocks/StockPriceDto';

// Ideally, props for `StocksQuery` should be consistent across all API provider
export default class StocksQuery {
  private stockApi = new FinnhubStocksApi();

  getStockSymbol = (exchange = 'US') => {
    const {data} = useQuery({
      queryKey: [exchange],
      queryFn: () => this.stockApi.fetchStockSymbol(exchange),
    });
    return data;
  };

  getStockPrice = (props: StockPriceRequestDto) => {
    const {symbol, timeframe, from, to} = props;
    const {data} = useQuery({
      // `priceType` changes don't need to re-call api
      queryKey: [symbol, timeframe, from, to],
      queryFn: () => this.stockApi.fetchStockPrice(props),
    });
    return data;
  };
}

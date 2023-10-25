import {useQuery} from '@tanstack/react-query';
import FinnhubStocksApi from '../../api/finnhub-api/stocks/FinnhubStockApi';
import {StockPriceRequestDto} from '../../api/finnhub-api/stocks/StockPriceDto';

// Ideally, props for `StocksQuery` should be consistent across all API provider
export default class StocksQuery {
  private stockApi = new FinnhubStocksApi();

  getStockList = (exchange = 'US', mic = 'XNYS') => {
    const {data} = useQuery({
      queryKey: [exchange],
      queryFn: () => this.stockApi.fetchStockSymbol(exchange, mic),
    });
    return data;
  };

  getStockPrice = (props: StockPriceRequestDto) => {
    const {symbol, timeframe, from, to, priceType} = props;
    const {data} = useQuery({
      queryKey: [symbol, timeframe, from, to, priceType],
      queryFn: () => this.stockApi.fetchStockPrice(props),
    });
    return data;
  };
}

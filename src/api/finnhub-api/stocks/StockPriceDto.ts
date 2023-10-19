export interface StockPriceRequestDto {
  symbol: string;
  timeframe: string;
  from: number;
  to: number;
}

export interface StockPriceResponseDto {
  c: string[];
  h: string[];
  l: string[];
  o: string[];
  s: string;
  t: string[];
  v: string[];
}

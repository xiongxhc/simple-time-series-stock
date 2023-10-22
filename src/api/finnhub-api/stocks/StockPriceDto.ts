import {PriceType} from './StockConst';

export interface StockPriceRequestDto {
  symbol: string;
  timeframe: string;
  from: number;
  to: number;
  // Custom type e.g. `open price`
  priceType: PriceType;
}

export interface StockPriceResponseDto {
  c: number[];
  h: number[];
  l: number[];
  o: number[];
  s: string;
  t: number[];
  v: number[];
}

export interface StockSymbolResponseDto {
  currency: string;
  description: string;
  displaySymbol: string;
  figi: string;
  mic: string;
  symbol: string;
  type: string;
}

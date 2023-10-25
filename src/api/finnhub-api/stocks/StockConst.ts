export enum PriceType {
  OPEN = 'o',
  HIGH = 'h',
  LOW = 'l',
  CLOSE = 'c',
}

export const PriceTypeName: {[key: string]: string} = {
  o: 'Open Price',
  h: 'High Price',
  l: 'Low Price',
  c: 'Close Price',
};

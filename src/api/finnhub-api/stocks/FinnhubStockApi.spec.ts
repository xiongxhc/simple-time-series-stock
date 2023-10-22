import FinnhubStocksApi from './FinnhubStockApi';
import {StockPriceResponseDto} from './StockPriceDto';
import {PriceType} from './StockConst';

describe('FinnhubStockApi', () => {
  describe('transformPriceData', () => {
    const testData: StockPriceResponseDto = {
      c: [217.68, 221.03, 219.89],
      h: [222.49, 221.5, 220.94],
      l: [217.19, 217.1402, 218.83],
      o: [221.03, 218.55, 220],
      s: 'ok',
      t: [1569297600, 1569384000, 1569470400],
      v: [33463820, 24018876, 20730608],
    };
    it('should transform StockPriceResponseDto data into SingleValueData based on priceType', () => {
      expect(FinnhubStocksApi.transformPriceData(testData, PriceType.CLOSE)).toMatchObject([
        {time: testData.t[0], value: testData.c[0]},
        {time: testData.t[1], value: testData.c[1]},
        {time: testData.t[2], value: testData.c[2]},
      ]);
    });
  });
});

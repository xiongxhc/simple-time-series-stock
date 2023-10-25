import React from 'react';
import {Renderer} from '../../utils/testing/Render';
import {TestID} from '../../utils/testing/Constant';
import {DropdownSelector} from './DropdownSelector';
import {PriceType} from '../../api/finnhub-api/stocks/StockConst';
describe('DropdownSelector', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Render DropdownSelector', async () => {
    const {getByTestId} = new Renderer(
      (
        <DropdownSelector
          dropdownLabel={'Price Option'}
          dropdownOptions={Object.values(PriceType)}
          dropdownSelection={PriceType.CLOSE}
          handleDropdownChange={jest.fn()}
        />
      ),
    ).render();
    expect(getByTestId(TestID.DROPDOWN_SELECTOR)).toBeTruthy();
    expect(`${TestID.DROPDOWN_SELECTOR}_${PriceType.CLOSE}`).toBeTruthy();
  });
});

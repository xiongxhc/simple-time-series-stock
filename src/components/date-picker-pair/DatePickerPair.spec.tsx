import React from 'react';
import {Renderer} from '../../utils/testing/Render';
import {DatePickerPair} from './DatePickerPair';
import dayjs from 'dayjs';
import {TestID} from '../../utils/testing/Constant';
describe('DatePickerPair', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Render DatePickerPair', async () => {
    const startTime = dayjs('2018-05-12');
    const endTime = dayjs('2023-04-17');
    const {getByTestId, getByDisplayValue} = new Renderer(
      <DatePickerPair startTime={startTime} setStartTime={()=>jest.fn()} endTime={endTime} setEndTime={()=>jest.fn()} />,
    )
      .withQueryClientProvider()
      .render();
    expect(getByTestId(TestID.DATE_PICKER_PAIR)).toBeTruthy();
    expect(getByDisplayValue('05/12/2018')).toBeTruthy();
    expect(getByDisplayValue('04/17/2023')).toBeTruthy();
  });
});

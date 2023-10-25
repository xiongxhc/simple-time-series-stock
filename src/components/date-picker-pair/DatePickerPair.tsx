import {Stack} from '@mui/material';
import React, {Dispatch, SetStateAction} from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {DatePicker} from '@mui/x-date-pickers';
import {Dayjs} from 'dayjs';
import {TestID} from '../../utils/testing/Constant';

export interface DatePickerPairProps {
  startTime: Dayjs | null;
  setStartTime: Dispatch<SetStateAction<Dayjs | null>>;
  endTime: Dayjs | null;
  setEndTime: Dispatch<SetStateAction<Dayjs | null>>;
}

export const DatePickerPair = (props: DatePickerPairProps) => {
  const {startTime, setStartTime, endTime, setEndTime} = props;
  return (
    <Stack data-testid={TestID.DATE_PICKER_PAIR} sx={{padding: 2}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker
            label="Start Time"
            value={startTime}
            onChange={(newDate) => setStartTime(newDate)}
            slotProps={{
              textField: {
                helperText: 'MM/DD/YYYY',
              },
            }}
          />
          <DatePicker
            label="End Time"
            value={endTime}
            onChange={(newDate) => setEndTime(newDate)}
            slotProps={{
              textField: {
                helperText: 'MM/DD/YYYY',
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Stack>
  );
};

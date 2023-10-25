import {FormControl, InputLabel, Select, SelectChangeEvent, Stack} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, {Dispatch, SetStateAction} from 'react';
import {TestID} from '../../utils/testing/Constant';
import {PriceType} from '../../api/finnhub-api/stocks/StockConst';

export interface DropdownSelectorProps {
  dropdownLabel: string;
  dropdownOptions: string[];
  dropdownSelection: string;
  handleDropdownChange: Dispatch<SetStateAction<PriceType>>;
}

export const DropdownSelector = (props: DropdownSelectorProps) => {
  const {dropdownLabel, dropdownOptions, dropdownSelection, handleDropdownChange} = props;
  return (
    <Stack data-testid={TestID.DROPDOWN_SELECTOR}>
      <FormControl fullWidth sx={{width: 480}}>
        <InputLabel>{dropdownLabel}</InputLabel>
        <Select
          data-testid={`${TestID.DROPDOWN_SELECTOR}_${dropdownSelection}`}
          value={dropdownSelection}
          label={dropdownSelection}
          onChange={(event: SelectChangeEvent) => handleDropdownChange(event.target.value as PriceType)}
        >
          {dropdownOptions.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

import {FormControl, InputLabel, Select, SelectChangeEvent, Stack} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, {Dispatch, SetStateAction} from 'react';
import {TestID} from '../../utils/testing/Constant';

export interface DropdownSelectorProps {
  label: string;
  dropdownOptions: string[]
  value: string;
  handleChange: Dispatch<SetStateAction<string>>;
}

export const DropdownSelector = (props: DropdownSelectorProps) => {
  const { label, dropdownOptions, value, handleChange } = props;
  return (
    <Stack data-testid={TestID.DROPDOWN_SELECTOR}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          data-testid={`${TestID.DROPDOWN_SELECTOR}_${value}`}
          value={value}
          label={value}
          onChange={(event: SelectChangeEvent) => handleChange(event.target.value as string)}
        >
          {dropdownOptions.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
    </Stack>
  );
};

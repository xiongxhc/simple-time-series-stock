import {Box} from '@mui/material';
import React, {Dispatch, SetStateAction} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {StockListDto} from '../../api/finnhub-api/stocks/StockPriceDto';

interface StockSelectionTableProps {
  stockList: StockListDto[];
  setRowSelectionModel: Dispatch<SetStateAction<string[]>>;
}

const columns: GridColDef[] = [
  {field: 'symbol', headerName: 'Stock Symbol', width: 200},
  {
    field: 'description',
    headerName: 'Description',
    sortable: false,
    width: 300,
  },
];

export const StockSelectionTable = (props: StockSelectionTableProps) => {
  const {stockList, setRowSelectionModel} = props;
  return (
    <Box sx={{ height: 600, width: '45%', padding: 2 }}>
      <DataGrid
        rows={stockList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {page: 0, pageSize: 10},
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel as string[]);
        }}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

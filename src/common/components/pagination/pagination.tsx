import * as React from 'react';
import Box from '@mui/material/Box';
import {
  Button,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { usePagination } from './pagination.hook';

export interface IPagination {
  initialCurrentPage?: number;
  pagesQty: number;
  nextPage?: string | null;
  prevPage?: string | null;
  changeEffects: () => void;
}

export const Pagination = ({
  initialCurrentPage = 1,
  pagesQty = 1,
  nextPage,
  prevPage,
  changeEffects,
}) => {
  const {
    generatePagesNumbers,
    handleSelectorChange,
    handlePageChange,
    currentPage,
    moveOnePage,
  } = usePagination();

  React.useEffect(() => {
    handlePageChange(initialCurrentPage);
  }, []);

  React.useEffect(() => {
    handlePageChange(currentPage);
    changeEffects(currentPage);
  }, [currentPage]);

  return (
    <>
      <Box display={'flex'} gap={3}>
        <Button variant="contained" onClick={() => moveOnePage(-1, pagesQty)} disabled={!(!!prevPage)}>
          Prev
        </Button>
        <Box display={'flex'} alignItems={'center'} gap={1}>
          <Select
            value={currentPage}
            label="page"
            onChange={handleSelectorChange}
            size="small"
          >
            {pagesQty &&
              generatePagesNumbers(pagesQty).map((_, i) => (
                <MenuItem value={i}>{i}</MenuItem>
              ))}
          </Select>
          <Typography variant="h6">/ {pagesQty}</Typography>
        </Box>
        <Button variant="contained" onClick={() => moveOnePage(+1, pagesQty)} disabled={!(!!nextPage)}>
          Next
        </Button>
      </Box>
    </>
  );
};

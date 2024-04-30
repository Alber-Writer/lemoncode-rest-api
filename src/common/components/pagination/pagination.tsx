import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, MenuItem, Select, Typography } from '@mui/material';
import { usePagination } from './pagination.hook';

export interface IPagination {
  pagesQty: number;
  nextPage?: string | null;
  prevPage?: string | null;
  searchFilters? : string;
}

export const Pagination:React.FC<IPagination> = ({
  pagesQty = 1,
  nextPage,
  prevPage,
  searchFilters
}:IPagination) => {
  const {
    generatePagesNumbers,
    handleSelectorChange,
    currentPage,
    moveOnePage,
    goToPage,
    urlSearchPageNum,
    path,
    handleNewPage
  } = usePagination();

  React.useEffect(() => {
    handleNewPage(urlSearchPageNum);
  }, [path]);

  return (
    <>
      <Box display={'flex'} gap={3}>
      <Button
          variant="outlined"
          onClick={() => goToPage(1, pagesQty, searchFilters)}
          disabled={!!!prevPage}
        >
          First
        </Button>
        <Button
          variant="contained"
          onClick={() => moveOnePage(-1, pagesQty, searchFilters)}
          disabled={!!!prevPage}
        >
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
                <MenuItem value={i} key={i}>
                  {i}
                </MenuItem>
              ))}
          </Select>
          <Typography variant="h6">/ {pagesQty}</Typography>
        </Box>
        <Button
          variant="contained"
          onClick={() => moveOnePage(+1, pagesQty, searchFilters)}
          disabled={!!!nextPage}
        >
          Next
        </Button>
        <Button
          variant="outlined"
          onClick={() => goToPage(pagesQty,pagesQty, searchFilters)}
          disabled={!!!nextPage}
        >
          Last
        </Button>
      </Box>
    </>
  );
};

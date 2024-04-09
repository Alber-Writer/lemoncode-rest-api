import * as React from 'react';
import { SelectChangeEvent } from '@mui/material';


export const usePagination = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const generatePagesNumbers = (qty: number = 1): number[] => new Array(qty + 1).fill(0, 1, qty + 1);

  const handlePageChange = (n: number) => {
    setCurrentPage(n);
  };

  const handleSelectorChange = (e: SelectChangeEvent<number>) => {
    handlePageChange(
      typeof e.target.value === 'number'
        ? e.target.value
        : parseInt(e.target.value)
    );
  };

  const isValidPage = (possibleResult: number, maxLimit: number) =>
  !(possibleResult <= 0 || possibleResult >= maxLimit);

const moveOnePage = (step: number = 1, from:number) => {
  const possibleResult = currentPage + step;
  if(isValidPage(possibleResult, from)) handlePageChange(possibleResult)
  return
};

  return {
    handlePageChange,
    handleSelectorChange,
    generatePagesNumbers,
    currentPage,
    moveOnePage
  };
};

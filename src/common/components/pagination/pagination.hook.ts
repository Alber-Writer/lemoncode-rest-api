import * as React from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useURLInfo } from 'common/hooks';

export const usePagination = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const {path, urlSearchPageNum} = useURLInfo()
  const navigate = useNavigate();
  const handleNewPage = (pageNum: number) => setCurrentPage(pageNum);

  const generatePagesNumbers = (qty: number = 1): number[] =>
    new Array(qty + 1).fill(0, 1, qty + 1);

  const isValidPage = (possibleResult: number, maxLimit: number) =>
    !(possibleResult <= 0 || possibleResult > maxLimit);

  const goToPage = (n: number, ofAvailable: number) => {
    if (isValidPage(n, ofAvailable)) setCurrentPage(n);
    navigate(`${path.pathname}?page=${n}`);
  };

  const handleSelectorChange = (
    e: SelectChangeEvent<number>,
    ofAvailable: number
  ) => {
    goToPage(
      typeof e.target.value === 'number'
        ? e.target.value
        : parseInt(e.target.value),
      ofAvailable
    );
  };

  const moveOnePage = (step: number = 1, ofAvailable: number) => {
    const possibleResult = currentPage + step;
    goToPage(possibleResult, ofAvailable);
    return;
  };

  return {
    goToPage,
    handleSelectorChange,
    generatePagesNumbers,
    currentPage,
    moveOnePage,
    path,
    urlSearchPageNum,
    handleNewPage,
  };
};

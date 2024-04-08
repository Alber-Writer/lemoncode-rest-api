import React from "react";

export const usePagination = (itemsList:unknown[]) => {
  const [pagIndex, setPagIndex] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(1);
  const [itemsQtyPerPage, setItemsQtyPerPage] = React.useState(3);
  const [renderedItemsAtPage, setRenderedItemsAtPage] = React.useState([]);

  React.useEffect(() => {
    const { paginatedList, pagesQty } = listPagination(
      itemsList
    );
    setRenderedItemsAtPage(paginatedList[pagIndex] ?? itemsList);
    setTotalPages(pagesQty);
    if (itemsList.length > 0 && itemsQtyPerPage > itemsList.length) {
      setPagIndex(pagesQty - 1);
    }
  }, [itemsList, pagIndex, itemsQtyPerPage]);
  
  const listPagination = <T>(arrayToPaginate: T[], itemsPerPage: number = itemsQtyPerPage
  ) =>{
    let paginatedList = [];
    for (let i = 0; i < arrayToPaginate.length; i += itemsPerPage) {
      const chunk = arrayToPaginate.slice(i, i + itemsPerPage);
      paginatedList = [...paginatedList, [...chunk]];
    }
    const pagesQty = Math.ceil(arrayToPaginate.length / itemsPerPage);
    return { paginatedList, pagesQty };
  };

  const goToPrevPage = () => {
    pagIndex <= 0 ? pagIndex : setPagIndex(pagIndex - 1);
  };
  const goToNextPage = () => {
    pagIndex >= totalPages - 1 ? totalPages : setPagIndex(pagIndex + 1);
  };

  const changeItemsQtyPerPage = (qty:number) => {
    setItemsQtyPerPage(qty)
    setPagIndex(0)
  };

  return {
    pagIndex,
    totalPages,
    renderedItemsAtPage,
    itemsQtyPerPage,
    listPagination,
    goToPrevPage,
    goToNextPage,
    changeItemsQtyPerPage
  };
};

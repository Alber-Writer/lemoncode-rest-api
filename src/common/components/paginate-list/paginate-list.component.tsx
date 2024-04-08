import React from "react";

import Stack from "@mui/material/Stack";

import { usePagination } from "./hooks/usePagination.hooks";
import { ItemsPerPageSelector } from "./components/items-per-page-selector.component";

import { Button } from "@/common/components/button";
import { Box } from "@/common/components/box";

interface Props<T> {
  children?: React.ReactNode;
  itemsList: T[];
  RowDisplayerComponent: (item: T) => React.ReactNode | React.ReactElement
  showItemsPerPageSelector?: boolean;
}

export const PaginateList: React.FC<Props<unknown>> = (
  props: Props<unknown>
) => {
  const { itemsList, showItemsPerPageSelector=true } = props;
  const {
    pagIndex,
    totalPages,
    renderedItemsAtPage,
    itemsQtyPerPage,
    goToPrevPage,
    goToNextPage,
    changeItemsQtyPerPage,
  } = usePagination(itemsList);

  return (
    <>
      <Stack spacing={3} padding={1}>
        {renderedItemsAtPage.map((item, index) =>
          props.RowDisplayerComponent(item)
        )}
      </Stack>
      <div className="pagination">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
          margin="1rem"
        >
          <Button
            id="prev"
            variant="outlined"
            disabled={pagIndex <= 0}
            onClick={goToPrevPage}
          >
            Prev
          </Button>
          <p>Page: {`${pagIndex + 1} / ${totalPages}`}</p>

          <Button
            id="next"
            variant="outlined"
            disabled={pagIndex >= totalPages - 1}
            onClick={goToNextPage}
          >
            Next
          </Button>
        </Box>
        {showItemsPerPageSelector && (
          <ItemsPerPageSelector
            itemsPerPage={itemsQtyPerPage}
            handleSetItemsPerPage={changeItemsQtyPerPage}
          />
        )}
      </div>
    </>
  );
};

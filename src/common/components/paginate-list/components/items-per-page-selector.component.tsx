import React, { useRef } from "react";

import {Select} from "@/common//components/select";
import { Box } from "@/common//components/box";

import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  itemsPerPage: number;
  handleSetItemsPerPage: (value: number) => void;
}
export const ItemsPerPageSelector: React.FC<Props> = (props: Props) => {
  const { itemsPerPage, handleSetItemsPerPage:propHandler } = props;
  const initialItemsPerPage = useRef(itemsPerPage);
  const itemsPerPageOptions = [
    initialItemsPerPage.current,
    "5",
    "10",
    "15",
    "20",
  ];
  const handleSetItemsPerPage = (e:SelectChangeEvent<number>) => propHandler(Number(e.target.value))
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <span>Display </span>
      <Select
        value={itemsPerPage}
        onChange={handleSetItemsPerPage}
        size="small"
        sx={{margin:"0 0.5rem"}}
      >
        {itemsPerPageOptions.map((element) => (
          <MenuItem value={element} key={`id_${element}`}>
            {element}
          </MenuItem>
        ))}
      </Select>
      <span> members per page</span>
    </Box>
  );
};

import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const CartBadge = ({className}) => {
    

  return (
    <Badge badgeContent={1} color="success" className={className}>
      <ShoppingCartOutlinedIcon />
    </Badge>
  );
};

export default CartBadge;

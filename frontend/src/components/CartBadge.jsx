import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const CartBadge = () => {
    

  return (
    <Badge badgeContent={0} color="success">
      <ShoppingCartOutlinedIcon />
    </Badge>
  );
};

export default CartBadge;

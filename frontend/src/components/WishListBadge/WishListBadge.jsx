import * as React from "react"
import Badge from "@mui/material/Badge"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

const WishListBadge = () => {
  return (
    <Badge badgeContent={0} color="success">
      <FavoriteBorderOutlinedIcon />
    </Badge>
  )
}

export default WishListBadge;

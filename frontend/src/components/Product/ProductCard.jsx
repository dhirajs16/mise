import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ProductCard = (props) => {
  const [showBadge, setShowBadge] = useState(false);
  const { item } = props;
  return (
    <>
      <div
        onMouseEnter={() => setShowBadge(true)}
        onMouseLeave={() => setShowBadge(false)}
        className="h-[40vh] bg-white border-2 rounded-lg p-3 mr-5 relative"
      >
        {showBadge && (
          <div className="bg-red-600 p-1 rounded-lg absolute z-10 right-3 text-white">
            <ShoppingCartOutlinedIcon className="hover:bg-red-500 p-1 rounded-md" />
            <FavoriteBorderOutlinedIcon className="hover:bg-red-500 p-1 rounded-md" />
          </div>
        )}
        <img
          className="w-full h-3/4 object-cover overflow-hidden hover:scale-90 transition ease-in-out"
          src={item.image}
          alt="product_image"
        />
        <span className="truncate block overflow-auto">{item.name}</span>
        <span className="font-bold">NRs. <span>{item.price}</span></span>
      </div>
    </>
  );
};

export default ProductCard;

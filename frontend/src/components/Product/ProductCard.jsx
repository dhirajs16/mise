import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const [showBadge, setShowBadge] = useState(false);
  const { item } = props;
  return (
    <>
      <Link to={`/product/${item.id}`}>
        <div
          // add to cart & wishlist hover functionality
          onMouseEnter={() => setShowBadge(true)}
          onMouseLeave={() => setShowBadge(false)}
          className="h-[40vw] lg:h-[40vh] bg-white border-2 rounded-lg p-2 lg:p-3 mr-5 relative max-lg:text-sm"
        >
          {showBadge && (
            <div className="bg-red-600 p-1 rounded-lg absolute z-10 right-3 text-white">
              <ShoppingCartOutlinedIcon className="hover:bg-red-500 p-1 rounded-md" />
              <FavoriteBorderOutlinedIcon className="hover:bg-red-500 p-1 rounded-md" />
            </div>
          )}

          {/* product image */}
          <img
            className="w-full h-3/4 object-scale-down hover:scale-90 transition ease-in-out"
            src={item.image}
            alt="product_image"
          />
          {/* product price & discount */}
          <span className="truncate block">{item.name}</span>
          <div className="font-bold flex gap-2">
            NRs. <span>{item.price - (item.discount * item.price) / 100}</span>
            <span className="text-white bg-yellow-500 rounded-lg font-medium px-3">
              {Math.floor(item.discount)}% off
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;

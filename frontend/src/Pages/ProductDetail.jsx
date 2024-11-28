import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../services/productsApi";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ProductGroup from "../components/Product/ProductGroup";

const ProductDetail = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useGetProductByIdQuery(id);

  if (isError) return <span>Error...</span>;
  if (isLoading) return <span>Loading...</span>;
  if (!data) return <span>No products</span>;

  return (
    <>
      <div className="lg:grid grid-cols-3 w-screen p-10">
        {/* image and add to cart column */}
        <div className="col-span-1 flex flex-col items-center gap-5">
          <img
            className="object-scale-down"
            src={data.image}
            alt="product_image"
          />
          <button className="flex gap-3 items-center justify-center text-white bg-green-600 rounded-xl w-1/2 px-3 py-2">
            <ShoppingCartOutlinedIcon />
            <span>Add to Cart</span>
          </button>
        </div>

        {/* product detail column */}
        <div className="col-span-2 flex flex-col gap-3 px-10 py-3">
          {/* product name */}
          <h3 className="text-xl text-gray-800 font-semibold text-pretty">
            {data.name}
          </h3>

          {/* product pricing and discount */}
          <div className="flex items-center gap-3 text-xl font-bold cursor-default">
            {/* price after discount */}
            <span>NRs. {data.price - data.discount * data.price * 0.01}</span>
            <span className="line-through text-lg text-gray-600">
              {Math.floor(data.price)}
            </span>
            {/* discount tag */}
            <span className="px-4 py-1 rounded-xl text-sm text-white bg-yellow-500">
              {Math.floor(data.discount)}% off
            </span>
          </div>

          {/* product description */}
          <p className="text-gray-700 max-lg:truncate text-balance w-2/3">{data.description}</p>
        </div>
      </div>
      {/* Related Products */}
      <div className="bg-gray-200">
        <h3 className="text-xl pt-5 px-10">Related Products</h3>
        <ProductGroup category_id={data.category} />
      </div>
    </>
  );
};

export default ProductDetail;

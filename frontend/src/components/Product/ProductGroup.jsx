import { useGetProductsByCategoryQuery } from "../../services/productsApi";
import Slider from "../Slider/Slider";
import ProductCard from "./ProductCard";

const ProductGroup = (props) => {
  const { category_id } = props;
  const { isError, isLoading, data } =
    useGetProductsByCategoryQuery(category_id);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (!data || data.length === 0) return <div>No products</div>;

  return (
    <>
      <div className="bg-gray-200 mb-3 lg:mb-5">
        <h3 className="text-center uppercase font-semibold pt-10">Products</h3>
        <div className="hidden lg:flex lg:p-10">
          <Slider slidesPerView={5} data={data} component={ProductCard} />
        </div>
        {/* Mobile view */}
        <div className="lg:hidden p-5">
          <Slider slidesPerView={2} data={data} component={ProductCard} />
        </div>
      </div>
    </>
  );
};

export default ProductGroup;

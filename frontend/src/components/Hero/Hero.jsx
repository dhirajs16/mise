import Slider from "../Slider/Slider";
import CategoryList from "./CategoryList";
import Carousel from "../Carousel/Carousel";
import { slides } from "/src/mock.json";
import { useGetAllCategoriesQuery } from "../../services/productsApi";
import CategoryIcon from "./CategoryIcon";
import ProductGroup from "../Product/ProductGroup";
import ProductDetail from "../../Pages/ProductDetail";

const Hero = () => {
  const { isError, isLoading, data } = useGetAllCategoriesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (!data || data.length === 0) return <div>No products</div>;

  return (
    <>
      <div className="hidden lg:grid grid-cols-5 gap-5 w-screen lg:h-[640px] lg:px-5 lg:py-3">
        {/* Left Vertical Bar: All Categories */}
        <div className="col-span-1 h-full bg-gray-100">
          <CategoryList data={data} />
        </div>

        {/* Carousel */}
        <div className="col-span-4 h-full bg-gray-100">
          <Carousel slides={slides} slidesPerView={1} />
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden mt-1 w-full h-[50vw] bg-gray-200">
        <Carousel slides={slides} slidesPerView={1} />
      </div>

      {/* Categories Section */}
      <h3 className="text-center uppercase font-semibold pt-10">Categories</h3>
      <div className="hidden lg:flex lg:p-10">
        <Slider slidesPerView={5} data={data} component={CategoryIcon} />
      </div>
      {/* Mobile view */}
      <div className="lg:hidden p-5">
        <Slider slidesPerView={4} data={data} component={CategoryIcon} />
      </div>

      {/* Product Section */}
      <ProductGroup category_id = {1} />
      {/* <ProductGroup category_id = {2} /> */}
      <ProductGroup category_id = {3} />
      <ProductDetail />
    </>
  );
};

export default Hero;

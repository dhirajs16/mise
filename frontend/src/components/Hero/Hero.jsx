import AllCategories from "./AllCategories";
import Carousel from "./Carousel";
import Category from "./Category";

const Hero = () => {
  return (
    <>
      <div className="hidden lg:grid grid-cols-5 gap-5 w-screen lg:h-[520px] lg:px-5 lg:py-3">
        
        {/* All Categories */}
        <div className="col-span-1 h-full bg-gray-100">
          <AllCategories />
        </div>

        {/* Carousel */}
        <div className="col-span-4 h-full bg-gray-100">
          <Carousel />
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden mt-1 w-full h-[50vw] bg-gray-200">
        <Carousel />
      </div>

      <Category />
    </>
  );
};

export default Hero;

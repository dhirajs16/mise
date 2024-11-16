import Slider from "./Slider";
import AllCategories from "./AllCategories";
import Carousel from "./Carousel";
import { slides } from "/src/mock.json";

const Hero = () => {
  return (
    <>
      <div className="hidden lg:grid grid-cols-5 gap-5 w-screen lg:h-[640px] lg:px-5 lg:py-3">
        {/* Left Vertical Bar: All Categories */}
        <div className="col-span-1 h-full bg-gray-100">
          <AllCategories />
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
        <Slider slidesPerView={5} />
      </div>
      {/* Mobile view */}
      <div className="lg:hidden p-5">
        <Slider slidesPerView={4} />
      </div>
    </>
  );
};

export default Hero;

import { categories } from "/src/mock.json";

const AllCategories = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center gap-5 p-10">
        <p className="uppercase font-semibold text-sm text-white text-center px-7 py-3 rounded-full bg-[#0078fc]">
          all categories
        </p>
        {categories.map((category) => (
          <p key={category.id}>{category.name}</p>
        ))}
      </div>
    </>
  );
};

export default AllCategories;

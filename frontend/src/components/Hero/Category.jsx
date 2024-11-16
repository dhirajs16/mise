const Category = (props) => {
  const { name } = props;
  return (
    <>
      <div className="flex items-center justify-center w-[20vw] lg:w-[15vw] h-[20vw] lg:h-[15vw] bg-gray-200 rounded-full">
        {name}
      </div>
    </>
  );
};

export default Category;

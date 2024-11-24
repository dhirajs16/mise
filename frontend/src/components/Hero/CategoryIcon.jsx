const CategoryIcon = (props) => {
  const { item } = props;
  return (
    <>
      <div className="flex items-center justify-center w-[20vw] lg:w-[15vw] h-[20vw] lg:h-[15vw] bg-gray-200 rounded-full">
        {item.name}
      </div>
    </>
  );
};

export default CategoryIcon;

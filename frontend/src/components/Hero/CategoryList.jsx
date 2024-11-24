const CategoryList = (props) => {
  const { data } = props;
  return (
    <>
      <div className="w-full h-full flex flex-col items-center gap-5 p-10">
        <p className="uppercase font-semibold text-sm text-white text-center px-7 py-3 rounded-full bg-[#0078fc]">
          all categories
        </p>
        {data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </>
  );
};

export default CategoryList;

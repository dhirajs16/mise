import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const AllCategoriesButton = () => {
  return (
    <>
        <button className="bg-[#0078fc] text-white p-4 rounded-full flex items-center gap-5">
            <MenuOpenRoundedIcon />
            <span className="uppercase font-bold text-sm">all categories</span>
            <ChevronRightRoundedIcon />
          </button>
    </>
  )
}

export default AllCategoriesButton
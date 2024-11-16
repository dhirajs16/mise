import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {

  return (
    <>
      <form className="w-[50vw] bg-white flex items-center rounded-full px-3">
        <SearchIcon />
        <input
          type="text"
          className="px-3 w-[40vw] focus:outline-none"
          placeholder="Search Product"
        />
      </form>
    </>
  );
};

export default SearchBar;

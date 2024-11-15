import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  const { className } = props
  return (
    <>
      <form className={`${className}`}>
        <input
          type="text"
          className="w-4/5 h-full rounded-full px-10 focus:outline-none font-lato text-gray-700"
          placeholder="Search Product"
        />
        <Link to="/">
          <SearchIcon />
        </Link>
      </form>
    </>
  );
};

export default SearchBar;

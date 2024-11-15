import countries from "/src/assets/data/countries";
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import CartBadge from "../CartBadge";
import WishListBadge from "../WishListBadge";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from "react-router-dom";
const Header = () => {
  console.log(countries);
  return (
    <>
      <div className="flex justify-between items-center w-screen h-12 sm:h-20 px-6 sm:px-16 bg-gray-100 border-b-2">
        <div className="flex gap-5">
          <Logo className="w-20 md:w-24" />
          <SearchBar className="hidden sm:flex items-center justify-center gap-5 w-[50vw]" />
        </div>
        <div className="flex gap-5">
          <WishListBadge />
          <CartBadge />
          <Link to='/login'><AccountCircleRoundedIcon /></Link>
          
        </div>
      </div>
    </>
  );
};

export default Header;

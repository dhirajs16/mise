import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CartBadge from "../CartBadge/CartBadge";
import MenuIcon from "@mui/icons-material/Menu";
import NavItems from "./NavItems";
import Logo from "../Logo/Logo";
import WishListBadge from "../WishListBadge/WishListBadge";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center h-16 lg:h-24 w-screen px-4 sm:px-10 bg-slate-100 rounded-b-xl">
        {/* Logo & Search Bar */}
        <div className="flex gap-2 lg:gap-5">
          <Logo className="w-20 h-9" />
          <SearchBar />
        </div>

        {/* Nav Items: home, about & contacts */}
        <NavItems />

        {/* Wishlist, Cart & Login button */}
        <div className="hidden lg:flex gap-5 justify-center">
          <WishListBadge />
          <CartBadge />
          <AccountCircleRoundedIcon />
        </div>

        {/* Ham Menu for mobile view */}
        <div className="flex lg:hidden">
          <MenuIcon />
        </div>
      </div>
    </>
  );
};

export default Header;

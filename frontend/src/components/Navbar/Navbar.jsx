import { NavLink } from "react-router-dom";
import AllCategoriesButton from "./AllCategoriesButton";
import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

const Navbar = () => {
  return (
    <>
      <div className="hidden sm:grid grid-cols-5 gap-5 h-32 bg-gray-50 px-5">
        <div className="col-span-1 flex items-center justify-center">
          <AllCategoriesButton />
        </div>

        <div className="col-span-4 flex justify-center items-center gap-14 uppercase text-sm font-bold text-gray-600">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive && "text-[#0078fc] bg-blue-200 px-4 py-2 rounded-3xl"
            }
          >
            Home
          </NavLink>
          <button className='flex items-center'><LocalMallRoundedIcon />Shop</button>
          <button className='flex items-center'><OfflineBoltRoundedIcon />Electronics</button>
          <button className='flex items-center'><DiamondRoundedIcon />Fashion</button>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive && "text-[#0078fc] bg-blue-200 px-3 py-2 rounded-3xl"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive && "text-[#0078fc] bg-blue-200 px-3 py-2 rounded-3xl"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

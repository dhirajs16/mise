import { NavLink } from "react-router-dom";
import logo from "/src/assets/images/logo.svg";

const Header = () => {
  return (
    <>
      <h1 className="font-lato">Header</h1>
      <img src={logo} alt="logo" />
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
    </>
  );
};

export default Header;

import { NavLink } from "react-router-dom"

const NavItems = () => {
  return (
    <>
        <nav className="hidden lg:flex gap-5">
          <NavLink to="/" className={({isActive}) => isActive && 'text-[#0078fc]'}>Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive && 'text-[#0078fc]'}>About</NavLink>
          <NavLink to="/contacts" className={({isActive}) => isActive && 'text-[#0078fc]'}>Contacts</NavLink>
        </nav>
    </>
  )
}

export default NavItems
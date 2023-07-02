
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center fixed z-10 py-5 px-8 text-sm ">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg ">
          <NavLink to="/">
            EcoM
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothes" className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to="/fornitures" className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Fornitures
          </NavLink>
        </li>
        <li>
          <NavLink to="/toys" className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to="/others" className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          Renier1989@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders' className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            My Account
          </NavLink>
        </li>
        <li>
          ShopiCar (0)
        </li>
        <li>
          <NavLink to='/sign-in' className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Sign In
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default NavBar;

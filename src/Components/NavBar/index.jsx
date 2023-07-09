
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {useEcom} from "../../Context"
import { NavLink } from "react-router-dom";


function NavBar() {
  const ecom = useEcom();
  return (
    <nav className="w-full flex justify-between items-center fixed z-10 top-0 py-5 px-8 text-sm bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg ">
          <NavLink to="/" onClick={()=> ecom.setSearchCategory()}>
            EcoM
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={()=> ecom.setSearchCategory()} className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink  to="/shoes" onClick={()=> ecom.setSearchCategory('shoes')} className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink  to="/electronics" onClick={()=>ecom.setSearchCategory('electronics')} className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink  to="/furnitures" onClick={()=>ecom.setSearchCategory('furniture')} className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Furnitures
          </NavLink>
        </li>
        {/* <li>
          <NavLink  to="/toys" onClick={()=>ecom.setSearchCategory('toys')} className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Toys
          </NavLink>
        </li> */}
        <li>
          <NavLink  to="/others" onClick={()=>ecom.setSearchCategory('others')} className={({isActive}) => (isActive ? 'navbar-link' : '')}>
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
          <NavLink to='/sign-in' className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Sign In
          </NavLink>
        </li>
        <li  className="flex border border-black rounded-lg p-1 items-center font-semibold cursor-pointer hover:bg-blue-300 hover:text-white group hover:transition hover:duration-500"
        onClick={()=> ecom.onOpenCheckoutProducts()}
        >
          <div ><ShoppingCartIcon className="w-6 h-6 text-blue-400 group-hover:text-white"></ShoppingCartIcon> </div>
          <div>({ecom.cartProducts.length})</div>
        </li>

      </ul>
    </nav>
  );
}

export { NavBar};

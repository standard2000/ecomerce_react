
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {useEcom} from "../../Context"
import { NavLink } from "react-router-dom";


function NavBar() {
  const ecom = useEcom();

  const signInOut = localStorage.getItem('sign-in-out');
  const parsedSignInOut = JSON.parse(signInOut);
  const isUserSignInOut = ecom.signInOut || parsedSignInOut;

  // console.log(isUserSignInOut  , ecom.signInOut , parsedSignInOut);

  const handleSignOut = () => {
    const stringifiedSignInOut = JSON.stringify(true);
    localStorage.setItem("sign-in-out", stringifiedSignInOut);
    ecom.setSignInOut(true);
    ecom.onCloseCheckoutProducts();
  }

  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  // has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = ecom.account ? Object.keys(ecom.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState


  const renderView = () => {
    if(hasUserAnAccount && !isUserSignInOut) {
      return (
        <>
          <li className="text-black/60">
          {parsedAccount?.email}
          </li>
          <li>
            <NavLink to='/ecomerce/my-orders' className={({isActive}) => (isActive ? 'navbar-link' : '')}>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink to='/ecomerce/my-account' className={({isActive}) => (isActive ? 'navbar-link' : '')}>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink to='/ecomerce/sign-in' 
            className={({isActive}) => (isActive ? 'navbar-link' : '')}
            onClick={()=> handleSignOut()}
            >
              Sign Out
            </NavLink>
          </li>
          <li  className="flex border border-black rounded-lg p-1 items-center font-semibold cursor-pointer hover:bg-blue-300 hover:text-white group hover:transition hover:duration-500"
          onClick={()=> ecom.onOpenCheckoutProducts()}
          >
            <div ><ShoppingCartIcon className="w-6 h-6 text-blue-400 group-hover:text-white"></ShoppingCartIcon> </div>
            <div>({ecom.cartProducts.length})</div>
          </li>
        </>
      );
    }else{
      return (
        <li>
          <NavLink to='/ecomerce/sign-in' className={({isActive}) => (isActive ? 'navbar-link' : '')}  onClick={()=> handleSignOut()}>
            Sign In
          </NavLink>
        </li>
      )
    }
  }




  return (
    <nav className="w-full flex justify-between items-center fixed z-10 top-0 py-5 px-8 text-sm bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg ">
          <NavLink to={isUserSignInOut ? "/ecomerce/sign-in" : "/ecomerce/"} onClick={()=> ecom.setSearchCategory()}>
            EcoM
          </NavLink>
        </li>
        <li>
          <NavLink to="/ecomerce/" onClick={()=> ecom.setSearchCategory()} className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink  to="/ecomerce/shoes" onClick={()=> ecom.setSearchCategory('shoes')} className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink  to="/ecomerce/electronics" onClick={()=>ecom.setSearchCategory('electronics')} className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink  to="/ecomerce/furnitures" onClick={()=>ecom.setSearchCategory('furniture')} className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Furnitures
          </NavLink>
        </li>
        {/* <li>
          <NavLink  to="/ecomerce/toys" onClick={()=>ecom.setSearchCategory('toys')} className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Toys
          </NavLink>
        </li> */}
        <li>
          <NavLink  to="/ecomerce/others" onClick={()=>ecom.setSearchCategory('others')} className={({isActive}) => (isActive ? 'navbar-link' : '')}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        {renderView()}
      </ul>
    </nav>
  );
}

export { NavBar};

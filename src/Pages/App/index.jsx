import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { SignIn } from "../SignIn";
import { NotFound } from "../NotFound";
import {NavBar} from "../../Components/NavBar";
import "./App.css";

import {EcomProvider, initializeLocalStorage, useEcom} from "../../Context";
import { CheckoutProducts } from "../../Components/CheckoutProducts";

const AppRoutes = () => {

  const ecom = useEcom();

  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);
  const signInOut = localStorage.getItem('sign-in-out');
  const parsedSignInOut = JSON.parse(signInOut);
  const isUserSignInOut = ecom.signInOut || parsedSignInOut;

  // has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = ecom.account ? Object.keys(ecom.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState


  let routes = useRoutes([
    { path: "/ecomerce/", element: hasUserAnAccount && !isUserSignInOut ?  <Home /> : <Navigate replace to={'/ecomerce/sign-in'} /> },
    { path: "/ecomerce/shoes", element: hasUserAnAccount && !isUserSignInOut ?  <Home /> : <Navigate replace to={'/ecomerce/sign-in'} /> },
    { path: "/ecomerce/electronics", element: hasUserAnAccount && !isUserSignInOut ?  <Home /> : <Navigate replace to={'/ecomerce/sign-in'} /> },
    { path: "/ecomerce/furnitures", element: hasUserAnAccount && !isUserSignInOut ?  <Home /> : <Navigate replace to={'/ecomerce/sign-in'} /> },
    // { path: "/ecomerce/toys", element: hasUserAnAccount && !isUserSignInOut ?  <Home /> : <Navigate replace to={'/ecomerce/sign-in'} /> },
    { path: "/ecomerce/others", element: hasUserAnAccount && !isUserSignInOut ?  <Home /> : <Navigate replace to={'/ecomerce/sign-in'} /> },
    
    { path: "/ecomerce/my-account", element: hasUserAnAccount && !isUserSignInOut ?  <MyAccount /> : <Navigate replace to={'/ecomerce/sign-in'} /> },
    { path: "/ecomerce/my-order", element: hasUserAnAccount && !isUserSignInOut ? <MyOrder /> : <Navigate replace to={'/ecomerce/sign-in'} />},
    { path: "/ecomerce/my-order/last", element: hasUserAnAccount && !isUserSignInOut ? <MyOrder /> : <Navigate replace to={'/ecomerce/sign-in'} />},
    { path: "/ecomerce/my-order/:id", element: hasUserAnAccount && !isUserSignInOut ? <MyOrder /> : <Navigate replace to={'/ecomerce/sign-in'} />},
    { path: "/ecomerce/my-orders", element: hasUserAnAccount && !isUserSignInOut ? <MyOrders /> : <Navigate replace to={'/ecomerce/sign-in'} />},
    { path: "/ecomerce/sign-in", element: <SignIn /> },
  ]);

  return routes;
};

function App() {
  initializeLocalStorage();
  return (
    <EcomProvider>
      <BrowserRouter>
        <CheckoutProducts />
        {/* <Layout> */}
        <AppRoutes />
        {/* </Layout> */}
        <NavBar />
      </BrowserRouter>
    </EcomProvider>
    // <>
    //   <Home />
    //   <MyAccount />
    //   <MyOrder />
    //   <MyOrders />
    //   <SignIn />
    //   <NotFound />
    // </>
  );
}

export {App};

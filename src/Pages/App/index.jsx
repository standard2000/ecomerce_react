import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { SignIn } from "../SignIn";
import { NotFound } from "../NotFound";
import {NavBar} from "../../Components/NavBar";
import "./App.css";

import {EcomProvider} from "../../Context";
import { CheckoutProducts } from "../../Components/CheckoutProducts";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/ecomerce/", element: <Home /> },
    { path: "/ecomerce/shoes", element: <Home /> },
    { path: "/ecomerce/electronics", element: <Home /> },
    { path: "/ecomerce/furnitures", element: <Home /> },
    // { path: "/ecomerce/toys", element: <Home /> },
    { path: "/ecomerce/others", element: <Home /> },
    { path: "/ecomerce/my-account", element: <MyAccount /> },
    { path: "/ecomerce/my-order", element: <MyOrder /> },
    { path: "/ecomerce/my-order/last", element: <MyOrder /> },
    { path: "/ecomerce/my-order/:id", element: <MyOrder /> },
    { path: "/ecomerce/my-orders", element: <MyOrders /> },
    { path: "/ecomerce/sign-in", element: <SignIn /> },
  ]);

  return routes;
};

function App() {


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

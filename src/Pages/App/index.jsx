import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { SignIn } from "../SignIn";
import { NotFound } from "../NotFound";
import {NavBar} from "../../Components/NavBar";
import "./App.css";
import Layout from "../../Components/Layout";
import {EcomProvider} from "../../Context";
import { CheckoutProducts } from "../../Components/CheckoutProducts";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-order/last", element: <MyOrder /> },
    { path: "/my-order/:id", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
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

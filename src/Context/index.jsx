import { createContext, useContext, useState } from "react"

const EcomContext = createContext();

function EcomProvider({children}) {

    // Shopping Cart - increment counter
    const [count, setCount] = useState(0);
    // Shopping Cart - adding product to the shopping cart 
    const [cartProducts, setCartProducts] = useState([]);
    // Product Detail - open/close the aside componente
    const [openDetail, setOpenDetail]  = useState(false);  // State to handle open or close the detail
    const onOpenDetail = () => setOpenDetail(true);
    const onCloseDetail = () => setOpenDetail(false);
    // Product Detail - get information about the product
    const [productInfo, setProductInfo] = useState({});
    // Checkout Products - to open/ close the my order products added in the shopping cart
    const [openCheckoutProducts, setOpenCheckoutProducts]  = useState(false);  // State to handle open or close the CheckoutProducts
    const onOpenCheckoutProducts = () => setOpenCheckoutProducts(true);
    const onCloseCheckoutProducts = () => setOpenCheckoutProducts(false);
    // Checkout Order - state to add order from the checkout
    const [order, setOrder] = useState([]);

  return (
        <EcomContext.Provider value={{
            count, 
            openDetail,
            openCheckoutProducts,
            productInfo,
            cartProducts,
            order,
            setOrder,
            setCount,
            onOpenDetail,
            onCloseDetail,
            onOpenCheckoutProducts,
            onCloseCheckoutProducts,
            setProductInfo,
            setCartProducts
        }}>
            {children}
        </EcomContext.Provider>
  )
}

function useEcom(){
    const ecom = useContext(EcomContext);
    return ecom;
}



export {EcomProvider, useEcom}
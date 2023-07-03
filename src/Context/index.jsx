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

  return (
        <EcomContext.Provider value={{
            count, 
            openDetail,
            productInfo,
            cartProducts,
            setCount,
            onOpenDetail,
            onCloseDetail,
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
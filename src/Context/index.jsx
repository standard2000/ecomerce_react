import { createContext, useContext, useEffect, useState } from "react"

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
    //Get pruducts by title
    const [searchProducts, setSearchProducts] = useState(null);
    //Get products
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then((response) => response.json())
        .then((data) => setItems(data));
    }, []);

    const [filteredItems, setFilteredItems] = useState([]);
    
    const getfilteredItemsByTitle = (items, searchProducts)=> {
        return items?.filter(item => item.title.toLowerCase().includes(searchProducts.toLowerCase()));
    };

    useEffect(()=>{
        if(searchProducts) setFilteredItems(getfilteredItemsByTitle(items, searchProducts));
    },[items, searchProducts]);

    //This is to show a limit on how many products shown
    const [visible, setVisible] = useState(12);
    const loadMoreResults = 8;
    const showMore = () => {
      setVisible((prevValue) => prevValue + loadMoreResults);
    };

    

  return (
        <EcomContext.Provider value={{
            count, 
            openDetail,
            openCheckoutProducts,
            productInfo,
            cartProducts,
            order,
            items,
            searchProducts,
            visible,
            filteredItems,
            showMore,
            setSearchProducts,
            setItems,
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
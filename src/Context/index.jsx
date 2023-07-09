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
    //Get pruducts by category
    const [searchCategory, setSearchCategory] = useState(null);
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
    const getfilteredItemsByCategory = (items, setSearchCategory)=> {
        return items?.filter(item => item.category.name.toLowerCase().includes(setSearchCategory.toLowerCase()));
    };

    const filterBy = (searchType, items, searchProducts, searchCategory) => {
        if(searchType ==="BY_TITLE"){
            return getfilteredItemsByTitle(items, searchProducts);
        }
        if(searchType ==="BY_CATEGORY"){
            return getfilteredItemsByCategory(items, searchCategory);
        }
        if(searchType ==="BY_TITLE_AND_CATEGORY"){
            return getfilteredItemsByCategory(items, searchCategory).filter(item => item.title.toLowerCase().includes(searchProducts.toLowerCase()));
        }
        if(!searchType){
            return items;
        }
    }

    useEffect(()=>{
        if(searchProducts && searchCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchProducts, searchCategory));
        if(searchProducts && !searchCategory) setFilteredItems(filterBy('BY_TITLE',items,searchProducts, searchCategory));
        if(!searchProducts && searchCategory) setFilteredItems(filterBy('BY_CATEGORY',items,searchProducts, searchCategory));
        if(!searchProducts && !searchCategory) setFilteredItems(filterBy(null,items,searchProducts, searchCategory));
    },[items, searchProducts,searchCategory]);

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
            searchCategory,
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
            setCartProducts,
            setSearchCategory
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
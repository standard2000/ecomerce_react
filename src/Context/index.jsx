import { createContext, useContext, useEffect, useState } from "react"

const EcomContext = createContext();
// here I'll initialize the localStorage
export const initializeLocalStorage = () => {
    // first , try to obtain the 'account' and 'sign-in-out' key from the localStorage
    const accountLs = localStorage.getItem('account');
    const signInOutLs = localStorage.getItem('sign-in-out');
    // I create some variables to manage the data in it
    let parsetAccount;
    let parsetSignInOut;
    // Validate if accountLs exist, else create the key in the localStoragej
    if(!accountLs){
        localStorage.setItem('account', JSON.stringify({}));
        parsetAccount = {}
    }else {
        parsetAccount = JSON.parse(accountLs);
    }
    if(!signInOutLs){
        localStorage.setItem('sign-in-out', JSON.stringify(false));
        parsetSignInOut = false;
    }else{
        parsetSignInOut = JSON.parse(signInOutLs);
    }
}

function EcomProvider({children}) {
    // I do this only to give a better experience in the github deploy page.
    const location = window.location.pathname;
    if(location === '/') {
        window.location.replace("/ecomerce");
    }

    // account 
    const [account, setAccount] = useState({});
    // Sign in out
    const [signInOut, setSignInOut] = useState(false);

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

    // here I filter the item to show
    const [filteredItems, setFilteredItems] = useState([]);
    // function to filter by title
    const getfilteredItemsByTitle = (items, searchProducts)=> {
        return items?.filter(item => item.title.toLowerCase().includes(searchProducts.toLowerCase()));
    };
    // fucntion to filter by category
    const getfilteredItemsByCategory = (items, setSearchCategory)=> {
        return items?.filter(item => item.category.name.toLowerCase().includes(setSearchCategory.toLowerCase()));
    };
    // Main function to filter by a key value
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

    // using an useEffect to know when to filter the items
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
            account, 
            signInOut,
            setAccount,
            setSignInOut,
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

// basic function to call the useContext once, and use it in all the components as needed
function useEcom(){
    const ecom = useContext(EcomContext);
    return ecom;
}

export {EcomProvider, useEcom}
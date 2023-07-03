import { createContext, useContext, useState } from "react"

const EcomContext = createContext();

function EcomProvider({children}) {

    const [count, setCount] = useState(0);
    const [openDetail, setOpenDetail]  = useState(false);  // State to handle open or close the detail

    const onOpenDetail = () => setOpenDetail(true);
    const onCloseDetail = () => setOpenDetail(false);

  return (
        <EcomContext.Provider value={{
            count, 
            openDetail,
            setCount,
            onOpenDetail,
            onCloseDetail,
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
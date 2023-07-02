import { createContext, useContext, useState } from "react"

const EcomContext = createContext();

function EcomProvider({children}) {

    const [count, setCount] = useState(0);  

  return (
        <EcomContext.Provider value={{
            count, 
            setCount,
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
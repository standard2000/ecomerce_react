import { createContext } from "react"

const EconContext = createContext();

function EcomProvider({children}) {
  return (
        <EconContext.Provider>
            {children}
        </EconContext.Provider>
  )
}

export default EcomProvider
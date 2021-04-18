import {createContext, useContext, useState} from "react"

const ProvidersContext = createContext()
export const ProvidersProvider = ({children}) => {
    const [providers, setProviders] = useState({})
    return <ProvidersContext.Provider value={{providers, setProviders}}>{children}</ProvidersContext.Provider>
}
export const useProviders = () => useContext(ProvidersContext);
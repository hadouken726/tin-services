import {createContext, useContext, useState} from "react"

const ClientsContext = createContext()
export const ClientsProvider = ({children}) => {
    const [clients, setClients] = useState({})
    return <ClientsContext.Provider value={{clients, setClients}}>{children}</ClientsContext.Provider>
}
export const useClients = () => useContext(ClientsContext);
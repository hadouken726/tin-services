import {createContext, useContext, useState} from "react"
import api from "../../services/api"

const ClientsContext = createContext()
export const ClientsProvider = ({children}) => {
    const [clients, setClients] = useState({})
    const getClients = (setError) => {
        const token = JSON.parse(localStorage.getItem("token"))
        api
            .get(`users/`, {headers: {Authorization: `Bearer ${token}`}})
            .then(response => setClients(response.data)).catch(err => setError(true));
    }
    return <ClientsContext.Provider value={{clients, setClients, getClients}}>{children}</ClientsContext.Provider>
}
export const useClients = () => useContext(ClientsContext);
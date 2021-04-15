import {createContext, useContext, useState} from "react"
import api from "../../services/api"

const ProvidersContext = createContext()
export const ProvidersProvider = ({children}) => {
    const [providers, setProviders] = useState({})
    const getProviders = (setError) => {
        const token = JSON.parse(localStorage.getItem("token"))
        api
            .get("/providers", {headers: {Authorization: `Bearer ${token}`}})
            .then(response => setProviders(response.data)).catch(err => setError(true));
    }
    return <ProvidersContext.Provider value={{providers, setProviders, getProviders}}>{children}</ProvidersContext.Provider>
}
export const useProviders = () => useContext(ProvidersContext);
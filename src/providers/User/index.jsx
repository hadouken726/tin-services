import {createContext, useContext, useState} from "react"
import api from "../../services/api"

const UserContext = createContext()
export const UserProvider = ({children}) => {
    const [user, setUser] = useState({})
    const getUser = (setError) => {
        const token = JSON.parse(localStorage.getItem("token"))
        const userId = JSON.parse(localStorage.getItem("userId"))
        api
            .get(`users/${userId}`, {headers: {Authorization: `Bearer ${token}`}})
            .then(response => setUser(response.data)).catch(err => setError(true));

    }
    return <UserContext.Provider value={{user, setUser, getUser}}>{children}</UserContext.Provider>
}
export const useUser = () => useContext(UserContext);
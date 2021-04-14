import {useContext,createContext,useState} from "react"
const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const token = localStorage.getItem("token") || ""
    const [auth, setAuth] = useState({})
    return <AuthContext.Provider value={{auth, setAuth}} >{children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);
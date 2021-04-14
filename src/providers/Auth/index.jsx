import {useContext,createContext,useState} from "react"
import api from "../../services/api"
import jwt_decode from "jwt-decode";
const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const token = localStorage.getItem("token") || ""
    const [auth, setAuth] = useState({})
    const signIn = (userData, setError, history) => {
        api
            .post("/login", userData)
            .then((response) => {
                const {sub} = jwt_decode(response.data.accessToken)
                localStorage.setItem("token", JSON.stringify(response.data.accessToken));
                localStorage.setItem("userId", JSON.stringify(sub));
                setAuth({...auth, "token":response.data.accessToken, "userId":sub});
                history.push("/dashboard");
            })
            .catch((err) => setError(true));
    }

    return <AuthContext.Provider value={{auth, setAuth, signIn}} >{children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);
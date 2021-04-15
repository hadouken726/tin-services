import api from "./api";
import jwt_decode from "jwt-decode";
export const isAuthenticated = () => {
    return JSON.parse(localStorage.getItem("token")) || false
}
export const signIn = (userData, setError, history) => {
    api
        .post("/login", userData)
        .then((response) => {
            const {sub} = jwt_decode(response.data.accessToken)
            localStorage.setItem("token", JSON.stringify(response.data.accessToken));
            localStorage.setItem("userId", JSON.stringify(sub));
            history.push("/dashboard");
        })
        .catch((err) => setError(true));
}
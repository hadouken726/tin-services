export const TOKEN_KEY = "token";
export const ID = "id"
export const isAuthenticated = () => JSON.parse(localStorage.getItem(TOKEN_KEY)) || false
export const getToken = () => JSON.parse(localStorage.getItem(TOKEN_KEY)) || false
export const getId = () => JSON.parse(localStorage.getItem(ID)) || false
export const login = (token,id) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    localStorage.setItem(ID, JSON.stringify(id));
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ID)
};



import { useState } from "react";

const doLogin = (userName, password) => {
    return userName && password ? true : false;
}

const useAuth = () => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // fake API call
        const loggedIn = doLogin(username, password)
        loggedIn && setUser({ name: username });
    };

    const logout = () => setUser(null);

    return { user, login, logout, isAuthenticated: !!user };
}

export default useAuth;
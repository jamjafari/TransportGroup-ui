import {
 createContext,
 useContext,
 useState
}
from "react";

import {
 getCurrentUser
}
from "./authHelper";

const AuthContext =
    createContext();

export function AuthProvider({
    children
})
{
    const [user] =
        useState(
            getCurrentUser()
        );

    return (
        <AuthContext.Provider
            value={{user}}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth()
{
    return useContext(
        AuthContext
    );
}
import {createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();


const AuthProvider = ({children}) => {
    const [state, setState] = useState(null);

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem('authState')) || false;
        setState(userData)
    }, [])

    useEffect(()=>{
        const userData = JSON.stringify(state);
        localStorage.setItem('authState', userData);
    }, [state])

    return ( 
        <AuthContext.Provider value={state}>
            <AuthContextDispatcher.Provider value={setState}>
                {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;

export const useAuth = ()=> useContext(AuthContext);
export const useActionAuth = ()=> useContext(AuthContextDispatcher);

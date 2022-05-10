import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
const Context = createContext()
import Cookies from 'js-cookie'
export default Context

export const ContextProvider = ({children}) =>{
    let [loading,setloading] = useState(false)
    
    
    
    const [authtoken,setauthtoken] = useState(Cookies.get('access')?{"access":Cookies.get('access'),"refresh":Cookies.get("refresh")}:null)
    const ContextData = {
        hello:'hello',
        authtoken:authtoken,
        setauthtoken:setauthtoken,
        loading:loading,
        setloading:setloading,
    }

    
    return(
        <Context.Provider value={ContextData}>
            {children}
        </Context.Provider>
    )
}
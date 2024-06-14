import { useContext, createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarContextProvider = ({children}) => {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <NavbarContext.Provider value={{showLogin, setShowLogin}}>
            {children}
        </NavbarContext.Provider>
    );
}

export const useNavbar = () => useContext(NavbarContext);
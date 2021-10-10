import React, { useContext } from "react";
import { navLists } from "./Lists/Nav/navLists";
import { featureLists } from "./Lists/Features/featureLists";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider
            value={{
                navLists,
                featureLists,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};

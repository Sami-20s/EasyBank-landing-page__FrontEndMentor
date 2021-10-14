import React, { useContext } from "react";
import { navLists } from "./Lists/Nav/navLists";
import { featureLists } from "./Lists/Features/featureLists";
import { articlesLists } from "./Lists/Articles/articlesLists";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider
            value={{
                navLists,
                featureLists,
                articlesLists,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};

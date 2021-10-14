import React, { useContext } from "react";
import { navLists } from "./Lists/Nav/navLists";
import { featureLists } from "./Lists/Features/featureLists";
import { articlesLists } from "./Lists/Articles/articlesLists";
import { footerSocialMedia, footerLinks } from "./Lists/Footer/footerLists";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider
            value={{
                navLists,
                featureLists,
                articlesLists,
                footerSocialMedia,
                footerLinks,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};

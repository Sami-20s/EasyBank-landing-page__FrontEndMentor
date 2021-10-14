import React from "react";
import { useGlobalContext } from "../../../context";
import AllArticles from "./AllArticles";
import Info from "./Info";

const Articles = () => {
    const { articlesLists } = useGlobalContext();
    return (
        <article id="articles" className="desktop-container mobile-container">
            <div className="articles__wrapper">
                <Info />
                <AllArticles list={articlesLists} />
            </div>
        </article>
    );
};

export default Articles;

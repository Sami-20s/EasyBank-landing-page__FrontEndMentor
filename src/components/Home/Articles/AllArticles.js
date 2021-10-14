import React from "react";
import SingleArticle from "./SingleArticle";
const AllArticles = ({ list }) => {
    return (
        <div className="articles__wrapper__all">
            {list.map(item => {
                return <SingleArticle key={item.id} {...item} />;
            })}
        </div>
    );
};

export default AllArticles;

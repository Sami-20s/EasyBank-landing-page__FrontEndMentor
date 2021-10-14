import React from "react";

const SingleArticle = ({ img, author, title, text }) => {
    return (
        <div className="articles__wrapper__all__single">
            <img src={img} alt="article-title" />
            <div className="articles__wrapper__all__single__info">
                <h4>{author}</h4>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default SingleArticle;

import React from "react";
import SingleLink from "./SingleLink";

const Links = ({ links, isBtnClick }) => {
    return (
        <div className={`${isBtnClick ? "hide-for-mobile links-active" : "hide-for-mobile"}`}>
            <ul className="nav__links ">
                {links.map(link => {
                    return <SingleLink key={link.id} {...link} />;
                })}
            </ul>
        </div>
    );
};

export default Links;

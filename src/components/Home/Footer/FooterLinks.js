import React from "react";

const FooterLinks = ({ list }) => {
    return (
        <div className="footer__wrapper__links">
            <ul>
                {list.map(item => {
                    const { id, title, url } = item;
                    return (
                        <li key={id}>
                            <a href={url}>{title}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FooterLinks;

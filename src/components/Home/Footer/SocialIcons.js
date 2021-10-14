import React from "react";

const SocialIcons = ({ list }) => {
    return (
        <div className="footer__wrapper__social-icons">
            <ul>
                {list.map(item => {
                    const { id, icon } = item;
                    return (
                        <li key={id}>
                            <a href="">{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SocialIcons;

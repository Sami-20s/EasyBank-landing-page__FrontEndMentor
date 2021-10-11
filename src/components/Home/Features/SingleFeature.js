import React from "react";

const SingleFeature = ({ icon, title, text }) => {
    return (
        <div className="features__wrapper__all__single">
            {icon}
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default SingleFeature;

import React from "react";
import SingleFeature from "./SingleFeature";

const AllFeatures = ({ list }) => {
    return (
        <div className="features__wrapper__all">
            {list.map(item => {
                return <SingleFeature key={item.id} {...item} />;
            })}
        </div>
    );
};

export default AllFeatures;

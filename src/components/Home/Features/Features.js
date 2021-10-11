import React from "react";
import { useGlobalContext } from "../../../context";
import Info from "./Info";
import AllFeatures from "./AllFeatures";
const Features = () => {
    const { featureLists } = useGlobalContext();
    return (
        <article id="features" className="desktop-container mobile-container">
            <div className="features__wrapper">
                <Info />
                <AllFeatures list={featureLists} />
            </div>
        </article>
    );
};

export default Features;

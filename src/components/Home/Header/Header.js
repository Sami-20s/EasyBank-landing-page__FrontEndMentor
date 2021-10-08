import React from "react";
import Phones from "../../../img/image-mockups.png";
import Buttons from "./Buttons";
import Images from "./Images";
import Info from "./Info";
const Header = () => {
    return (
        <header id="header">
            <div className="header__wrapper">
                <Images img={Phones} />
                <Info>
                    <Buttons />
                </Info>
            </div>
        </header>
    );
};

export default Header;

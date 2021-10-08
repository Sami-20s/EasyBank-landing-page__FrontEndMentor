import React, { useState } from "react";
import { ReactComponent as Logo } from "../../../img/logo.svg";
import Buttons from "./Buttons";
import Links from "./Links";
import { linksList } from "./linksList";
import { FaBars, FaTimes } from "react-icons/fa";
const Nav = () => {
    const [isBtnClick, setIsBtnClick] = useState(false);
    return (
        <nav id="nav">
            <Logo className="logo" />
            <Links links={linksList} isBtnClick={isBtnClick} />
            <Buttons />
            <button
                className="burger hide-for-desktop"
                onClick={() => setIsBtnClick(!isBtnClick)}
            >
                {isBtnClick ? (
                    <FaTimes className="times" />
                ) : (
                    <FaBars className="bars" />
                )}
            </button>
        </nav>
    );
};

export default Nav;

import React, { useState } from "react";
import { ReactComponent as Logo } from "../../../img/logo.svg";
import Buttons from "./Buttons";
import Links from "./Links";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../../context";
const Nav = () => {
    const [isBtnClick, setIsBtnClick] = useState(false);
    if (isBtnClick) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }
    const { navLists } = useGlobalContext();
    return (
        <nav id="nav" className="padding-for-desktop padding-for-mobile">
            <div className="nav__wrapper">
                <Logo className="logo" />
                <Links links={navLists} isBtnClick={isBtnClick} />
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
            </div>
        </nav>
    );
};

export default Nav;

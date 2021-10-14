import React from "react";
import { useGlobalContext } from "../../../context";
import { ReactComponent as Logo } from "../../../img/logo.svg";
import Buttons from "./Buttons";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./SocialIcons";

const Footer = () => {
    const { footerSocialMedia, footerLinks } = useGlobalContext();
    return (
        <footer id="footer" className="desktop-container nav-container">
            <div className="footer__wrapper">
                <Logo className="logo" />
                <SocialIcons list={footerSocialMedia} />
                <FooterLinks list={footerLinks} />
                <Buttons />
            </div>
        </footer>
    );
};

export default Footer;

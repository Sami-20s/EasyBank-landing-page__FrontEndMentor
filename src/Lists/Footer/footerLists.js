import { ReactComponent as Facebook } from "../../img/icon-facebook.svg";
import { ReactComponent as Youtube } from "../../img/icon-youtube.svg";
import { ReactComponent as Twitter } from "../../img/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../img/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../img/icon-instagram.svg";

const footerSocialMedia = [
    {
        id: 1,
        icon: <Facebook />,
    },
    {
        id: 2,
        icon: <Youtube />,
    },
    {
        id: 3,
        icon: <Twitter />,
    },
    {
        id: 4,
        icon: <Pinterest />,
    },
    {
        id: 5,
        icon: <Instagram />,
    },
];

const footerLinks = [
    {
        id: 1,
        title: "About Us",
        url: "/about",
    },
    {
        id: 2,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "Careers",
        url: "/careers",
    },
    {
        id: 5,
        title: "Support",
        url: "/support",
    },
    {
        id: 6,
        title: "Privacy Policy",
        url: "/privacy-policy",
    },
];
export { footerSocialMedia, footerLinks };

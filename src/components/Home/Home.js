import React from "react";
import Articles from "./Articles/Articles";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";

const Home = () => {
    return (
        <>
            <Nav />
            <Header />
            <Features />
            <Articles />
            <Footer />
        </>
    );
};

export default Home;

import React from "react";
import Articles from "./Articles/Articles";
import Features from "./Features/Features";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";

const Home = () => {
    return (
        <main>
            <Nav />
            <Header />
            <Features />
            <Articles />
        </main>
    );
};

export default Home;

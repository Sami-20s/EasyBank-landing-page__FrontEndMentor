import React from "react";
import Features from "./Features/Features";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";

const Home = () => {
    return (
        <main>
            <Nav />
            <Header />
            <Features />
        </main>
    );
};

export default Home;

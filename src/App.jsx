import React from "react";
import BioContainer from "./components/BioContainer/BioContainer";
import AboutContainer from "./components/AboutContainer/AboutContainer";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
    return (
        <div className="app-wrapper">
            <main id="container">
                <BioContainer />
                <AboutContainer />
                <Footer />
            </main>
            <ScrollToTopButton />
        </div>
    );
}

export default App;

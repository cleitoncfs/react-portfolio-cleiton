import React from "react";
import BioContainer from "./components/BioContainer/BioContainer";
import AboutContainer from "./components/AboutContainer/AboutContainer";
import SkillsContainer from "./components/SkillsContainer/SkillsContainer";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <>
            <div id="container">
                <BioContainer />
                <AboutContainer />
            </div>

            <Footer />
        </>
    );
}

export default App;

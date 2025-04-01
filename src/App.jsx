import React from "react";
import BioContainer from "./components/BioContainer/BioContainer";
import AboutContainer from "./components/AboutContainer/AboutContainer";
import SkillsContainer from "./components/SkillsContainer/SkillsContainer";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="app-container">
            <div className="main-content">
                <BioContainer />
                <div className="right-content">
                    <AboutContainer />
                    <SkillsContainer />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;

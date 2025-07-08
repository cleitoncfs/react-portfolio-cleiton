import React, { useState, useEffect } from "react";
import BioContainer from "./components/BioContainer/BioContainer";
import AboutContainer from "./components/AboutContainer/AboutContainer";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
    const [darkMode, setDarkMode] = useState(true); // Sempre inicia como true

    useEffect(() => {
        // Aplica o tema dark imediatamente
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");

        // Opcional: Carrega preferência salva (se quiser persistência)
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode !== null) {
            setDarkMode(savedMode === "true");
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.body.classList.toggle("dark-mode", newMode);
        document.body.classList.toggle("light-mode", !newMode);
        localStorage.setItem("darkMode", newMode); // Opcional: Salva preferência
    };

    return (
        <>
            <div className="app-wrapper">
                <button className="theme-toggle" onClick={toggleTheme}>
                    {darkMode ? (
                        <i className="bi bi-sun-fill"></i>
                    ) : (
                        <i className="bi bi-moon-fill"></i>
                    )}
                </button>
                <main id="container">
                    <BioContainer />
                    <AboutContainer />
                </main>
                <ScrollToTopButton />
            </div>
            <Footer />
        </>
    );
}

export default App;

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300 && window.innerWidth < 768);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return isVisible ? (
        <div className={styles.tooltipContainer}>
            <button
                className={styles.scrollTop}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Voltar ao topo"
            >
                <FaArrowUp />
            </button>
            <span className={styles.tooltipText}>Topo</span>
        </div>
    ) : null;
};

export default ScrollToTopButton;

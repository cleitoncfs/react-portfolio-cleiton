import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2025 Cleiton Santos. Todos os direitos reservados.</p>
            <p>
                <a className={styles.link} href="#container">
                    Voltar ao topo
                </a>{" "}
                |{" "}
                <a
                    className={styles.link}
                    href="https://github.com/cleitoncfs"
                    target="_blank"
                >
                    GitHub
                </a>
            </p>
        </footer>
    );
};

export default Footer;

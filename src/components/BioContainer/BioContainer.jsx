import React from "react";
import styles from "./BioContainer.module.css";

const BioContainer = () => {
    return (
        <aside className={styles.bioContainer}>
            <h2 className={styles.bioTitle}>Cleiton Santos</h2>
            <img
                className={styles.bioImage}
                src="/img/cleiton-perfil.jpeg" // Caminho corrigido
                alt="Cleiton Santos"
            />
            <p className={styles.bioDescription}>
                Olá, eu sou Cleiton Santos, um{" "}
                <span className={styles.highlight}>Desenvolvedor</span>{" "}
                apaixonado por tecnologia.
            </p>
            <p className={styles.welcomeText}>Bem-vindo ao meu portfólio!</p>
            <ul className={styles.socialContainer}>
                <li>
                    <a
                        href="https://www.linkedin.com/in/cleitoncfs/"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <i class="bi bi-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/cleitoncfs"
                        target="_blank"
                        aria-label="GitHub"
                    >
                        <i class="bi bi-github"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://wa.me/351912155966/"
                        target="_blank"
                        aria-label="WhatsApp"
                    >
                        <i class="bi bi-whatsapp"></i>
                    </a>
                </li>
            </ul>
            <div className={styles.emailContainer}>
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:cleitoncfs@gmail.com">cleitoncfs@gmail.com</a>
            </div>
        </aside>
    );
};

export default BioContainer;

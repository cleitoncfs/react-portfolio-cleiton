import styles from "./BioContainer.module.css";

export default function BioContainer() {
    return (
        <aside className={styles["bio-container"]}>
            <h2>Cleiton Santos</h2>
            <img
                className={styles["bio-image"]}
                src="/public/img/cleiton-perfil.jpeg"
                alt="Cleiton Santos"
            />
            <p>
                Olá, eu sou Cleiton Santos, um{" "}
                <span className={styles.highlight}>Desenvolvedor</span>{" "}
                apaixonado por tecnologia.
            </p>
            <p className={styles["welcome-text"]}>
                Bem-vindo ao meu portfólio!
            </p>
            <ul className={styles["social-container"]}>
                <li>
                    <a
                        href="https://www.linkedin.com/in/cleitoncfs/"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/cleitoncfs"
                        target="_blank"
                        aria-label="GitHub"
                    >
                        <i className="bi bi-github"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://wa.me/351912155966/"
                        target="_blank"
                        aria-label="WhatsApp"
                    >
                        <i className="bi bi-whatsapp"></i>
                    </a>
                </li>
            </ul>
            <div className={styles["email-container"]}>
                <i className="bi bi-envelope"></i>
                <a href="mailto:cleitoncfs@gmail.com">cleitoncfs@gmail.com</a>
            </div>
        </aside>
    );
}

import { useEffect, useRef } from "react";
import styles from "./BioContainer.module.css";

export default function BioContainer() {
    const extraRef = useRef(null);

    useEffect(() => {
        const target = extraRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles["fade-in-visible"]);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(target);
        return () => observer.unobserve(target);
    }, []);

    return (
        <aside className={styles["bio-container"]}>
            <div className={styles["profile-header"]}>
                <div className={styles["image-wrapper"]}>
                    <img
                        src="/img/cleiton-perfil.jpeg"
                        alt="Cleiton Santos"
                        className={styles["bio-image"]}
                        loading="lazy"
                    />
                </div>
                <h1 className={styles["name-title"]}>Cleiton Santos</h1>
                <p className={styles["professional-title"]}>
                    Desenvolvedor Full Stack
                </p>
            </div>

            <div className={styles["bio-content"]}>
                <p className={styles["intro-text"]}>
                    Olá! Sou{" "}
                    <span className={styles.highlight}>Cleiton Santos</span>,
                    desenvolvedor apaixonado por tecnologia e movido pela
                    curiosidade.
                </p>

                <p className={styles["welcome-text"]}>
                    Seja muito bem-vindo ao meu portfólio!
                </p>

                <p ref={extraRef} className={styles["about-extra"]}>
                    <i className={`bi bi-stars ${styles["quote-icon"]}`}></i>
                    Aqui compartilho minha jornada, habilidades e projetos nos
                    quais aplico tudo o que venho aprendendo diariamente. Fique
                    à vontade para explorar!
                    <i className={`bi bi-stars ${styles["quote-icon"]}`}></i>
                </p>
            </div>

            <div className={styles["contact-section"]}>
                <ul className={styles["social-container"]}>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/cleitoncfs/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="LinkedIn"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/cleitoncfs"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="GitHub"
                        >
                            <i className="bi bi-github"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://wa.me/351912155966/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="WhatsApp"
                        >
                            <i className="bi bi-whatsapp"></i>
                        </a>
                    </li>
                </ul>

                <div className={styles["email-container"]}>
                    <i className="bi bi-envelope"></i>
                    <a href="mailto:cleitoncfs@gmail.com">
                        cleitoncfs@gmail.com
                    </a>
                </div>
            </div>
        </aside>
    );
}

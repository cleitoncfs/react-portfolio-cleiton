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

        return () => {
            observer.unobserve(target);
        };
    }, []);

    return (
        <aside className={styles["bio-container"]}>
            <h2>Cleiton Santos</h2>
            <img
                src="/img/cleiton-perfil.jpeg"
                alt="Cleiton Santos"
                className={styles["bio-image"]}
            />
            <p>
                Olá, eu sou Cleiton Santos, um{" "}
                <span className={styles.highlight}>
                    desenvolvedor apaixonado por tecnologia
                </span>{" "}
                e movido pela curiosidade.
            </p>
            <p className={styles["welcome-text"]}>
                Seja muito bem-vindo ao meu portfólio!
            </p>
            <p className={styles["about-extra"]}>
                Acredito que a tecnologia tem o poder de transformar vidas e
                encurtar distâncias — por isso estou sempre em busca de novos
                desafios e aprendizados. Meu foco é evoluir constantemente,
                desenvolvendo soluções que façam a diferença.
            </p>

            <ul className={styles["social-container"]}>
                <li>
                    <a
                        href="https://www.linkedin.com/in/cleitoncfs/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/cleitoncfs"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-github"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://wa.me/351912155966/"
                        target="_blank"
                        rel="noreferrer"
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

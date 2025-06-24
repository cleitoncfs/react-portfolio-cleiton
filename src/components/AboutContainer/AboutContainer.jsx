import { useRef, useEffect } from "react";
import styles from "./AboutContainer.module.css";
import SkillsContainer from "../SkillsContainer/SkillsContainer";

export default function AboutContainer() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles["fade-in-visible"]);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className={styles["about-container"]}>
            <h1 className={styles.name}>Cleiton Santos</h1>
            <p className={styles.title}>
                <span className={styles.highlight}>Web Developer</span>
            </p>

            <p className={styles.description}>
                Sou desenvolvedor com foco em websites e aplicações, e gosto de
                estar presente desde a{" "}
                <span className={styles.highlight}>
                    definição das regras de negócio e o levantamento de
                    requisitos
                </span>{" "}
                até o{" "}
                <span className={styles.highlight}>
                    deploy final da solução
                </span>
                .
            </p>

            <p className={styles.description}>
                Atuo tanto no{" "}
                <span className={styles.highlight}>front-end</span> quanto no{" "}
                <span className={styles.highlight}>back-end</span>, buscando
                sempre escrever código limpo, escalável e de qualidade. Estou em
                constante evolução, estudando todos os dias para criar soluções
                eficientes que tragam valor real aos projetos.
            </p>

            <div className={styles["button-container"]}>
                <a
                    href="https://projetos-cleitonsantos.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["btn-projects"]}
                >
                    <i className="bi bi-box-arrow-up-right"></i>{" "}
                    <span>Ver Projetos</span>
                </a>
                <a
                    href="https://certificados-cleitonsantos.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["btn-certificates"]}
                >
                    <i className="bi bi-box-arrow-up-right"></i>{" "}
                    <span>Certificados</span>
                </a>
            </div>

            <SkillsContainer />
        </section>
    );
}

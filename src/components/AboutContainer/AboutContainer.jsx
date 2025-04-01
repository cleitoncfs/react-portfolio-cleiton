import styles from "./AboutContainer.module.css";
import SkillsContainer from "../SkillsContainer/SkillsContainer";

export default function AboutContainer() {
    return (
        <section className={styles["about-container"]}>
            <h1 className={styles.name}>Cleiton Santos</h1>
            <p className={styles.title}>
                <span className={styles.highlight}>Web Developer</span>
            </p>

            <p className={styles.description}>
                Sou um desenvolvedor especializado em websites e aplicações...
                {/* Texto completo aqui */}
            </p>

            <div className={styles["button-container"]}>
                <a
                    href="https://projetos-dev-one.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["btn-projects"]}
                >
                    <i className="bi bi-box-arrow-up-right"></i>{" "}
                    <span>Ver Projetos</span>
                </a>
                <a
                    href="https://cleitoncfs.github.io/Certificados-Dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["btn-certificates"]}
                >
                    <i className="bi bi-box-arrow-up-right"></i>{" "}
                    <span>Certificados</span>
                </a>
            </div>

            <h2 className={styles["skills-section-title"]}>Minhas Skills</h2>
            <p className={styles.description}>
                Tecnologias nas quais tenho competência:
            </p>

            <SkillsContainer />
        </section>
    );
}

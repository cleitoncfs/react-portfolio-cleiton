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
                Sou um desenvolvedor especializado em websites e aplicações,
                gosto de participar do projeto desde a{" "}
                <span className={styles.highlight}>
                    definição das regras de negócio e levantamento de requisitos
                </span>{" "}
                até o{" "}
                <span className={styles.highlight}>deploy da aplicação</span>.
            </p>

            <p className={styles.description}>
                Atuo tanto no{" "}
                <span className={styles.highlight}>front-end</span> como no{" "}
                <span className={styles.highlight}>back-end</span>, e amo
                tecnologia, estudo todos os dias para me tornar cada vez melhor
                e escrever código de qualidade.
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
                    href="https://cleitoncfs.github.io/Certificados-Dev/"
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

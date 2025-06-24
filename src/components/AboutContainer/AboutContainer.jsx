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
                Trabalho tanto no{" "}
                <span className={styles.highlight}>front-end</span> quanto no{" "}
                <span className={styles.highlight}>back-end</span>, sempre
                buscando escrever código limpo, escalável e de qualidade. Sou
                movido pela{" "}
                <span className={styles.highlight}>
                    curiosidade e paixão por tecnologia
                </span>{" "}
                — estudo todos os dias para evoluir como profissional e
                contribuir com projetos cada vez mais sólidos.
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

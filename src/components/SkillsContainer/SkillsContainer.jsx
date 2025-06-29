import { useEffect, useRef } from "react";
import styles from "./SkillsContainer.module.css";

const skillsData = [
    {
        title: "Front-end",
        icons: ["html5", "css3", "javascript"],
    },
    {
        title: "Back-end",
        icons: ["nodejs", "python", "php"],
    },
    {
        title: "Bancos de Dados",
        icons: ["mysql", "mongodb", "sqlite"],
    },
    {
        title: "Frameworks Front-end",
        icons: ["react", "vuejs", "angularjs"],
    },
    {
        title: "Frameworks Back-end",
        icons: ["flask", "django", "laravel"],
    },
    {
        title: "Ferramentas",
        icons: ["git", "linux", "docker"],
    },
];

const SkillsContainer = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const boxes = sectionRef.current?.querySelectorAll(
            `.${styles.skillBox}`
        );
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles["fade-in-visible"]);
                    }
                });
            },
            { threshold: 0.15 }
        );

        boxes?.forEach((box) => observer.observe(box));

        return () => {
            boxes?.forEach((box) => observer.unobserve(box));
        };
    }, []);

    return (
        <div ref={sectionRef} className={styles.skillsContainer}>
            <h2 className={styles.skillsTitle}>Minhas Skills</h2>
            <p className={styles.description}>
                Estas são as tecnologias com as quais tenho experiência e
                afinidade no desenvolvimento de soluções completas:
            </p>

            <div className={styles.skillsGrid}>
                {skillsData.map((skill, index) => (
                    <div
                        key={skill.title}
                        className={styles.skillBox}
                        style={{ "--delay": index }}
                    >
                        <p className={styles.skillTitle}>{skill.title}</p>
                        <div className={styles.iconsContainer}>
                            {skill.icons.map((icon) => (
                                <div
                                    key={icon}
                                    className={styles.tooltip}
                                    data-tooltip={icon.toUpperCase()}
                                >
                                    <i
                                        className={`devicon-${icon}-plain colored`}
                                    ></i>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsContainer;

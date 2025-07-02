import { useEffect, useRef } from "react";
import styles from "./SkillsContainer.module.css";

const skillsData = [
    {
        title: "Front-end",
        skills: [
            { name: "HTML5", icon: "html5" },
            { name: "CSS3", icon: "css3" },
            { name: "JavaScript", icon: "javascript" }
        ]
    },
    {
        title: "Back-end",
        skills: [
            { name: "Node.js", icon: "nodejs" },
            { name: "Python", icon: "python" },
            { name: "PHP", icon: "php" }
        ]
    },
    {
        title: "Bancos de Dados",
        skills: [
            { name: "MySQL", icon: "mysql" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "SQLite", icon: "sqlite" }
        ]
    },
    {
        title: "Frameworks Front-end",
        skills: [
            { name: "React", icon: "react" },
            { name: "Vue.js", icon: "vuejs" },
            { name: "AngularJS", icon: "angularjs" }
        ]
    },
    {
        title: "Frameworks Back-end",
        skills: [
            { name: "Flask", icon: "flask" },
            { name: "Django", icon: "django" },
            { name: "Laravel", icon: "laravel" }
        ]
    },
    {
        title: "Ferramentas",
        skills: [
            { name: "Git", icon: "git" },
            { name: "Linux", icon: "linux" },
            { name: "Docker", icon: "docker" }
        ]
    }
];

const SkillsContainer = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const boxes = sectionRef.current?.querySelectorAll(`.${styles.skillBox}`);
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
                {skillsData.map((category, index) => (
                    <div 
                        className={styles.skillBox} 
                        style={{"--delay": index}}
                        key={category.title}
                    >
                        <p className={styles.skillTitle}>{category.title}</p>
                        <div className={styles.iconsContainer}>
                            {category.skills.map(skill => (
                                <div 
                                    className={styles.tooltip} 
                                    data-tooltip={skill.name} 
                                    key={skill.name}
                                >
                                    <i className={`devicon-${skill.icon}-plain colored`}></i>
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
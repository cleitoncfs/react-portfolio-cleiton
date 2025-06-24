import { useEffect, useRef } from "react";
import styles from "./SkillsContainer.module.css";

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
                {/* Front-end */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Front-end</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.tooltip} data-tooltip="HTML5">
                            <i className="devicon-html5-plain colored"></i>
                        </div>
                        <div className={styles.tooltip} data-tooltip="CSS3">
                            <i className="devicon-css3-plain colored"></i>
                        </div>
                        <div
                            className={styles.tooltip}
                            data-tooltip="JavaScript"
                        >
                            <i className="devicon-javascript-plain colored"></i>
                        </div>
                    </div>
                </div>

                {/* Back-end */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Back-end</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.tooltip} data-tooltip="Node.js">
                            <i className="devicon-nodejs-plain colored"></i>
                        </div>
                        <div className={styles.tooltip} data-tooltip="Python">
                            <i className="devicon-python-plain colored"></i>
                        </div>
                        <div className={styles.tooltip} data-tooltip="PHP">
                            <i className="devicon-php-plain colored"></i>
                        </div>
                    </div>
                </div>

                {/* Databases */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Bancos de Dados</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.tooltip} data-tooltip="MySQL">
                            <i className="devicon-mysql-plain colored"></i>
                        </div>
                        <div className={styles.tooltip} data-tooltip="MongoDB">
                            <i className="devicon-mongodb-plain colored"></i>
                        </div>
                        <div className={styles.tooltip} data-tooltip="SQLite">
                            <i className="devicon-sqlite-plain colored"></i>
                        </div>
                    </div>
                </div>

                {/* Front-end Frameworks */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Frameworks Front-end</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.tooltip} data-tooltip="React">
                            <i className="devicon-react-plain colored"></i>
                        </div>
                        <div className={styles.tooltip} data-tooltip="Vue.js">
                            <i className="devicon-vuejs-plain colored"></i>
                        </div>
                        <div
                            className={styles.tooltip}
                            data-tooltip="AngularJS"
                        >
                            <i className="devicon-angularjs-plain colored"></i>
                        </div>
                    </div>
                </div>

                {/* Back-end Frameworks */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Frameworks Back-end</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.tooltip} data-tooltip="Flask">
                            <i className="devicon-flask-plain colored"></i>
                        </div>
                        <div className={styles.tooltip} data-tooltip="Django">
                            <i className="devicon-django-plain colored"></i>
                        </div>
                        <div className={styles.tooltip} data-tooltip="Laravel">
                            <i className="devicon-laravel-plain colored"></i>
                        </div>
                    </div>
                </div>

                {/* Ferramentas */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Ferramentas</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.tooltip} data-tooltip="Git">
                            <i className="devicon-git-plain colored"></i>
                        </div>
                        <div className={styles.tooltip} data-tooltip="Linux">
                            <i className="devicon-linux-plain colored"></i>
                        </div>
                        <div className={styles.tooltip} data-tooltip="Docker">
                            <i className="devicon-docker-plain colored"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsContainer;

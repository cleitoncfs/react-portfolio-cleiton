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
                        <div className={styles.iconWrapper}>
                            <i className="devicon-html5-plain colored"></i>
                            <span className={styles.techLabel}>HTML5</span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-css3-plain colored"></i>
                            <span className={styles.techLabel}>CSS3</span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-javascript-plain colored"></i>
                            <span className={styles.techLabel}>JavaScript</span>
                        </div>
                    </div>
                </div>

                {/* Back-end */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Back-end</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-nodejs-plain colored"></i>
                            <span className={styles.techLabel}>Node.js</span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-python-plain colored"></i>
                            <span className={styles.techLabel}>Python</span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-php-plain colored"></i>
                            <span className={styles.techLabel}>PHP</span>
                        </div>
                    </div>
                </div>

                {/* Databases */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Bancos de Dados</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-mysql-plain colored"></i>
                            <span className={styles.techLabel}>MySQL</span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-mongodb-plain colored"></i>
                            <span className={styles.techLabel}>MongoDB</span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-sqlite-plain colored"></i>
                            <span className={styles.techLabel}>SQLite</span>
                        </div>
                    </div>
                </div>

                {/* Front-end Frameworks */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Frameworks Front-end</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-react-plain colored"></i>
                            <span className={styles.techLabel}>React</span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-vuejs-plain colored"></i>
                            <span className={styles.techLabel}>Vue.js</span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-angularjs-plain colored"></i>
                            <span className={styles.techLabel}>AngularJS</span>
                        </div>
                    </div>
                </div>

                {/* Back-end Frameworks */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Frameworks Back-end</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-flask-plain colored"></i>
                            <span className={styles.techLabel}>Flask</span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-django-plain colored"></i>
                            <span className={styles.techLabel}>Django</span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-laravel-plain colored"></i>
                            <span className={styles.techLabel}>Laravel</span>
                        </div>
                    </div>
                </div>

                {/* Ferramentas */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Ferramentas</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-git-plain colored"></i>
                            <span className={styles.techLabel}>Git</span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-linux-plain colored"></i>
                            <span className={styles.techLabel}>Linux</span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <i className="devicon-docker-plain colored"></i>
                            <span className={styles.techLabel}>Docker</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsContainer;

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
                        <i className="devicon-html5-plain colored"></i>
                        <i className="devicon-css3-plain colored"></i>
                        <i className="devicon-javascript-plain colored"></i>
                    </div>
                </div>

                {/* Back-end */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Back-end</p>
                    <div className={styles.iconsContainer}>
                        <i className="devicon-nodejs-plain colored"></i>
                        <i className="devicon-python-plain colored"></i>
                        <i className="devicon-php-plain colored"></i>
                    </div>
                </div>

                {/* Databases */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Bancos de Dados</p>
                    <div className={styles.iconsContainer}>
                        <i className="devicon-mysql-plain colored"></i>
                        <i className="devicon-mongodb-plain colored"></i>
                        <i className="devicon-sqlite-plain colored"></i>
                    </div>
                </div>

                {/* Front-end Frameworks */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Frameworks Front-end</p>
                    <div className={styles.iconsContainer}>
                        <i className="devicon-react-plain colored"></i>
                        <i className="devicon-vuejs-plain colored"></i>
                        <i className="devicon-angularjs-plain colored"></i>
                    </div>
                </div>

                {/* Back-end Frameworks */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Frameworks Back-end</p>
                    <div className={styles.iconsContainer}>
                        <i className="devicon-flask-plain colored"></i>
                        <i className="devicon-django-plain colored"></i>
                        <i className="devicon-laravel-plain colored"></i>
                    </div>
                </div>

                {/* Ferramentas */}
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Ferramentas</p>
                    <div className={styles.iconsContainer}>
                        <i className="devicon-git-plain colored"></i>
                        <i className="devicon-linux-plain colored"></i>
                        <i className="devicon-docker-plain colored"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsContainer;

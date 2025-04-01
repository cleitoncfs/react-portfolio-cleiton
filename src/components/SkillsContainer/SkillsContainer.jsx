import React from "react";
import styles from "./SkillsContainer.module.css";

const SkillsContainer = () => {
    return (
        <section className={styles.skillsContainer}>
            <h2 className={styles.skillsTitle}>Minhas Skills</h2>
            <p className={styles.description}>
                Tecnologias nas quais tenho competência:
            </p>
            <div className={styles.skillsGrid}>
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Front-end</p>
                    <i className="devicon-html5-plain colored"></i>
                    <i className="devicon-css3-plain colored"></i>
                    <i className="devicon-javascript-plain colored"></i>
                </div>
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Back-end</p>
                    <i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-python-plain colored"></i>
                    <i className="devicon-php-plain colored"></i>
                </div>
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Databases</p>
                    <i className="devicon-mysql-plain colored"></i>
                    <i className="devicon-mongodb-plain colored"></i>
                    <i className="devicon-sqlite-plain colored"></i>
                </div>
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Front-end Frameworks</p>
                    <i className="devicon-react-plain colored"></i>
                    <i className="devicon-vuejs-plain colored"></i>
                    <i className="devicon-angularjs-plain colored"></i>
                </div>
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Back-end Frameworks</p>
                    <i className="devicon-flask-plain colored"></i>
                    <i className="devicon-django-plain colored"></i>
                    <i className="devicon-laravel-plain colored"></i>
                </div>
                <div className={styles.skillBox}>
                    <p className={styles.skillTitle}>Tools</p>
                    <i className="devicon-git-plain colored"></i>
                    <i className="devicon-linux-plain colored"></i>
                    <i className="devicon-docker-plain colored"></i>
                </div>
            </div>
        </section>
    );
};

export default SkillsContainer;

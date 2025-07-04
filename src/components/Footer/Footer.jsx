import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                © {new Date().getFullYear()} - Cleiton Santos. Todos os direitos
                reservados.
            </p>

            <nav className={styles.linksGroup}>
                <a className={styles.link} href="#container">
                    <i className="bi bi-arrow-up-circle"></i> Voltar ao topo
                </a>
                <a className={styles.link} href="mailto:cleitoncfs@gmail.com">
                    <i className="bi bi-envelope-fill"></i> Contato
                </a>
                <a
                    className={styles.link}
                    href="https://github.com/cleitoncfs"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-github"></i> GitHub
                </a>
                <a
                    className={styles.link}
                    href="https://www.linkedin.com/in/cleitoncfs/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-linkedin"></i> LinkedIn
                </a>
            </nav>

            <p className={styles.builtWith}>
                Desenvolvido com{" "}
                <i className="devicon-react-original colored"></i> React &
                hospedado na{" "}
                <a href="https://netlify.com" target="_blank" rel="noreferrer">
                    <i className="devicon-netlify-plain colored"></i> Netlify
                </a>
            </p>
        </footer>
    );
};

export default Footer;

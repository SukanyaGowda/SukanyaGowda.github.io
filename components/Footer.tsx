import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className="container">
                <div className={styles.footerTop}>
                    <h2 className={styles.footerTitle}>FIND ME ON</h2>
                    <p className={styles.footerSubtitle}>Feel free to connect with me</p>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com/SukanyaGowda" aria-label="Github" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" aria-label="Twitter" className={styles.socialIcon}>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="http://linkedin.com/in/sukanya-b-486475372" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className={styles.footerGrid}>
                    <div className={styles.footerCol}>
                        <h3>Sukanya B</h3>
                        <p className={styles.motto}>Crafting code that shapes the future of technology.</p>
                    </div>

                    <div className={`${styles.footerCol} ${styles.linksCol}`}>
                        <h3>Useful Links</h3>
                        <ul>
                            <li><Link href="/about">About Me</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className={`${styles.footerCol} ${styles.contactCol}`}>
                        <h3>Contact Info</h3>
                        <div className={styles.contactItem}>
                            <i className="fas fa-phone-alt"></i>
                            <div>
                                <span>Call</span>
                                <br />
                                <a href="tel:+919731257232">+91-9731257232</a>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <i className="fas fa-envelope"></i>
                            <div>
                                <span>Write</span>
                                <br />
                                <a href="mailto:sukanyagowda02@gmail.com">sukanyagowda02@gmail.com</a>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <span>Visit</span>
                                <p>Bangalore - 560073</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; 2025 Sukanya B. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

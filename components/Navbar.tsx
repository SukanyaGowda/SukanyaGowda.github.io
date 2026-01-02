"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const isActive = (path: string) => pathname === path;

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                Sukanya B<span className={styles.logoDot}>.</span>
            </div>

            <nav>
                <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <li>
                        <Link
                            href="/"
                            className={`${styles.navLink} ${isActive('/') ? styles.activeLink : ''}`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={`${styles.navLink} ${isActive('/about') ? styles.activeLink : ''}`}
                            onClick={closeMenu}
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className={`${styles.navLink} ${isActive('/projects') ? styles.activeLink : ''}`}
                            onClick={closeMenu}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={`${styles.navLink} ${isActive('/contact') ? styles.activeLink : ''}`}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <Link href="/contact" className={styles.ctaBtn}>
                Connect With Me
            </Link>

            <div className={styles.menuBtn} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </header>
    );
};

export default Navbar;

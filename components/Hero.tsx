"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const roles = [
    "Full-Stack Developer",
    "Python Expert",
    "React Specialist",
    "API Designer",
    "Problem Solver"
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setFade(true);
            }, 500);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero} id="home">
            <div className={styles.glowBg}></div>

            <div className={styles.imageContainer}>
                <Image
                    src="/sukanya_profile.jpg"
                    alt="Sukanya B Profile"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>

            <h1 className={styles.heroTitle}>
                I'm <span style={{ color: '#fff' }}>Sukanya B</span>,<br />
                <span
                    className={styles.typewriter}
                    style={{
                        opacity: fade ? 1 : 0,
                        transform: fade ? 'translateY(0)' : 'translateY(10px)'
                    }}
                >
                    {roles[roleIndex]}
                </span>
                <span className={styles.cursor}>|</span>
            </h1>

            <p className={styles.desc}>
                Building scalable digital experiences with precision and creativity.
                Specialized in <strong>Python</strong> & <strong>React</strong> ecosystems.
            </p>

            <div className={styles.ctaGroup}>
                <Link href="/contact" className="btn-gradient">
                    Let's Connect <i className="fas fa-arrow-right"></i>
                </Link>
                <a href="/Resume.pdf" className="btn-outlined" target="_blank" rel="noopener noreferrer">
                    View Resume <i className="fas fa-download"></i>
                </a>
            </div>
        </section>
    );
};

export default Hero;

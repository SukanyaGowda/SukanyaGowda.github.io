"use client";

import Link from 'next/link';

export default function Contact() {
    return (
        <section className="section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>

                <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    padding: '50px',
                    maxWidth: '700px',
                    margin: '0 auto'
                }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6' }}>
                        I am currently open to full-time opportunities. <br />
                        Whether you have a question about my work or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
                        <a
                            href="mailto:sukanyagowda02@gmail.com"
                            className="btn-gradient"
                            style={{ minWidth: '220px', justifyContent: 'center' }}
                        >
                            <i className="fas fa-envelope"></i> sukanyagowda02@gmail.com
                        </a>
                        <a
                            href="tel:+919731257232"
                            className="btn-outlined"
                            style={{ minWidth: '220px', justifyContent: 'center' }}
                        >
                            <i className="fas fa-phone-alt"></i> +91-9731257232
                        </a>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
                        <p style={{ color: '#fff', marginBottom: '20px', fontWeight: '500' }}>Social Profiles</p>
                        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
                            <a href="https://github.com/SukanyaGowda" target="_blank" rel="noopener noreferrer"
                                style={{
                                    fontSize: '1.8rem',
                                    color: '#fff',
                                    transition: 'transform 0.3s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="http://linkedin.com/in/sukanya-b-486475372" target="_blank" rel="noopener noreferrer"
                                style={{
                                    fontSize: '1.8rem',
                                    color: '#0077b5',
                                    transition: 'transform 0.3s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    const skills = [
        "Python", "Django", "FastAPI", "ReactJS", "Next.js", "Java", "SQL", "Tailwind", "Git"
    ];

    return (
        <section className="section" style={{ minHeight: '80vh' }}>
            <div className="container">
                <h2 className="section-title">About <span className="gradient-text">Me</span></h2>

                <div style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap', marginTop: '60px' }}>

                    <div style={{ flex: '1.2', minWidth: '350px' }}>
                        <p style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '20px', lineHeight: '1.4' }}>
                            I'm <span className="highlight-purple">Sukanya B</span>, a passionate developer based in Bangalore.
                        </p>

                        <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            Transitioning from a science background to Computer Applications, I found my passion in building systems that solve real-world problems. I specialize in <strong>backend architecture</strong> (Python/Django) and modern <strong>frontend experiences</strong> (React/Next.js).
                        </p>

                        <div style={{ marginBottom: '40px', padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fas fa-graduation-cap" style={{ color: 'var(--primary-color)' }}></i> Education
                            </h3>
                            <div style={{ marginBottom: '15px' }}>
                                <h4 style={{ fontSize: '1rem', color: '#fff' }}>Master of Computer Applications (MCA)</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Present</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', color: '#fff' }}>Bachelor of Science</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Completed</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '20px' }}>Technical Arsenal</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        style={{
                                            background: 'rgba(168, 85, 247, 0.1)',
                                            color: 'var(--primary-color)',
                                            border: '1px solid rgba(168, 85, 247, 0.2)',
                                            padding: '10px 20px',
                                            borderRadius: '50px',
                                            fontSize: '0.95rem',
                                            fontWeight: 500,
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div style={{ flex: '0.8', display: 'flex', justifyContent: 'center', minWidth: '300px' }}>
                        <div style={{
                            position: 'relative',
                            width: '350px',
                            height: '420px',
                            borderRadius: '20px',
                            border: '2px solid rgba(255, 255, 255, 0.1)',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                        }}>
                            <Image
                                src="/sukanya_profile_new.jpg"
                                alt="Sukanya B"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

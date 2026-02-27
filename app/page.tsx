import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const projects = [
    {
      title: "sevenR Construction CRM",
      description: "Comprehensive CRM solution for construction management with timeline tracking and resource allocation.",
      image: "/project1.png",
      tags: ["React", "Node.js", "MongoDB", "Dashboard"]
    },
    {
      title: "Tvasta",
      description: "Innovative construction technology platform focusing on 3D printing and automated building solutions.",
      image: "/tvasta.png",
      tags: ["Next.js", "Three.js", "WebGL"]
    },
    {
      title: "Gruhams Construction",
      description: "Modern residential construction management system ensuring quality and timely delivery of housing projects.",
      image: "/gruhams.png",
      tags: ["Figma", "React", "Tailwind"]
    },
    {
      title: "SS Tours & Cabs",
      description: "A modern travel and cab booking platform offering streamlined ride booking and tour packages.",
      image: "/ss_tours.png",
      tags: ["React", "Vite", "Web App"]
    }
  ];

  return (
    <>
      <Hero />

      <section className="section" id="portfolio">
        <div className="container">
          <h2 className="section-title">Verified <span className="gradient-text">Projects</span></h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '60px', marginTop: '-40px', maxWidth: '600px', marginInline: 'auto' }}>
            A selection of my recent work in web development and software engineering.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

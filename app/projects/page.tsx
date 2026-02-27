import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
    const projects = [
        {
            title: "sevenR Construction CRM",
            description: "Comprehensive CRM solution for construction management with timeline tracking and resource allocation.",
            image: "/project1.png",
            tags: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "Tvasta",
            description: "Innovative construction technology platform focusing on 3D printing and automated building solutions.",
            image: "/tvasta.png",
            tags: ["Next.js", "WebGL", "Three.js"]
        },
        {
            title: "Gruhams Construction",
            description: "Modern residential construction management system ensuring quality and timely delivery of housing projects.",
            image: "/gruhams.png",
            tags: ["React", "TailwindCSS", "Figma"]
        },
        {
            title: "SS Tours & Cabs",
            description: "A modern travel and cab booking platform offering streamlined ride booking and tour packages.",
            image: "/ss_tours.png",
            tags: ["React", "Vite", "Web App"]
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">My <span className="gradient-text">Work</span></h2>

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
    );
}

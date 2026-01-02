import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags?: string[];
    link?: string;
}

const ProjectCard = ({ title, description, image, tags = ["React", "CSS"], link = "#" }: ProjectCardProps) => {
    return (
        <div className={styles.projectCard}>
            <div className={styles.cardImage}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{description}</p>

                <div className={styles.tags}>
                    {tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                </div>

                <Link href={link} className={styles.projectLink}>
                    View Details <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;

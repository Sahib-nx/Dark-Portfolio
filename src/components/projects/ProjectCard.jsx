'use client';

import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className={styles.cardContent}>
        {project.featured && (
          <motion.div 
            className={styles.featuredBadge}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            ⭐ Featured
          </motion.div>
        )}
        
        <div className={styles.projectHeader}>
          {project.image && (
            <motion.div
              className={styles.projectImageContainer}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <img 
                src={project.image} 
                alt={`${project.title} logo`}
                className={styles.projectImage}
                onError={(e) => {
                  // Fallback to a default gradient background if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add(styles.fallbackIcon);
                }}
              />
              <div className={styles.imageOverlay}></div>
            </motion.div>
          )}
          
          <motion.h3 
            className={styles.projectTitle}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {project.title}
          </motion.h3>
        </div>
        
        <motion.p 
          className={styles.projectDescription}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {project.description}
        </motion.p>
        
        {project.note && (
          <motion.div
            className={styles.warningNote}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 + index * 0.1 }}
          >
            <div className={styles.warningIcon}>⚠️</div>
            <p>{project.note}</p>
          </motion.div>
        )}
        
        <motion.div 
          className={styles.techStack}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className={styles.techTag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.6 + index * 0.1 + techIndex * 0.05,
                duration: 0.3
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.projectLinks}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + index * 0.1 }}
        >
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.projectLink} ${styles.github}`}
            variants={iconVariants}
            whileHover="hover"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </motion.a>
          
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.projectLink} ${styles.live}`}
              variants={iconVariants}
              whileHover="hover"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </motion.a>
          )}
        </motion.div>
      </div>
      
      <div className={styles.cardGlow}></div>
    </motion.div>
  );
}

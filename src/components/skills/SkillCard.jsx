"use client";

import { motion } from 'framer-motion';
import styles from './SkillCard.module.css';

export default function SkillCard({ name, Icon, level, color }) {
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Progress indicator based on skill level (1-5)
  const progressBars = Array.from({ length: 5 }, (_, i) => (
    <div 
      key={i} 
      className={`${styles.progressBar} ${i < level ? styles.filled : ''}`}
      style={i < level ? { backgroundColor: color } : {}}
    />
  ));

  return (
    <motion.div 
      className={styles.skillCard}
      variants={cardVariants}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 10 }
      }}
    >
      <div className={styles.iconContainer} style={{ color }}>
        <Icon size={40} />
      </div>
      <h3 className={styles.skillName}>{name}</h3>
      <div className={styles.skillLevel}>
        {progressBars}
      </div>
    </motion.div>
  );
}
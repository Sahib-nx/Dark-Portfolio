"use client";

import { motion } from 'framer-motion';
import SkillGrid from "../../components/skills/SkillGrid"
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <motion.div 
        className={styles.skillsHeader}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.gradientText}>My Skills</h1>
        <p>Here are the technologies and frameworks I specialize in.</p>
      </motion.div>

      <motion.div
        className={styles.skillsIntro}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          From front-end development to back-end solutions, I&apos;ve developed 
          proficiency in a wide range of technologies. My experience spans across 
          multiple programming languages, frameworks, and tools needed to build 
          modern applications.
        </p>
      </motion.div>

      {/* Skill categories */}
      <div className={styles.skillCategories}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className={styles.categoryTitle}>Front-End</h2>
          <SkillGrid category="frontend" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className={styles.categoryTitle}>Back-End</h2>
          <SkillGrid category="backend" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className={styles.categoryTitle}>Database & Tools</h2>
          <SkillGrid category="database" />
        </motion.div>
      </div>
    </div>
  );
}
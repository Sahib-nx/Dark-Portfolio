"use client";

import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { skills } from './skillsData';
import styles from './SkillGrid.module.css';

export default function SkillGrid({ category }) {
  // Filter skills by category from the skills data
  const filteredSkills = skills.filter(skill => skill.category === category);
  
  // Grid animation variants
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className={styles.skillsGrid}
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {filteredSkills.map((skill) => (
        <SkillCard 
          key={skill.name} 
          name={skill.name} 
          Icon={skill.icon} 
          level={skill.level}
          color={skill.color}
        />
      ))}
    </motion.div>
  );
}
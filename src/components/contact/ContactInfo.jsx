"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import styles from './ContactInfo.module.css';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'sahibyar214@gmail.com',
      link: 'mailto:sahibyar214@gmail.com',
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/sahib-khan',
      link: 'https://www.linkedin.com/in/sahib-khan-056724345/',
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'github.com/Sahib-nx',
      link: 'https://github.com/Sahib-nx',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+917889681726',
      link: 'tel:+917889681726',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Srinagar,Kashmir,India',
      link: null,
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <div className={styles.infoWrapper}>
      <h2 className={styles.infoTitle}>Connect With Me</h2>
      <p className={styles.infoDescription}>
        Feel free to reach out through any of these channels. I'm always open to new opportunities and collaborations.
      </p>

      <div className={styles.contactMethods}>
        {contactMethods.map((method, index) => (
          <motion.div 
            key={method.title}
            className={styles.contactMethod}
            custom={index + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={styles.iconWrapper}>
              {method.icon}
            </div>
            <div className={styles.contactDetails}>
              <h3>{method.title}</h3>
              {method.link ? (
                <a href={method.link} target="_blank" rel="noopener noreferrer">
                  {method.value}
                </a>
              ) : (
                <span>{method.value}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className={styles.availabilityIndicator}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className={styles.availabilityDot}></div>
        <p>Currently available for new projects</p>
      </motion.div>
    </div>
  );
}
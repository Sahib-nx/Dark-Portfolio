'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <motion.a
            href="https://github.com/Sahib-nx"
            className={styles.socialIcon}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sahib-khan-056724345/"
            className={styles.socialIcon}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://x.com/Sahib18186698"
            className={styles.socialIcon}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Twitter"
          >
            <FaTwitter />
          </motion.a>
     
        </div>
        
        {/* Copyright Text */}
        <p className={styles.copyright}>
          © {currentYear} Sahib. All rights reserved.
        </p>
      </div>
      
      {/* Scroll to Top Button */}
      <motion.div
        className={`${styles.scrollToTop} ${showScrollToTop ? styles.scrollToTopVisible : ''}`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.div>
    </footer>
  );
};

export default Footer;
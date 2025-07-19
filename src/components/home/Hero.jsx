'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
import styles from './Hero.module.css';
import { useRouter } from 'next/navigation';

const Hero = () => {
  // Variants for text animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const router = useRouter();


  const handleViewWork = () => {
   router.push("/projects")
  };

  const handleGetInTouch = () => {
    router.push("/contact")
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Left side: Text Content */}
        <div className={styles.textContent}>
          <motion.h1
            className={styles.headline}
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Hey, I'm Sahib, <br />Full-Stack Developer.
          </motion.h1>

          <motion.p
            className={styles.subheading}
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            I craft elegant solutions through code. Specializing in building exceptional digital experiences that live on the web.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.ctaContainer}
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.button
              className={styles.primaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewWork}
            >
              View My Work
            </motion.button>

            <motion.button
              className={styles.secondaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetInTouch}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className={styles.socialLinks}
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.a
              href="https://github.com/Sahib-nx"
              className={styles.socialLink}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sahib-khan-056724345/"
              className={styles.socialLink}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://x.com/Sahib18186698"
              className={styles.socialLink}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Twitter"
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
        </div>

        {/* Right side: 3D Animation */}
        <div className={styles.animationContainer}>
          <AnimatedSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;

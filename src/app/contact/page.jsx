"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import ContactForm from '../../components/contact/ContactForm';
import ContactInfo from '../../components/contact/ContactInfo';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <motion.div 
        className={styles.contactHeader}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.gradientText}>Get In Touch</h1>
        <p>Have a question or want to work together? Feel free to reach out!</p>
      </motion.div>

      <div className={styles.contactContent}>
        <motion.div 
          className={styles.formContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>

        <motion.div 
          className={styles.infoContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactInfo />
        </motion.div>
      </div>
    </div>
  );
}
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    customType: 'general'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message is too short (minimum 10 characters)";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          customType: 'general'
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  const formControls = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>Send a Message</h2>
      
      {submitSuccess && (
        <motion.div 
          className={styles.successMessage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          Your message has been sent successfully! I'll get back to you soon.
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <motion.div 
          className={styles.formGroup}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formControls}
        >
          <label htmlFor="name">Full Name</label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={errors.name ? styles.errorInput : ''}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </motion.div>

        <motion.div 
          className={styles.formGroup}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formControls}
        >
          <label htmlFor="email">Email Address</label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={errors.email ? styles.errorInput : ''}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </motion.div>

        <motion.div 
          className={styles.formGroup}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formControls}
        >
          <label htmlFor="customType">Message Type</label>
          <motion.select
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            id="customType"
            name="customType"
            value={formData.customType}
            onChange={handleChange}
          >
            <option value="general">General Inquiry</option>
            <option value="project">Project Proposal</option>
            <option value="job">Job Opportunity</option>
            <option value="feedback">Website Feedback</option>
          </motion.select>
        </motion.div>

        <motion.div 
          className={styles.formGroup}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formControls}
        >
          <label htmlFor="message">Your Message</label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or inquiry..."
            rows="6"
            className={errors.message ? styles.errorInput : ''}
          />
          {errors.message && <span className={styles.errorText}>{errors.message}</span>}
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {isSubmitting ? (
            <span className={styles.submitting}>
              <span className={styles.spinner}></span>
              Sending...
            </span>
          ) : (
            <span className={styles.buttonContent}>
              Send Message
              <Send size={18} />
            </span>
          )}
        </motion.button>
      </form>
    </div>
  );
}
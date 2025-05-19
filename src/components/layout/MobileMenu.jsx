'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ isOpen, navItems }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ul className={styles.mobileNavLinks}>
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className={styles.mobileNavItem}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={item.path} className={styles.mobileNavLink}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
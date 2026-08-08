import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { personalDetails, navLinks, hireMailtoUrl } from '../data/portfolioData';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeId, setActiveId]   = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a className={styles.logo} href="#home" onClick={() => handleNav('#home')}>
        Anissa<span className={styles.logoAccent}> Nursafitri</span>
      </a>

      {/* Desktop Nav */}
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${activeId === link.href.slice(1) ? styles.active : ''}`}
            onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
          >
            {link.label}
            <span className={styles.navUnderline} />
          </a>
        ))}
      </nav>

      {/* Hire Button */}
      <a
        href={hireMailtoUrl}
        className={styles.hireBtn}
      >
        <span>Hire Me</span>
      </a>

      {/* Hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        id="menu-toggle-btn"
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${activeId === link.href.slice(1) ? styles.active : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

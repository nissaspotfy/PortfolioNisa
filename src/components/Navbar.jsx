import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiChevronDown } from 'react-icons/fi';
import { navLinks } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { selectedRole, selectRole, activeProfile, currentHireMailtoUrl, rolesList } = useRole();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [activeId, setActiveId] = useState('projects');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setRoleDropdownOpen(false);
      }
    };
    if (roleDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [roleDropdownOpen]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new Event('themechange'));
  }, [theme]);

  useEffect(() => {
    const handleSync = () => {
      const current = localStorage.getItem('theme') || 'dark';
      if (current !== theme) setTheme(current);
    };
    window.addEventListener('themechange', handleSync);
    return () => window.removeEventListener('themechange', handleSync);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

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
    setRoleDropdownOpen(false);
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

      {/* Actions Group: Role Selector, Theme Toggle & Hire Button */}
      <div className={styles.headerActions}>
        {/* Recruiter Quick Selector Dropdown */}
        <div className={styles.roleDropdownWrapper} ref={dropdownRef}>
          <button
            type="button"
            className={styles.roleDropdownBtn}
            onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
            title="Ganti Mode / Role Profil"
            aria-expanded={roleDropdownOpen}
          >
            <span className={styles.roleDot} />
            <span className={styles.roleCurrentText}>{activeProfile.shortLabel}</span>
            <FiChevronDown size={14} className={`${styles.dropdownChevron} ${roleDropdownOpen ? styles.chevronRotated : ''}`} />
          </button>

          <AnimatePresence>
            {roleDropdownOpen && (
              <motion.div
                className={styles.roleDropdownMenu}
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.dropdownHeaderTitle}>Pilih Fokus Role:</div>
                {rolesList.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    className={`${styles.dropdownItem} ${selectedRole === r.id ? styles.dropdownItemActive : ''}`}
                    onClick={() => {
                      selectRole(r.id);
                      setRoleDropdownOpen(false);
                    }}
                  >
                    <span>{r.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme Toggle */}
        <button
          type="button"
          className={styles.themeToggleBtn}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>

        {/* Hire Me Button */}
        <a
          href={currentHireMailtoUrl}
          className={styles.hireBtn}
          title={`Hire Anissa for ${activeProfile.emailRole}`}
        >
          <span>Hire Me</span>
        </a>
      </div>

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
            {/* Mobile Role Switcher */}
            <div className={styles.mobileRoleBox}>
              <span className={styles.mobileRoleTitle}>🎯 Pilih Mode / Posisi:</span>
              <div className={styles.mobileRoleGrid}>
                {rolesList.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    className={`${styles.mobileRolePill} ${selectedRole === r.id ? styles.mobileRolePillActive : ''}`}
                    onClick={() => selectRole(r.id)}
                  >
                    {r.shortLabel}
                  </button>
                ))}
              </div>
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${activeId === link.href.slice(1) ? styles.active : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href={currentHireMailtoUrl}
              className={styles.mobileHireBtn}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
            >
              <span>Hire Me ({activeProfile.shortLabel})</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

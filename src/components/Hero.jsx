import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLinkedinIn, FaGithub, FaInstagram, FaBlogger, FaYoutube,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsArrowUpRight } from 'react-icons/bs';
import { typingWords, personalDetails } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';
import styles from './Hero.module.css';

/* ---- Typing Hook ---- */
function useTyping(words, speed = 80, pause = 1700) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ---- Social Icons Map ---- */
const socialIcons = [
  { Icon: FaLinkedinIn, href: personalDetails.linkedin, label: 'LinkedIn' },
  { Icon: FaGithub,     href: personalDetails.github,   label: 'GitHub' },
  { Icon: FaInstagram,  href: 'https://www.instagram.com/anissa.ns_/', label: 'Instagram' },
  { Icon: FaBlogger,    href: 'https://moofscience.blogspot.com/',      label: 'Blog' },
  { Icon: FaYoutube,    href: 'https://www.youtube.com/@nsstory9832/',  label: 'YouTube' },
];

/* ---- Animation Variants ---- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.9 } },
};

export default function Hero() {
  const typed = useTyping(typingWords);
  const { activeProfile, currentHireMailtoUrl, selectedRole } = useRole();

  return (
    <section className={styles.hero} id="home">
      {/* Background Orbs */}
      <div className={styles.orb1} aria-hidden />
      <div className={styles.orb2} aria-hidden />

      <div className={styles.inner}>
        {/* Content */}
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Top Badge */}
          <motion.div className={styles.badge} variants={fadeUp}>
            <span className={styles.badgeDot} />
            Fresh Graduate • Informatics Engineering (GPA 3.64)
          </motion.div>

          <motion.h1 className={styles.heading} variants={fadeUp}>
            Hi, I'm <span className={styles.nameGradient}>Anissa Nursafitri</span>
          </motion.h1>

          <motion.div className={styles.typingRow} variants={fadeUp}>
            <span className={styles.typingLabel}>I'm a</span>&nbsp;
            <span className={styles.typingText}>{typed}</span>
            <span className={styles.cursor}>|</span>
          </motion.div>

          {/* Dynamic Bio Description */}
          <motion.div variants={fadeUp} className={styles.bioWrapper}>
            <AnimatePresence mode="wait">
              <motion.p
                key={selectedRole}
                className={styles.bio}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeProfile.summary}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Social Icons */}
          <motion.div className={styles.socials} variants={fadeUp}>
            {socialIcons.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={styles.socialIcon}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div className={styles.actions} variants={fadeUp}>
            <a
              href={currentHireMailtoUrl}
              className={styles.btnPrimary}
              id="hire-btn"
              title={`Hire Anissa for ${activeProfile.emailRole}`}
            >
              <span>Hire Me</span>
              <HiOutlineMail size={18} />
            </a>
            {selectedRole !== 'all' && (
              <a
                href={activeProfile.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
                id="contact-btn"
                title={activeProfile.cvLabel}
              >
                <span>View CV ({activeProfile.shortLabel})</span>
                <BsArrowUpRight size={15} />
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Profile Image & Dynamic Floating Badges */}
        <motion.div
          className={styles.imageWrap}
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          <div className={styles.ringOuter}>
            <div className={styles.ringInner}>
              <img
                src="/img/formal2.jpg"
                alt="Anissa Nursafitri"
                className={styles.profileImg}
                loading="eager"
              />
            </div>
          </div>

          {/* Dynamic floating badges */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRole + '-badge1'}
              className={`${styles.floatingBadge} ${styles.badge1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                opacity: { duration: 0.3 },
                y: { repeat: Infinity, duration: 3.2, ease: 'easeInOut' }
              }}
            >
              {activeProfile.floatingBadges[0]?.text || '💻 Fullstack Developer'}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRole + '-badge2'}
              className={`${styles.floatingBadge} ${styles.badge2}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, 8, 0] }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                opacity: { duration: 0.3 },
                y: { repeat: Infinity, duration: 3.6, ease: 'easeInOut' }
              }}
            >
              {activeProfile.floatingBadges[1]?.text || '📊 System Analyst & Docs'}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

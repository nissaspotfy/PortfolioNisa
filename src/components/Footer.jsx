import { motion } from 'framer-motion';
import {
  FaLinkedinIn, FaGithub, FaInstagram, FaBlogger, FaYoutube,
} from 'react-icons/fa';
import styles from './Footer.module.css';

const socials = [
  { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/anissa-nursafitri-36a972279/', label: 'LinkedIn' },
  { Icon: FaGithub,     href: 'https://github.com/nissaspotfy',                            label: 'GitHub' },
  { Icon: FaInstagram,  href: 'https://www.instagram.com/anissa.ns_/',                    label: 'Instagram' },
  { Icon: FaBlogger,    href: 'https://moofscience.blogspot.com/',                         label: 'Blog' },
  { Icon: FaYoutube,    href: 'https://www.youtube.com/@nsstory9832/',                     label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Gradient border top */}
      <div className={styles.borderTop} aria-hidden />

      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.brand}>
          <span className={styles.brandName}>Anissa</span>
          <span className={styles.brandAccent}> Nursafitri</span>
        </div>

        <p className={styles.tagline}>
          Crafting beautiful experiences, one pixel at a time.
        </p>

        {/* Social Icons */}
        <div className={styles.socials}>
          {socials.map(({ Icon, href, label }) => (
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
        </div>

        <div className={styles.divider} aria-hidden />

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Anissa Nursafitri. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

import { motion } from 'framer-motion';
import { organisationalExperiences } from '../data/portfolioData';
import { HiOutlineUserGroup, HiOutlineCalendar, HiOutlineLocationMarker } from 'react-icons/hi';
import styles from './Experience.module.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.orb} aria-hidden />

      <motion.h2
        className={`section-heading ${styles.heading}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        Organisational <span className="gradient-text">Experience</span>
      </motion.h2>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {organisationalExperiences.map((exp) => (
          <motion.div key={exp.id} className={styles.card} variants={cardVariant}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <HiOutlineUserGroup size={22} />
              </div>
              <div className={styles.headerText}>
                <span className={styles.period}>
                  <HiOutlineCalendar size={14} /> {exp.period}
                </span>
                <span className={styles.location}>
                  <HiOutlineLocationMarker size={13} /> {exp.location}
                </span>
              </div>
            </div>

            <h3 className={styles.role}>{exp.role}</h3>
            <p className={styles.org}>{exp.organization}</p>

            <ul className={styles.pointsList}>
              {exp.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

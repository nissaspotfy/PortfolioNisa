import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { HiAcademicCap, HiOutlineLocationMarker } from 'react-icons/hi';
import styles from './Education.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeLeft  = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };
const fadeRight = { hidden: { opacity: 0, x:  60 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };

export default function Education() {
  return (
    <section className={styles.section} id="education">
      {/* Background accent */}
      <div className={styles.bgAccent} aria-hidden />

      <motion.h2
        className={`section-heading ${styles.heading}`}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        Education <span className="gradient-text">Background</span>
      </motion.h2>

      <div className={styles.timeline}>
        {/* Center line */}
        <div className={styles.line} aria-hidden />

        {education.map((item, idx) => {
          const isOdd = idx % 2 === 0;
          return (
            <motion.div
              key={item.id}
              className={`${styles.item} ${isOdd ? styles.itemLeft : styles.itemRight}`}
              variants={isOdd ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Dot */}
              <div className={styles.dot}>
                <HiAcademicCap size={18} />
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.period}>{item.period}</span>
                  {item.gpa && <span className={styles.gpaBadge}>GPA: {item.gpa}</span>}
                </div>

                <h3 className={styles.school}>{item.institution}</h3>
                <p className={styles.degree}>
                  {item.degree} • <HiOutlineLocationMarker size={13} /> {item.location}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

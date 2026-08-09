import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { professionalExperiences } from '../data/portfolioData';
import { HiOutlineUserGroup, HiOutlineCalendar, HiOutlineDocumentText, HiChevronDown, HiChevronUp } from 'react-icons/hi';
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
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll ? professionalExperiences : professionalExperiences.slice(0, 4);

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
        Professional <span className="gradient-text">Experience</span>
      </motion.h2>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <AnimatePresence>
          {displayedExperiences.map((exp) => (
            <motion.div
              key={exp.id}
              className={styles.card}
              variants={cardVariant}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 20 }}
              layout
            >
              {/* Card Header: Role & Period */}
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <HiOutlineUserGroup size={22} />
                </div>
                <div className={styles.headerText}>
                  <span className={styles.period}>
                    <HiOutlineCalendar size={14} /> {exp.period}
                  </span>
                </div>
              </div>

              <h3 className={styles.role}>{exp.role}</h3>
              <p className={styles.org}>{exp.organization}</p>

              {/* Activity Image Box */}
              {exp.image && (
                <div className={styles.imageBox}>
                  <img
                    src={exp.image}
                    alt={exp.role}
                    className={styles.activityImg}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay} />
                  <span className={styles.imageBadge}>📸 Activity Documentation</span>
                </div>
              )}

              {/* Note & Summary Box */}
              {exp.note && (
                <div className={styles.noteBox}>
                  <div className={styles.noteHeader}>
                    <HiOutlineDocumentText size={16} />
                    <span>Activity Summary & Overview</span>
                  </div>
                  <p className={styles.noteText}>{exp.note}</p>
                </div>
              )}

              {/* Activity Tags */}
              {exp.tags && (
                <div className={styles.tagWrap}>
                  {exp.tags.map((t, idx) => (
                    <span key={idx} className={styles.tagPill}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Read More / Load More Button */}
      {professionalExperiences.length > 4 && (
        <div className={styles.loadMoreWrap}>
          <button
            type="button"
            className={styles.loadMoreBtn}
            onClick={() => setShowAll(!showAll)}
          >
            <span>
              {showAll
                ? 'Show Less Experiences'
                : `View More Experiences (+${professionalExperiences.length - 4} More)`}
            </span>
            {showAll ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
          </button>
        </div>
      )}
    </section>
  );
}

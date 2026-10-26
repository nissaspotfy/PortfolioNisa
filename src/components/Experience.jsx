import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { professionalExperiences } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';
import { HiOutlineUserGroup, HiOutlineCalendar, HiOutlineDocumentText, HiChevronDown, HiChevronUp, HiOutlineSparkles } from 'react-icons/hi';
import styles from './Experience.module.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 35 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const filterTabs = [
  { key: 'all', label: 'Semua Pengalaman' },
  { key: 'admin', label: '📂 Administrasi & Kesekretariatan' },
  { key: 'webdev', label: '💻 Asisten Lab & Tech' },
  { key: 'creative', label: '✍️ Publikasi & Desain Media' },
];

export default function Experience() {
  const { selectedRole } = useRole();
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Sync with selectedRole when changed by recruiter
  useEffect(() => {
    if (selectedRole === 'admin' || selectedRole === 'webdev' || selectedRole === 'creative') {
      setActiveFilter(selectedRole);
    } else {
      setActiveFilter('all');
    }
  }, [selectedRole]);

  const filtered = activeFilter === 'all'
    ? professionalExperiences
    : professionalExperiences.filter((e) => e.roleCategory === activeFilter);

  const displayedExperiences = showAll ? filtered : filtered.slice(0, 4);

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
        Professional & <span className="gradient-text">Organizational Track</span>
      </motion.h2>

      <p className={styles.sectionSubtitle}>
        Rekam jejak kepemimpinan, tata kelola administrasi organisasi, asistensi akademik, dan publikasi media:
      </p>

      {/* Filter Tabs */}
      <div className={styles.filterWrapper}>
        <div className={styles.filterPills}>
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`${styles.filterBtn} ${activeFilter === tab.key ? styles.filterBtnActive : ''}`}
              onClick={() => {
                setActiveFilter(tab.key);
                setShowAll(false);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <AnimatePresence mode="popLayout">
          {displayedExperiences.map((exp) => (
            <motion.div
              key={exp.id}
              className={`${styles.card} ${selectedRole === exp.roleCategory ? styles.cardRoleMatched : ''}`}
              variants={cardVariant}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.95 }}
              layout
            >
              {/* Card Header: Role & Period */}
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <HiOutlineUserGroup size={22} />
                </div>
                <div className={styles.headerText}>
                  {exp.categoryBadge && (
                    <span className={styles.categoryBadge}>{exp.categoryBadge}</span>
                  )}
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
                  <span className={styles.imageBadge}>📸 Dokumentasi Aktivitas</span>
                </div>
              )}

              {/* Note & Summary Box */}
              {exp.note && (
                <div className={styles.noteBox}>
                  <div className={styles.noteHeader}>
                    <HiOutlineDocumentText size={16} />
                    <span>Ikhtisar Tanggung Jawab & Kontribusi</span>
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
      {filtered.length > 4 && (
        <div className={styles.loadMoreWrap}>
          <button
            type="button"
            className={styles.loadMoreBtn}
            onClick={() => setShowAll(!showAll)}
          >
            <span>
              {showAll
                ? 'Tampilkan Lebih Sedikit'
                : `Tampilkan Semua Pengalaman (${filtered.length} Aktivitas)`}
            </span>
            {showAll ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
          </button>
        </div>
      )}
    </section>
  );
}

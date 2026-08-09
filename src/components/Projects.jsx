import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectExperiences } from '../data/portfolioData';
import {
  HiOutlineCode,
  HiOutlineCalendar,
  HiOutlineExternalLink,
  HiOutlineBookOpen,
  HiOutlineClipboardCopy,
  HiOutlineCheck,
  HiChevronDown,
  HiChevronUp,
} from 'react-icons/hi';
import styles from './Projects.module.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Projects() {
  const [copiedId, setCopiedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleCopyIsbn = (id, isbn) => {
    navigator.clipboard.writeText(isbn);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const displayedProjects = showAll ? projectExperiences : projectExperiences.slice(0, 4);

  return (
    <section className={styles.section} id="projects">
      <div className={styles.bgOrb} aria-hidden />

      <motion.h2
        className={`section-heading ${styles.heading}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Project <span className="gradient-text">Experiences</span>
      </motion.h2>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <AnimatePresence>
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.card}
              variants={cardVariant}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 20 }}
              layout
            >
              {/* Header: Position & Time / Category */}
              <div className={styles.topHeader}>
                <div className={styles.iconWrap}>
                  {project.isTextbook ? <HiOutlineBookOpen size={22} /> : <HiOutlineCode size={22} />}
                </div>
                <div className={styles.headerInfo}>
                  <span className={styles.roleTag}>{project.role}</span>
                  <span className={styles.period}>
                    <HiOutlineCalendar size={14} /> {project.period}
                  </span>
                </div>
              </div>

              {/* Project Image Preview */}
              {project.image && (
                project.isTextbook ? (
                  <div className={styles.textbookBox}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.fullTextbookImg}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className={styles.mockupContainer}>
                    <div className={styles.mockupHeader}>
                      <div className={styles.windowControls}>
                        <span className={`${styles.dot} ${styles.dotRed}`} />
                        <span className={`${styles.dot} ${styles.dotYellow}`} />
                        <span className={`${styles.dot} ${styles.dotGreen}`} />
                      </div>
                    </div>
                    <div className={styles.imageWrap}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={styles.projectImg}
                        loading="lazy"
                      />
                      <div className={styles.imageOverlay} />
                    </div>
                  </div>
                )
              )}

              <div className={styles.cardContent}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.institution}>{project.institution}</p>

                {/* Interactive Copyable ISBN Badge */}
                {project.isbn && (
                  <button
                    type="button"
                    onClick={() => handleCopyIsbn(project.id, project.isbn)}
                    className={`${styles.isbnBadge} ${copiedId === project.id ? styles.isbnBadgeCopied : ''}`}
                    title="Copy ISBN"
                  >
                    <span className={styles.isbnText}>
                      📚 ISBN: <strong>{project.isbn}</strong>
                    </span>
                    <span className={styles.copyHoverTag}>
                      {copiedId === project.id ? (
                        <>
                          <HiOutlineCheck size={14} color="#10b981" /> Copied!
                        </>
                      ) : (
                        <>
                          <HiOutlineClipboardCopy size={14} /> Copy ISBN
                        </>
                      )}
                    </span>
                  </button>
                )}

                {/* Action Buttons */}
                <div className={styles.actionRow}>
                  {project.storeUrl && (
                    <a
                      href={project.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.storeBtn}
                    >
                      <span>Buy Book on Inkara</span>
                      <HiOutlineExternalLink size={15} />
                    </a>
                  )}

                  {project.isbnUrl && (
                    <a
                      href={project.isbnUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.isbnBtn}
                    >
                      <span>Check ISBN (Perpusnas)</span>
                      <HiOutlineExternalLink size={15} />
                    </a>
                  )}

                  {project.srsUrl && (
                    <a
                      href={project.srsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.srsBtn}
                    >
                      <span>View SRS Document (PDF)</span>
                      <HiOutlineExternalLink size={15} />
                    </a>
                  )}

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.demoBtn}
                    >
                      <span>Live Demo</span>
                      <HiOutlineExternalLink size={15} />
                    </a>
                  ) : (!project.isTextbook && !project.srsUrl) ? (
                    <span className={styles.readyBadge}>
                      {project.badgeStatus || '🚀 Deployment Ready'}
                    </span>
                  ) : null}
                </div>

                {/* Tech Tags at the bottom */}
                <div className={styles.techTags}>
                  {project.tech.map((t, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Read More / Load More Button */}
      {projectExperiences.length > 4 && (
        <div className={styles.loadMoreWrap}>
          <button
            type="button"
            className={styles.loadMoreBtn}
            onClick={() => setShowAll(!showAll)}
          >
            <span>
              {showAll
                ? 'Show Less Projects'
                : `View More Projects (+${projectExperiences.length - 4} More)`}
            </span>
            {showAll ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
          </button>
        </div>
      )}
    </section>
  );
}

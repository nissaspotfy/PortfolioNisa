import { motion } from 'framer-motion';
import { projectExperiences } from '../data/portfolioData';
import { HiOutlineCode, HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineExternalLink, HiOutlineBookOpen } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
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
        {projectExperiences.map((project) => (
          <motion.div key={project.id} className={styles.card} variants={cardVariant}>
            {/* Header: Position & Time (BEFORE Image) */}
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
              <p className={styles.institution}>
                {project.institution} • <HiOutlineLocationMarker size={13} /> {project.location}
              </p>

              {project.isbn && (
                <div className={styles.isbnBadge}>
                  📚 ISBN: <span>{project.isbn}</span>
                </div>
              )}

              <div className={styles.techTags}>
                {project.tech.map((t, idx) => (
                  <span key={idx} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons (GitHub / Demo / ISBN Perpusnas / Inkara Store) */}
              <div className={styles.actionRow}>
                {project.storeUrl && (
                  <a
                    href={project.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.storeBtn}
                  >
                    <span>Buy / View Book on Inkara Store</span>
                    <HiOutlineExternalLink size={16} />
                  </a>
                )}

                {project.isbnUrl && (
                  <a
                    href={project.isbnUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.isbnBtn}
                  >
                    <span>Check ISBN on Perpusnas</span>
                    <HiOutlineExternalLink size={16} />
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
                    <HiOutlineExternalLink size={16} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubBtn}
                  >
                    <FaGithub size={16} />
                    <span>View GitHub Repo</span>
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.demoBtn}
                  >
                    <span>Live Demo</span>
                    <HiOutlineExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

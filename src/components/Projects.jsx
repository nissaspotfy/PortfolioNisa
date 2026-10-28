import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectExperiences } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';
import {
  HiOutlineCode,
  HiOutlineCalendar,
  HiOutlineExternalLink,
  HiOutlineBookOpen,
  HiOutlineClipboardCopy,
  HiOutlineCheck,
  HiChevronDown,
  HiChevronUp,
  HiOutlineDocumentText,
  HiOutlineFolder,
  HiOutlineSparkles,
} from 'react-icons/hi';
import { FaGithub, FaYoutube, FaFigma } from 'react-icons/fa';
import styles from './Projects.module.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const categories = [
  { key: 'all', label: 'Semua Karya', icon: '🌟' },
  { key: 'webdev', label: 'Web & Software', icon: '💻' },
  { key: 'analyst_writer', label: 'Technical Writing & SRS', icon: '📊' },
  { key: 'creative', label: 'Content & Media', icon: '✍️' },
  { key: 'admin', label: 'Administrasi & Pengarsipan', icon: '📂' },
];

export default function Projects() {
  const { selectedRole } = useRole();
  const [activeFilter, setActiveFilter] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Auto-sync category filter when recruiter changes the global role
  useEffect(() => {
    if (selectedRole && selectedRole !== 'all') {
      setActiveFilter(selectedRole);
    } else {
      setActiveFilter('all');
    }
  }, [selectedRole]);

  const handleCopyIsbn = (id, isbn) => {
    navigator.clipboard.writeText(isbn);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredProjects = activeFilter === 'all'
    ? projectExperiences
    : projectExperiences.filter((p) => p.categoryKey === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  const getCardIcon = (project) => {
    if (project.isTextbook) return <HiOutlineBookOpen size={22} />;
    if (project.categoryKey === 'admin') return <HiOutlineFolder size={22} />;
    if (project.categoryKey === 'creative') return <HiOutlineSparkles size={22} />;
    if (project.categoryKey === 'analyst_writer') return <HiOutlineDocumentText size={22} />;
    return <HiOutlineCode size={22} />;
  };

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
        Curated <span className="gradient-text">Portfolio Works</span>
      </motion.h2>

      <p className={styles.sectionSubtitle}>
        Jelajahi karya nyata berdasarkan keahlian teknis, dokumentasi sistem, produksi konten kreatif, dan tata kelola administrasi:
      </p>

      {/* Category Filter Pills */}
      <div className={styles.filterWrapper}>
        <div className={styles.filterPills}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`${styles.filterBtn} ${activeFilter === cat.key ? styles.filterBtnActive : ''}`}
              onClick={() => {
                setActiveFilter(cat.key);
                setShowAll(false);
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              <span className={styles.countBadge}>
                {cat.key === 'all'
                  ? projectExperiences.length
                  : projectExperiences.filter((p) => p.categoryKey === cat.key).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        animate="show"
        layout
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.card}
              variants={cardVariant}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.95 }}
              layout
            >
              {/* Header: Position & Time / Category */}
              <div className={styles.topHeader}>
                <div className={styles.iconWrap}>
                  {getCardIcon(project)}
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
                      {project.images && project.images.length > 1 ? (
                        <div className={styles.dualImageWrap}>
                          {project.images.map((imgItem, idx) => (
                            <div key={idx} className={styles.dualImageItem}>
                              <img
                                src={imgItem.url}
                                alt={imgItem.label || project.title}
                                className={styles.dualProjectImg}
                                style={imgItem.objectPosition ? { objectPosition: imgItem.objectPosition } : undefined}
                                loading="lazy"
                              />
                              <div className={styles.imageOverlay} />
                              <span className={styles.dualBadge}>
                                {imgItem.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <>
                          <img
                            src={project.image}
                            alt={project.title}
                            className={styles.projectImg}
                            loading="lazy"
                          />
                          <div className={styles.imageOverlay} />
                        </>
                      )}
                    </div>
                  </div>
                )
              )}

              <div className={styles.cardContent}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.institution}>{project.institution}</p>

                {/* Key Bullet Points */}
                {project.points && (
                  <ul className={styles.bulletList}>
                    {project.points.slice(0, 3).map((pt, idx) => (
                      <li key={idx} className={styles.bulletItem}>
                        <span className={styles.bulletCheck}>▹</span> {pt}
                      </li>
                    ))}
                  </ul>
                )}

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

                {/* Action Buttons & Badges */}
                <div className={styles.actionRow}>
                  {/* SRS Document Button */}
                  {project.srsUrl && (
                    <a
                      href={project.srsUrl}
                      target={project.srsUrl.startsWith('http') || project.srsUrl.endsWith('.pdf') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={styles.srsBtn}
                      onClick={project.srsUrl === '#' ? (e) => {
                        e.preventDefault();
                        alert('Dokumen SRS E-Waste sedang dipersiapkan dan akan segera dilampirkan.');
                      } : undefined}
                      title="View SRS Document (PDF)"
                    >
                      <HiOutlineDocumentText size={16} />
                      <span>SRS Document</span>
                      <HiOutlineExternalLink size={14} />
                    </a>
                  )}

                  {/* GitHub Repo */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.gitBtn}
                      title="View GitHub Repository"
                    >
                      <FaGithub size={15} />
                      <span>GitHub</span>
                    </a>
                  )}

                  {/* Video URL */}
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.videoBtn}
                      title="Watch Content / Video"
                    >
                      <FaYoutube size={16} />
                      <span>Watch Video</span>
                    </a>
                  )}

                  {/* Figma Prototype URL */}
                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      target={project.figmaUrl.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={styles.figmaBtn}
                      onClick={project.figmaUrl === '#' ? (e) => {
                        e.preventDefault();
                        alert('Desain prototipe UI/UX Figma E-Waste sedang dipersiapkan.');
                      } : undefined}
                      title="View Prototype on Figma"
                    >
                      <FaFigma size={15} />
                      <span>Figma Prototype</span>
                      <HiOutlineExternalLink size={14} />
                    </a>
                  )}

                  {/* Live Demo or Deployment Status Badge */}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target={project.demoUrl.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`${styles.demoBtn} ${project.srsUrl || project.id === 2 ? styles.demoBtnRight : ''}`}
                      onClick={project.demoUrl === '#' ? (e) => {
                        e.preventDefault();
                        alert('Deployment sedang dipersiapkan. Live Demo akan segera aktif!');
                      } : undefined}
                      title={project.demoUrl === '#' ? 'Deployment sedang dipersiapkan' : 'Buka Live Demo'}
                    >
                      <span>Live Demo</span>
                      <HiOutlineExternalLink size={15} />
                    </a>
                  ) : (!project.isTextbook && project.badgeStatus) ? (
                    <span className={styles.readyBadge}>
                      {project.badgeStatus}
                    </span>
                  ) : null}

                  {/* Textbook links */}
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
      {filteredProjects.length > 4 && (
        <div className={styles.loadMoreWrap}>
          <button
            type="button"
            className={styles.loadMoreBtn}
            onClick={() => setShowAll(!showAll)}
          >
            <span>
              {showAll
                ? 'Tampilkan Lebih Sedikit'
                : `Tampilkan Semua Karya (${filteredProjects.length} Karya)`}
            </span>
            {showAll ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
          </button>
        </div>
      )}
    </section>
  );
}

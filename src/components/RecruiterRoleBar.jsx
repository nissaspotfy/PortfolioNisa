import { motion, AnimatePresence } from 'framer-motion';
import { useRole } from '../context/RoleContext';
import {
  HiOutlineBriefcase,
  HiOutlineDocumentDownload,
  HiOutlineMail,
  HiOutlineArrowNarrowDown,
  HiCheckCircle,
  HiOutlineSparkles,
} from 'react-icons/hi';
import styles from './RecruiterRoleBar.module.css';

export default function RecruiterRoleBar() {
  const { selectedRole, selectRole, activeProfile, currentHireMailtoUrl, rolesList } = useRole();

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section} id="recruiter-hub">
      <div className={styles.bgGlow} aria-hidden />

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        {/* Header Tagline */}
        <div className={styles.header}>
          <div className={styles.topBadge}>
            <HiOutlineSparkles size={16} />
            <span>Interactive Recruiter & HR Lens</span>
          </div>
          <h2 className={styles.title}>
            Sesuaikan Portofolio dengan <span className="gradient-text">Posisi yang Anda Cari</span>
          </h2>
          <p className={styles.description}>
            Sebagai lulusan Teknik Informatika dengan minat dan keahlian multi-disiplin, Anda dapat memilih posisi di bawah ini untuk melihat kualifikasi, kurasi karya, dan resume yang disesuaikan secara instan:
          </p>
        </div>

        {/* Role Switcher Tabs */}
        <div className={styles.tabsWrapper}>
          <div className={styles.tabs} role="tablist" aria-label="Recruiter Role Switcher">
            {rolesList.map((role) => {
              const isActive = selectedRole === role.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                  onClick={() => selectRole(role.id)}
                >
                  {isActive && (
                    <motion.div
                      className={styles.activePillBackground}
                      layoutId="activeRoleTab"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className={styles.tabContent}>{role.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Role Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRole}
            className={styles.panel}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.panelTop}>
              <div className={styles.roleHeadingWrap}>
                <span className={styles.roleBadge}>{activeProfile.badge}</span>
                <h3 className={styles.panelHeadline}>{activeProfile.headline}</h3>
              </div>

              {/* Target Positions Pills */}
              <div className={styles.targetSection}>
                <span className={styles.targetLabel}>
                  <HiOutlineBriefcase size={16} /> Posisi Relevan / Target Roles:
                </span>
                <div className={styles.targetPills}>
                  {activeProfile.targetPositions.map((pos, idx) => (
                    <span key={idx} className={styles.posPill}>
                      <HiCheckCircle size={14} className={styles.pillCheck} /> {pos}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Summary tailored to HR */}
            <p className={styles.panelSummary}>{activeProfile.summary}</p>

            {/* Panel Quick Actions */}
            <div className={styles.panelActions}>
              <a
                href={activeProfile.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cvBtn}
                title="Lihat / Unduh Dokumen CV"
              >
                <HiOutlineDocumentDownload size={18} />
                <span>{activeProfile.cvLabel}</span>
              </a>

              <a
                href={currentHireMailtoUrl}
                className={styles.hireBtn}
                title="Kirim Penawaran Kerja / Undangan Wawancara"
              >
                <HiOutlineMail size={18} />
                <span>Kontak & Interview Role Ini</span>
              </a>

              <button
                type="button"
                className={styles.jumpBtn}
                onClick={() => handleScrollTo('#projects')}
              >
                <span>Lihat Karya Terkait</span>
                <HiOutlineArrowNarrowDown size={16} />
              </button>

              <button
                type="button"
                className={styles.jumpBtnSecondary}
                onClick={() => handleScrollTo('#skills')}
              >
                <span>Lihat Keahlian Terkait</span>
                <HiOutlineArrowNarrowDown size={16} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

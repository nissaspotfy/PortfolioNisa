import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaJava,
  FaGithub,
  FaFigma,
  FaYoutube,
} from 'react-icons/fa';
import {
  SiVite,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiPostman,
  SiKotlin,
  SiMysql,
} from 'react-icons/si';
import {
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineCube,
  HiOutlineCode,
  HiOutlineDocumentText,
  HiOutlineFolder,
  HiOutlinePencilAlt,
  HiOutlineClipboardList,
  HiOutlineShare,
  HiCheckCircle,
} from 'react-icons/hi';
import styles from './Skills.module.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const getTechIcon = (iconKey) => {
  switch (iconKey) {
    case 'html':
      return <FaHtml5 size={22} color="#E34F26" />;
    case 'css':
      return <FaCss3Alt size={22} color="#1572B6" />;
    case 'vite':
      return <SiVite size={22} color="#646CFF" />;
    case 'node':
      return <FaNodeJs size={22} color="#339933" />;
    case 'express':
      return <SiExpress size={22} color="#00D4FF" />;
    case 'next':
      return <SiNextdotjs size={22} color="#FFFFFF" />;
    case 'react':
      return <FaReact size={22} color="#61DAFB" />;
    case 'js':
      return <FaJs size={22} color="#F7DF1E" />;
    case 'tailwind':
      return <SiTailwindcss size={22} color="#06B6D4" />;
    case 'github':
      return <FaGithub size={22} color="#FFFFFF" />;
    case 'postman':
      return <SiPostman size={22} color="#FF6C37" />;
    case 'figma':
      return <FaFigma size={22} color="#F24E1E" />;
    case 'vscode':
      return <HiOutlineCode size={22} color="#007ACC" />;
    case 'kotlin':
      return <SiKotlin size={22} color="#7F52FF" />;
    case 'laravel':
      return <FaLaravel size={22} color="#FF2D20" />;
    case 'php':
      return <FaPhp size={22} color="#777BB4" />;
    case 'java':
      return <FaJava size={22} color="#ED8B00" />;
    case 'mysql':
      return <SiMysql size={22} color="#4479A1" />;
    case 'uml':
      return <HiOutlineCube size={22} color="#A855F7" />;
    case 'srs':
      return <HiOutlineDocumentText size={22} color="#00D4FF" />;
    case 'archive':
      return <HiOutlineFolder size={22} color="#10B981" />;
    case 'video':
      return <FaYoutube size={22} color="#EF4444" />;
    case 'pen':
      return <HiOutlinePencilAlt size={22} color="#F59E0B" />;
    case 'office':
      return <HiOutlineClipboardList size={22} color="#3B82F6" />;
    case 'social':
      return <HiOutlineShare size={22} color="#EC4899" />;
    default:
      return <HiOutlineCode size={22} color="#00D4FF" />;
  }
};

export default function Skills() {
  const { selectedRole } = useRole();
  const [activeTab, setActiveTab] = useState('all');

  // Auto-sync tab when HR chooses a role
  useEffect(() => {
    if (selectedRole && selectedRole !== 'all') {
      setActiveTab(selectedRole);
    } else {
      setActiveTab('all');
    }
  }, [selectedRole]);

  // Multiply rows 3 times to ensure infinite smooth marquee animation
  const row1Triple = [...skills.row1, ...skills.row1, ...skills.row1];
  const row2Triple = [...skills.row2, ...skills.row2, ...skills.row2];

  const displayedCategories = activeTab === 'all'
    ? skills.categories
    : skills.categories.filter((cat) => cat.id === activeTab);

  return (
    <section className={styles.section} id="skills">
      <div className={styles.bgOrb} aria-hidden />

      <motion.h2
        className={`section-heading ${styles.heading}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Skills & <span className="gradient-text">Core Competencies</span>
      </motion.h2>

      <p className={styles.sectionSubtitle}>
        Daftar instrumen teknologi, metodologi dokumentasi, keahlian kreatif, dan kompetensi administrasi yang dikuasai:
      </p>

      {/* 🚀 Infinite Animated Tech Marquee Ticker */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.fadeLeft} aria-hidden />
        <div className={styles.fadeRight} aria-hidden />

        {/* Row 1: Scrolling Left */}
        <div className={styles.marqueeRow}>
          <div className={`${styles.marqueeTrack} ${styles.trackLeft}`}>
            {row1Triple.map((item, idx) => (
              <div key={idx} className={styles.techPill}>
                <span className={styles.iconWrap}>{getTechIcon(item.icon)}</span>
                <span className={styles.techLabel}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className={styles.marqueeRow}>
          <div className={`${styles.marqueeTrack} ${styles.trackRight}`}>
            {row2Triple.map((item, idx) => (
              <div key={idx} className={styles.techPill}>
                <span className={styles.iconWrap}>{getTechIcon(item.icon)}</span>
                <span className={styles.techLabel}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🎯 Domain Filter Tabs for HR */}
      <div className={styles.domainTabsWrap}>
        <div className={styles.domainTabs}>
          <button
            type="button"
            className={`${styles.domainTabBtn} ${activeTab === 'all' ? styles.domainTabBtnActive : ''}`}
            onClick={() => setActiveTab('all')}
          >
            🌟 Semua Bidang (All Domains)
          </button>
          {skills.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.domainTabBtn} ${activeTab === cat.id ? styles.domainTabBtnActive : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* 📦 Structured Domain Competencies Grid */}
      <div className={styles.domainsGrid}>
        <AnimatePresence mode="popLayout">
          {displayedCategories.map((cat) => {
            const isHighlighted = selectedRole === cat.id;
            return (
              <motion.div
                key={cat.id}
                className={`${styles.domainCard} ${isHighlighted ? styles.domainCardHighlighted : ''}`}
                variants={itemVariant}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.95 }}
                layout
              >
                <div className={styles.domainCardHeader}>
                  <div className={styles.domainHeaderLeft}>
                    <span className={styles.domainBadge}>{cat.badge}</span>
                    <h3 className={styles.domainTitle}>{cat.title}</h3>
                  </div>
                  {isHighlighted && (
                    <span className={styles.activeRoleTag}>
                      <HiCheckCircle size={14} /> Posisi Terpilih
                    </span>
                  )}
                </div>

                <p className={styles.domainDesc}>{cat.description}</p>

                <div className={styles.skillsPillGrid}>
                  {cat.skills.map((s, idx) => (
                    <div key={idx} className={styles.skillItemPill}>
                      <span className={styles.skillItemName}>{s.name}</span>
                      <span className={`${styles.skillLevelBadge} ${s.level === 'Advanced' ? styles.levelAdv : styles.levelInt}`}>
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* 🎯 Soft Skills & Achievements Grid */}
      <div className={styles.bottomGrid}>
        {/* Soft Skills */}
        <motion.div
          className={styles.softBlock}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.blockHeader}>
            <HiOutlineSparkles size={26} className={styles.iconPurple} />
            <div>
              <h3 className={styles.blockTitle}>Interpersonal & Professional Ethic</h3>
              <p className={styles.blockSub}>Karakter Kerja & Keterampilan Komunikasi</p>
            </div>
          </div>

          <div className={styles.softGrid}>
            {skills.softSkills.map((soft, idx) => (
              <motion.div key={idx} className={styles.softCard} variants={itemVariant}>
                <span className={styles.softEmoji}>{soft.icon}</span>
                <div className={styles.softInfo}>
                  <span className={styles.softText}>{soft.name}</span>
                  {soft.desc && <span className={styles.softDescText}>{soft.desc}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Honors & Achievements */}
        <motion.div
          className={styles.achieveBlock}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.blockHeader}>
            <HiOutlineStar size={26} className={styles.iconGold} />
            <div>
              <h3 className={styles.blockTitle}>Honors & Key Milestones</h3>
              <p className={styles.blockSub}>Penghargaan & Pengakuan Kompetensi</p>
            </div>
          </div>

          <div className={styles.achieveList}>
            {skills.achievements.map((ach, idx) => (
              <motion.div key={idx} className={styles.achieveCard} variants={itemVariant}>
                <div className={styles.trophyIcon}>🏆</div>
                <div className={styles.achieveDetails}>
                  <h4 className={styles.achieveTitle}>{ach.title}</h4>
                  <span className={styles.achieveInst}>{ach.institution}</span>
                  <div className={styles.achieveMeta}>
                    <span className={styles.achieveYear}>{ach.year}</span>
                    <span className={styles.achieveRoleBadge}>{ach.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

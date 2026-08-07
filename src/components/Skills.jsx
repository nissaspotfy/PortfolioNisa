import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { HiOutlineBadgeCheck, HiOutlineSparkles, HiOutlineStar } from 'react-icons/hi';
import styles from './Skills.module.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
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
        Skills & <span className="gradient-text">Achievements</span>
      </motion.h2>

      <div className={styles.layout}>
        {/* Hard Skills */}
        <motion.div
          className={styles.block}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className={styles.blockTitle}>
            <HiOutlineBadgeCheck size={24} className={styles.iconCyan} />
            Technical Expertise
          </h3>

          <div className={styles.skillGrid}>
            {skills.hardSkills.map((skill, idx) => (
              <motion.div key={idx} className={styles.skillCard} variants={itemVariant}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills & Achievements */}
        <div className={styles.rightColumn}>
          {/* Soft Skills */}
          <motion.div
            className={styles.block}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className={styles.blockTitle}>
              <HiOutlineSparkles size={24} className={styles.iconPurple} />
              Soft Skills
            </h3>

            <div className={styles.softPills}>
              {skills.softSkills.map((soft, idx) => (
                <motion.span key={idx} className={styles.softPill} variants={itemVariant}>
                  {soft}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className={styles.block}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className={styles.blockTitle}>
              <HiOutlineStar size={24} className={styles.iconGold} />
              Honors & Achievements
            </h3>

            <div className={styles.achievementList}>
              {skills.achievements.map((ach, idx) => (
                <motion.div key={idx} className={styles.achievementCard} variants={itemVariant}>
                  <div className={styles.trophyIcon}>🏆</div>
                  <div>
                    <h4 className={styles.achievementTitle}>{ach.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

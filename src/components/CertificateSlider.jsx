import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { BsChevronLeft, BsChevronRight, BsAward } from 'react-icons/bs';
import { certificates } from '../data/portfolioData';
import styles from './CertificateSlider.module.css';

const headingVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function CertificateSlider() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  // ---- Scroll helpers ----
  const CARD_WIDTH = 320 + 24; // card width + gap

  const scrollTo = useCallback((idx) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(idx, certificates.length - 1));
    setActiveIdx(clamped);
    el.scrollTo({ left: clamped * CARD_WIDTH, behavior: 'smooth' });
  }, [CARD_WIDTH]);

  const prev = () => scrollTo(activeIdx - 1);
  const next = () => scrollTo(activeIdx + 1);

  // ---- Mouse drag ----
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Snap to nearest card
    const el = trackRef.current;
    const idx = Math.round(el.scrollLeft / CARD_WIDTH);
    setActiveIdx(Math.max(0, Math.min(idx, certificates.length - 1)));
  };

  // ---- Touch drag ----
  const touchStartX = useRef(0);
  const touchScrollLeft = useRef(0);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchScrollLeft.current = trackRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    const walk = (touchStartX.current - e.touches[0].clientX) * 1.2;
    trackRef.current.scrollLeft = touchScrollLeft.current + walk;
  };

  const onTouchEnd = () => {
    const el = trackRef.current;
    const idx = Math.round(el.scrollLeft / CARD_WIDTH);
    const clamped = Math.max(0, Math.min(idx, certificates.length - 1));
    setActiveIdx(clamped);
    el.scrollTo({ left: clamped * CARD_WIDTH, behavior: 'smooth' });
  };

  return (
    <section className={styles.section} id="certificate">
      <div className={styles.bgOrb} aria-hidden />

      <motion.h2
        className={`section-heading ${styles.heading}`}
        variants={headingVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        My <span className="gradient-text">Certificates</span>
      </motion.h2>

      <motion.p
        className={styles.subheading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Drag or swipe to explore all {certificates.length} certificates →
      </motion.p>

      {/* Slider wrapper */}
      <div className={styles.sliderWrapper}>
        {/* Left Arrow */}
        <button
          className={`${styles.arrow} ${styles.arrowLeft} ${activeIdx === 0 ? styles.arrowDisabled : ''}`}
          onClick={prev}
          aria-label="Previous certificate"
          id="cert-prev-btn"
        >
          <BsChevronLeft size={20} />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className={`${styles.track} ${isDragging ? styles.dragging : ''}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className={`${styles.card} ${idx === activeIdx ? styles.cardActive : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => scrollTo(idx)}
            >
              <div className={styles.cardImgWrap}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className={styles.cardImg}
                  draggable={false}
                  loading="lazy"
                />
                <div className={styles.cardImgOverlay}>
                  <BsAward size={32} className={styles.awardIcon} />
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardDate}>{cert.date}</div>
                <h3 className={styles.cardTitle}>{cert.title}</h3>
                <p className={styles.cardIssuer}>{cert.issuer}</p>
                <p className={styles.cardDesc}>{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className={`${styles.arrow} ${styles.arrowRight} ${activeIdx === certificates.length - 1 ? styles.arrowDisabled : ''}`}
          onClick={next}
          aria-label="Next certificate"
          id="cert-next-btn"
        >
          <BsChevronRight size={20} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className={styles.dots} role="tablist" aria-label="Certificate navigation">
        {certificates.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === activeIdx ? styles.dotActive : ''}`}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to certificate ${idx + 1}`}
            role="tab"
            aria-selected={idx === activeIdx}
            id={`cert-dot-${idx}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className={styles.counter}>
        <span className={styles.counterCurrent}>{String(activeIdx + 1).padStart(2, '0')}</span>
        <span className={styles.counterSep}>/</span>
        <span className={styles.counterTotal}>{String(certificates.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}

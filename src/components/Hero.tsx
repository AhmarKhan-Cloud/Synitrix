import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { tickerItems } from '../data/portfolioData';

const fade = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

interface HeroProps {
  go: (id: string) => void;
}

export default function Hero({ go }: HeroProps) {
  return (
    <>
      <section className="hero">
        <div className="hero-art">
          <span />
          <span />
          <span />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="hero-inner"
        >
          <motion.p variants={fade} className="eyebrow">
            <span />
            Independent digital studio · Pakistan / Worldwide
          </motion.p>
          <motion.h1 variants={fade}>
            Engineering <em>what’s</em>
            <br />
            next.
          </motion.h1>
          <motion.p variants={fade} className="hero-copy">
            Synitix engineers high-impact web platforms, data products, and AI automation that turn complex operational problems into clear digital experiences.
          </motion.p>
          <motion.div variants={fade} className="hero-specialties">
            <span>Web platforms</span>
            <span>AI automation</span>
            <span>Data engineering</span>
          </motion.div>
          <motion.div variants={fade} className="hero-actions">
            <button className="button primary" onClick={() => go('#work')}>
              Explore our work <ArrowDownRight size={18} />
            </button>
            <a
              className="text-link"
              href="https://wa.me/923116234603"
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </motion.div>
        <div className="hero-bottom">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
          <span>01 — 05</span>
        </div>
      </section>

      <div className="ticker">
        <div>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i}>
              {item}
              <b>✦</b>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

export default function AboutSection() {
  return (
    <section id="about" className="section about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="section-intro"
      >
        <motion.p variants={fade} className="eyebrow">
          01 / Who we are
        </motion.p>
        <motion.h2 variants={fade}>
          A small team with a <em>wide</em> field of view.
        </motion.h2>
        <motion.div variants={fade} className="about-copy">
          <p>
            We’re a technology partner for teams that value clarity over noise. From discovery and interface design to data architecture and AI automation, we build digital systems that are practical, measurable, and ready to grow.
          </p>
          <a className="text-link" href="#contact">
            Meet the team <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </motion.div>
      <div className="stat-row">
        <div>
          <strong>1+</strong>
          <span>Years of experience</span>
        </div>
        <div>
          <strong>3</strong>
          <span>Projects completed</span>
        </div>
        <div>
          <strong>3</strong>
          <span>Happy clients</span>
        </div>
      </div>
    </section>
  );
}

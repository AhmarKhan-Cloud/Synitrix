import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import ProjectVisual from './ProjectVisual';
import { Link } from 'react-router-dom';

interface WorkSectionProps {
  setOpenProject: (project: Project | null) => void;
  limit?: number;
}

export default function WorkSection({ setOpenProject, limit }: WorkSectionProps) {
  return (
    <section id="work" className="section work">
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.p variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }} className="eyebrow">03 / Selected work</motion.p>
        <motion.h2 variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}>
          Built for <em>real</em> momentum.
        </motion.h2>
        <motion.p variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}>Every collaboration begins with a problem worth solving.</motion.p>
      </motion.div>
      <div className="project-grid">
        {projectsData.slice(0, limit).map((p, i) => (
          <motion.button
            key={p.title}
            className="project-card"
            onClick={() => setOpenProject(p)}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <ProjectVisual type={p.visual} image={p.image} alt={`${p.title} project preview`} />
            <div className="project-meta">
              <span>{p.kind}</span>
              <ArrowUpRight size={18} />
            </div>
            <h3>{p.title}</h3>
            <p>{p.blurb}</p>
            <div className="tags">
              {p.stack.map((t) => (
                <i key={t}>{t}</i>
              ))}
            </div>
          </motion.button>
        ))}
      </div>
      {limit && projectsData.length > limit && (
        <div className="work-all-link">
          <Link className="button secondary" to="/projects">View all projects <ArrowUpRight size={17} /></Link>
        </div>
      )}
    </section>
  );
}

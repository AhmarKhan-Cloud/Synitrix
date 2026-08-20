import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import ProjectVisual from './ProjectVisual';

interface WorkSectionProps {
  setOpenProject: (project: Project | null) => void;
}

export default function WorkSection({ setOpenProject }: WorkSectionProps) {
  return (
    <section id="work" className="section work">
      <div className="section-heading">
        <p className="eyebrow">03 / Selected work</p>
        <h2>
          Built for <em>real</em> momentum.
        </h2>
        <p>Every collaboration begins with a problem worth solving.</p>
      </div>
      <div className="project-grid">
        {projectsData.map((p, i) => (
          <motion.button
            key={p.title}
            className="project-card"
            onClick={() => setOpenProject(p)}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <ProjectVisual type={p.visual} />
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
    </section>
  );
}

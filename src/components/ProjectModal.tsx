import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, X } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  openProject: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ openProject, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {openProject && (
        <motion.div
          className="modal-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.article
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
          >
            <button className="close-modal" onClick={onClose}>
              <X />
            </button>
            <div className="modal-accent">
              <Sparkles />
              <span>{openProject.kind}</span>
            </div>
            <h2>{openProject.title}</h2>
            <p className="modal-lead">{openProject.overview}</p>
            <div className="modal-columns">
              <div>
                <h4>Technical components</h4>
                <ul>
                  {openProject.components.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Key features</h4>
                <ul>
                  {openProject.features.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-tech">
              <h4>Technologies used</h4>
              <div className="tags">
                {openProject.stack.map((t) => (
                  <i key={t}>{t}</i>
                ))}
              </div>
              {openProject.url && (
                <a
                  className="text-link"
                  href={openProject.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit project <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

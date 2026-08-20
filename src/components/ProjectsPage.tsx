import { motion } from 'framer-motion';
import { Project } from "../types";
import WorkSection from "./WorkSection";

const fade = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

export default function ProjectsPage({
  setOpenProject,
}: {
  setOpenProject: (project: Project | null) => void;
}) {
  return (
    <>
      <motion.section className="page-hero section" initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
        <motion.p variants={fade} className="eyebrow">Selected work</motion.p>
        <motion.h1 variants={fade}>
          Built with trust, <em>care,</em> and technical depth.
        </motion.h1>
        <motion.p variants={fade}>
          Every project starts with listening. We work closely with clients to
          turn business needs into stable, usable products—then support the
          details that make them perform.
        </motion.p>
      </motion.section>
      <WorkSection setOpenProject={setOpenProject} />
    </>
  );
}

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Project } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import WorkSection from './components/WorkSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { reviewsData } from './data/portfolioData';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';

export default function App() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [review, setReview] = useState(0);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const x = useSpring(cursorX, { damping: 38, stiffness: 220 });
  const y = useSpring(cursorY, { damping: 38, stiffness: 220 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 185);
      cursorY.set(e.clientY - 185);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  useEffect(() => {
    document.body.style.overflow = openProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [openProject]);

  useEffect(() => {
    const id = setInterval(
      () => setReview((r) => (r + 1) % reviewsData.length),
      6500
    );
    return () => clearInterval(id);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main id="top" className={`theme-${theme}`}>
      <div className="ambient-field">
        <i />
        <i />
        <i />
        <i />
      </div>
      <motion.div className="cursor-glow" style={{ x, y }} />

      <Header
        theme={theme}
        setTheme={setTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        go={go}
      />
      <Routes>
        <Route path="/" element={<div className="home-page"><Hero go={go} /><AboutSection /><ExpertiseSection /><WorkSection setOpenProject={setOpenProject} limit={2} /><TestimonialsSection review={review} setReview={setReview} /><ContactSection /></div>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage setOpenProject={setOpenProject} />} />
      </Routes>

      <Footer />

      <ProjectModal openProject={openProject} onClose={() => setOpenProject(null)} />
    </main>
  );
}

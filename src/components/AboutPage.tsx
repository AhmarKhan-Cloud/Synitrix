import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

const team = [
  { image: '/team/anas-akram-butt.png', name: 'Anas Akram Butt', role: 'Data Scientist & Web Developer', bio: 'I build data-led web applications and AI automation systems that make complex business processes easier to use, measure, and scale.', stack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'PostgreSQL', 'Data Science', 'AI Automation', 'ML / DL', 'Computer Vision', 'NLP'] },
  { image: '/team/muhammad-ahmar-khan.png', name: 'Muhammad Ahmar Khan', role: 'Business Developer & Web Developer', bio: 'I connect business goals with useful digital experiences, shaping web solutions and automation workflows that help teams grow with confidence.', stack: ['WordPress', 'Botpress', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Business Development'] },
];

export default function AboutPage() {
  return <>
    <motion.section
      className="page-hero section"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.12 }}
    >
      <motion.p variants={fade} className="eyebrow">About Synitix</motion.p>
      <motion.h1 variants={fade}>Technology that is <em>clear, useful,</em> and built to last.</motion.h1>
      <motion.p variants={fade}>We are a focused digital studio for businesses that need dependable web products, data foundations, and practical automation.</motion.p>
    </motion.section>
    <section className="about-detail section">
      <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="about-logo-panel"><svg viewBox="0 0 36 36"><path d="M6 9.5 18 3l12 6.5v13L18 29 6 22.5z"/><path d="m10 12 8 4.5 8-4.5M18 16.5V25"/></svg></motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ staggerChildren: 0.12 }}>
        <motion.p variants={fade} className="eyebrow">What we do</motion.p><motion.h2 variants={fade}>One technical partner, from idea to iteration.</motion.h2><motion.p variants={fade}>Synitix combines web development, data engineering, AI automation and reliable backend systems to solve work that matters. We help teams turn early ideas into focused products, modernise fragmented processes, and make their data more useful. Our approach is collaborative, direct, and built around solutions that people can actually adopt.</motion.p><motion.a variants={fade} className="text-link" href="#team">Meet our team <ArrowUpRight size={16}/></motion.a>
      </motion.div>
    </section>
    <section id="team" className="section team-section">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ staggerChildren: 0.12 }}><motion.p variants={fade} className="eyebrow">The people behind Synitix</motion.p><motion.h2 variants={fade}>A small team for ambitious work.</motion.h2></motion.div>
      <div className="team-grid">{team.map((person, index) => <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.1 }} className="team-card" key={person.name}><img src={person.image} alt={person.name}/><div className="team-copy"><p className="eyebrow">{person.role}</p><h3>{person.name}</h3><p>{person.bio}</p><div className="skill-tags">{person.stack.map(item => <i key={item}>{item}</i>)}</div></div></motion.article>)}</div>
    </section>
  </>;
}

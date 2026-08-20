import { ArrowUpRight } from 'lucide-react';

const team = [
  { image: '/team/anas-akram-butt.png', name: 'Anas Akram Butt', role: 'Data Scientist & Web Developer', bio: 'I build data-led web applications and AI automation systems that make complex business processes easier to use, measure, and scale.', stack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'PostgreSQL', 'Data Science', 'AI Automation', 'ML / DL', 'Computer Vision', 'NLP'] },
  { image: '/team/muhammad-ahmar-khan.png', name: 'Muhammad Ahmar Khan', role: 'Business Developer & Web Developer', bio: 'I connect business goals with useful digital experiences, shaping web solutions and automation workflows that help teams grow with confidence.', stack: ['WordPress', 'Botpress', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Business Development'] },
];

export default function AboutPage() {
  return <>
    <section className="page-hero section"><p className="eyebrow">About Synitix</p><h1>Technology that is <em>clear, useful,</em> and built to last.</h1><p>We are a focused digital studio for businesses that need dependable web products, data foundations, and practical automation.</p></section>
    <section className="about-detail section"><div className="about-logo-panel"><svg viewBox="0 0 36 36"><path d="M6 9.5 18 3l12 6.5v13L18 29 6 22.5z"/><path d="m10 12 8 4.5 8-4.5M18 16.5V25"/></svg></div><div><p className="eyebrow">What we do</p><h2>One technical partner, from idea to iteration.</h2><p>Synitix combines web development, data engineering, AI automation and reliable backend systems to solve work that matters. We help teams turn early ideas into focused products, modernise fragmented processes, and make their data more useful. Our approach is collaborative, direct, and built around solutions that people can actually adopt.</p><a className="text-link" href="#team">Meet our team <ArrowUpRight size={16}/></a></div></section>
    <section id="team" className="section team-section"><p className="eyebrow">The people behind Synitix</p><h2>A small team for ambitious work.</h2><div className="team-grid">{team.map(person => <article className="team-card" key={person.name}><img src={person.image} alt={person.name}/><div className="team-copy"><p className="eyebrow">{person.role}</p><h3>{person.name}</h3><p>{person.bio}</p><div className="skill-tags">{person.stack.map(item => <i key={item}>{item}</i>)}</div></div></article>)}</div></section>
  </>;
}
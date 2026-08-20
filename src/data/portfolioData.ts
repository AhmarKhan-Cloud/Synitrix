import { BrainCircuit, Code2, Database, Network, ScanLine } from 'lucide-react';
import { Project, Review, ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    title: 'Web development',
    icon: Code2,
    description: 'From a crisp landing page to a full product platform, we create quick, inclusive web experiences that make brands useful.',
    skills: ['React', 'TypeScript', 'Next.js', 'Figma', 'JavaScript', 'WordPress', 'Botpress'],
  },
  {
    title: 'Database & data engineering',
    icon: Database,
    description: 'We architect the reliable data layer that lets every team, workflow, and application work from the same truth.',
    skills: ['MongoDB', 'SQL', 'PostgreSQL', 'Analytics'],
  },
  {
    title: 'AI & machine learning',
    icon: BrainCircuit,
    description: 'Useful, carefully integrated intelligence—built around the outcomes your people and customers actually need.',
    skills: ['Machine Learning', 'Deep Learning', 'AI Automation', 'n8n'],
  },
  {
    title: 'Backend & APIs',
    icon: Network,
    description: 'The secure, scalable engines that keep your product fast, connected, and ready to grow.',
    skills: ['Node.js', 'Express.js', 'Python', 'REST API', 'FastAPI'],
  },
  {
    title: 'Web scraping',
    icon: ScanLine,
    description: 'Structured intelligence, collected with resilience and delivered exactly where you need it.',
    skills: ['Python', 'Playwright', 'BeautifulSoup'],
  },
];


export const projectsData: Project[] = [
  {
    title: 'University Admission Assistance & Management System',
    kind: 'Education platform',
    blurb: 'A clear, end-to-end admission experience for students, advisors, and university teams.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Machine Learning', 'Python', 'Pandas', 'NumPy', 'Nodemailer'],
    visual: 'admission',
    overview: 'UAAMS brings enquiries, applications, documentation and counselling into one coordinated workspace—making the path to enrolment easier to understand and manage.',
    components: ['Applicant portal', 'Admissions dashboard', 'Document workflow', 'Role-based access'],
    features: ['Application status tracking', 'Automated follow-ups', 'Centralised document collection', 'Actionable reporting'],
  },
  {
    title: 'PDF Web Scraping',
    kind: 'Data product',
    blurb: 'Reliable collection pipelines that turn scattered web data into decision-ready intelligence.',
    stack: ['Python', 'Playwright', 'MongoDB', 'Pillow', 'PyAutoGUI', 'PySocks', 'ddddocr'],
    visual: 'scrape',
    overview: 'A configurable data-collection system built to gather, validate and deliver structured web intelligence without manual effort.',
    components: ['Crawler orchestration', 'Data normalisation', 'Proxy handling', 'Delivery API'],
    features: ['Scheduled collection', 'Duplicate detection', 'Source monitoring', 'Export-ready datasets'],
  },
  {
    title: 'Sanitary Solutions',
    kind: 'Commerce experience',
    blurb: 'A polished product discovery experience designed around confidence and conversion.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    visual: 'sanitary',
    overview: 'Sanitary Solutions is a modern product platform that helps customers browse, compare and enquire with ease while giving the business a flexible digital storefront.',
    components: ['Product catalogue', 'Search and filtering', 'Lead capture', 'Content management'],
    features: ['Responsive browsing', 'Product comparison', 'Fast enquiry paths', 'Content performance'],
  },
  {
    title: 'ShuttlePro',
    kind: 'Transport technology',
    blurb: 'A streamlined transport experience that makes every route feel considered and connected.',
    stack: ['Next.js', 'Node.js', 'Express.js', 'API Integration', 'UX Design', 'Figma', 'PostgreSQL', 'Neon', 'Agentic AI'],
    visual: 'shuttle',
    url: 'https://shuttlepro.io/',
    overview: 'A customer-first shuttle platform focused on making movement simpler—from discovering services through booking and staying informed.',
    components: ['Route experience', 'Booking flow', 'Service information', 'Responsive interface'],
    features: ['Clear route discovery', 'Mobile-first booking', 'Live service touchpoints', 'Conversion-led design'],
  },
];

export const reviewsData: Review[] = [
  {
    name: 'Mustapha Yakubu',
    role: 'CEO, Careerli',
    project: 'AI resume platform',
    quote: 'Working with Synitrix was pleasant from start to finish. They made thoughtful suggestions, stayed patient through our delays, and were exceptionally clear in their communication.',
  },
  {
    name: 'David Wanis',
    role: 'Founder',
    project: 'Data & automation project',
    quote: 'Synitrix kept going until the project worked exactly as specified. Strong technical execution, reliable delivery, and a genuinely helpful partner.',
  },
  {
    name: 'Muhammad Shahid',
    role: 'Technical Lead',
    project: 'AI data scraping',
    quote: 'A great experience. The team brought strong technical skills and delivered quality results on our AI-driven data scraping project.',
  },
];

export const tickerItems = [
  'Web Development',
  'Data Engineer',
  'Data Scientist',
  'Scraping',
  'MongoDB',
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'AI Automation',
  'WordPress',
  'Botpress',
];
import { ExternalLink, Calendar } from 'lucide-react';
import { useState } from 'react';
import { ThemeProvider, useTheme } from '../lib/ThemeContext'; // Adjust path as needed

export default function Projects() {
  const { theme } = useTheme();

  const projects = [
    {
      title: 'E-Commerce Marketplace',
      category: 'Web Development',
      year: '2024',
      description:
        'Full-stack e-commerce platform with real-time inventory management, secure payment processing, and advanced analytics dashboard. Built with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      highlights: [
        'Processed $2M+ in transactions',
        '50,000+ active users',
        '99.9% uptime maintained',
      ],
    },
    {
      title: 'Healthcare Management System',
      category: 'App Development',
      year: '2024',
      description:
        'Comprehensive patient management mobile application with telemedicine features, appointment scheduling, and electronic health records. Available on iOS and Android.',
      technologies: ['React Native', 'FastAPI', 'PostgreSQL', 'WebRTC'],
      highlights: [
        '10,000+ appointments booked',
        'HIPAA compliant architecture',
        '4.8 star rating on app stores',
      ],
    },
    {
      title: 'TechFlow Brand Identity',
      category: 'Graphic Design',
      year: '2024',
      description:
        'Complete brand identity suite for a SaaS startup including logo design, brand guidelines, marketing materials, and social media templates.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
      highlights: [
        'Increased brand recognition by 150%',
        'Award-winning logo design',
        'Consistent cross-platform presence',
      ],
    },
    {
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      year: '2023',
      description:
        'Intuitive financial analytics dashboard with real-time data visualization, customizable widgets, and comprehensive reporting features.',
      technologies: ['Figma', 'React', 'D3.js', 'TypeScript'],
      highlights: [
        '40% increase in user engagement',
        'Reduced learning curve by 60%',
        'Accessibility compliant (WCAG 2.1)',
      ],
    },
    {
      title: 'Social Media Platform',
      category: 'Web Development',
      year: '2023',
      description:
        'Modern social networking platform with real-time messaging, content sharing, and advanced privacy controls. Scalable architecture supporting millions of users.',
      technologies: ['Next.js', 'GraphQL', 'Redis', 'AWS'],
      highlights: [
        '1M+ registered users',
        'Real-time messaging at scale',
        'Advanced content moderation',
      ],
    },
    {
      title: 'Fitness Tracking App',
      category: 'App Development',
      year: '2023',
      description:
        'Cross-platform fitness application with workout tracking, nutrition planning, and social features. Integration with wearable devices and health APIs.',
      technologies: ['Flutter', 'Firebase', 'ML Kit', 'HealthKit'],
      highlights: [
        '500K+ downloads',
        'AI-powered workout recommendations',
        'Integration with 15+ wearables',
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Web Development', 'App Development', 'Graphic Design', 'UI/UX Design'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <ThemeProvider>
    <div className={`min-h-screen ${theme === 'white' ? 'theme-bg-tertiary' : 'theme-bg-primary'} pt-16`}>
      <section className={`py-20 ${theme === 'white' ? 'theme-bg-tertiary' : 'theme-bg-primary'} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#39ff14] rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#d4e00d] rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-5xl md:text-6xl font-bold text-center theme-accent-primary mb-6`}>
            Our Projects
          </h1>
          <p className={`text-xl ${theme === 'white' ? 'theme-text-secondary' : 'text-gray-300'} text-center max-w-3xl mx-auto`}>
            Showcasing our successful collaborations and innovative solutions across various
            industries
          </p>
        </div>
      </section>

      <section className={`py-20 ${theme === 'white' ? 'theme-bg-secondary' : 'theme-bg-secondary'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-theme-accent-primary text-theme-text-primary'
                    : `bg-theme-bg-secondary border theme-border hover:border-theme-accent-primary ${theme === 'white' ? 'text-theme-text-primary' : 'text-gray-300'} hover:text-theme-accent-primary`
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-theme-bg-secondary p-8 rounded-2xl border theme-border hover:border-theme-accent-secondary transition-all duration-300 hover:shadow-[0_0_15px_var(--shadow-color)] hover:-translate-y-2 group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 bg-[rgba(57,255,20,0.2)] text-theme-accent-primary rounded-full text-sm font-semibold`}>
                    {project.category}
                  </span>
                  <div className={`flex items-center space-x-2 ${theme === 'white' ? 'text-theme-text-tertiary' : 'text-gray-400'} text-sm`}>
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <h3 className={`text-2xl font-bold ${theme === 'white' ? 'theme-text-primary' : 'text-white'} mb-3 group-hover:text-theme-accent-primary transition-colors`}>
                  {project.title}
                </h3>

                <p className={`text-gray-300 mb-4 leading-relaxed ${theme === 'white' ? 'theme-text-secondary' : 'text-gray-300'}`}>{project.description}</p>

                <div className="mb-4">
                  <h4 className={`text-theme-accent-secondary font-semibold text-sm mb-2`}>Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-theme-bg-tertiary border theme-border text-gray-300 rounded text-xs ${theme === 'white' ? 'text-theme-text-tertiary' : 'text-gray-300'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className={`text-theme-accent-secondary font-semibold text-sm mb-2`}>Key Highlights:</h4>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-theme-accent-primary rounded-full mt-2"></div>
                        <p className={`text-gray-400 text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`flex items-center space-x-2 ${theme === 'white' ? 'text-theme-accent-primary' : 'text-theme-accent-primary'} hover:text-theme-accent-secondary transition-colors font-semibold`}>
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${theme === 'white' ? 'theme-bg-tertiary' : 'theme-bg-tertiary'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold theme-accent-primary mb-6`}>
            Have a Project in Mind?
          </h2>
          <p className={`text-xl ${theme === 'white' ? 'theme-text-secondary' : 'text-gray-300'} mb-8`}>
            Let's create something amazing together. Get in touch to discuss your next project.
          </p>
          <button
            onClick={() => {
              const event = new CustomEvent('openContactModal');
              window.dispatchEvent(event);
            }}
            className="px-10 py-4 bg-theme-accent-secondary text-theme-text-primary font-bold rounded-lg hover:bg-theme-accent-primary transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
     </ThemeProvider>
  );
}

import { ArrowRight, Code, Smartphone, Palette, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeProvider, useTheme } from '../lib/ThemeContext'; // Adjust path as needed

export default function Home() {
  const { theme } = useTheme();

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Graphic Design',
      description: 'Stunning visual designs that capture your brand essence',
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions for optimal experiences',
    },
  ];

  const keyProjects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack marketplace with real-time inventory management',
    },
    {
      title: 'Healthcare App',
      category: 'App Development',
      description: 'Patient management system with telemedicine features',
    },
    {
      title: 'Brand Identity Suite',
      category: 'Graphic Design',
      description: 'Complete branding package for tech startup',
    },
  ];

  return (
    <ThemeProvider>
    <div className={`min-h-screen ${theme === 'white' ? 'theme-bg-tertiary' : 'theme-bg-primary'}`}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 ${theme === 'white' ? 'theme-bg-tertiary' : 'theme-bg-primary'}`}></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#39ff14] rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#ffff00] rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-7xl font-bold ${theme === 'white' ? 'theme-text-primary' : 'text-white'} mb-6`}>
            Welcome to{' '}
            <span className="theme-accent-primary">SYNITIX</span>
          </h1>
          <p className={`text-xl md:text-2xl ${theme === 'white' ? 'theme-text-secondary' : 'text-gray-300'} mb-8 max-w-3xl mx-auto`}>
            Transforming Ideas into Digital Excellence
          </p>
          <p className={`text-lg ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            We specialize in cutting-edge web development, mobile applications, stunning graphic
            design, and intuitive UI/UX solutions that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-theme-accent-primary text-theme-text-primary font-bold rounded-lg hover:bg-theme-accent-secondary transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 bg-theme-bg-secondary border-2 border-theme-accent-primary text-theme-accent-primary font-bold rounded-lg hover:bg-theme-accent-primary hover:text-theme-text-primary transition-all duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className={`py-20 ${theme === 'white' ? 'theme-bg-tertiary' : 'theme-bg-primary'}`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#39ff14] rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#d4e00d] rounded-full blur-xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center theme-accent-secondary mb-4`}>
            Our Services
          </h2>
          <p className={`text-center ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            Comprehensive digital solutions tailored to your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-theme-bg-secondary p-6 rounded-xl border theme-border hover:border-theme-accent-primary transition-all duration-300 hover:shadow-[0_0_15px_var(--shadow-color)] hover:-translate-y-2 group`}
              >
                <div className="theme-accent-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === 'white' ? 'theme-text-primary' : 'text-white'} mb-2`}>{service.title}</h3>
                <p className={`text-gray-600 text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 theme-accent-primary hover:text-theme-accent-secondary transition-colors font-semibold"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className={`py-20 ${theme === 'white' ? 'theme-bg-tertiary' : 'theme-bg-tertiary'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center theme-accent-secondary mb-4`}>
            Featured Projects
          </h2>
          <p className={`text-center ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            Showcasing our latest work and successful client collaborations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-theme-bg-secondary p-8 rounded-xl border theme-border hover:border-theme-accent-secondary transition-all duration-300 hover:shadow-[0_0_15px_var(--shadow-color)] hover:-translate-y-2`}
              >
                <div className="theme-accent-primary text-sm font-semibold mb-2">{project.category}</div>
                <h3 className={`text-2xl font-bold ${theme === 'white' ? 'theme-text-primary' : 'text-white'} mb-3`}>{project.title}</h3>
                <p className={`text-gray-600 ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>{project.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 theme-accent-primary hover:text-theme-accent-secondary transition-colors font-semibold"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className={`py-20 ${theme === 'white' ? 'theme-bg-tertiary' : 'theme-bg-primary'}`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#39ff14] rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#d4e00d] rounded-full blur-xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold theme-accent-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className={`text-xl ${theme === 'white' ? 'theme-text-secondary' : 'text-gray-300'} mb-8`}>
            Let's collaborate to bring your vision to life with innovative digital solutions
          </p>
          <button
            onClick={() => {
              const event = new CustomEvent('openContactModal');
              window.dispatchEvent(event);
            }}
            className="px-10 py-4 bg-theme-accent-secondary text-theme-text-primary font-bold rounded-lg hover:bg-theme-accent-primary transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
    </ThemeProvider>
  );
}


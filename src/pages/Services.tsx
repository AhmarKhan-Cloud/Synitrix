import { Code, Smartphone, Palette, Layout, Globe, Database, Cloud, Lock } from 'lucide-react';
import { ThemeProvider, useTheme } from '../lib/ThemeContext'; // Adjust path as needed

export default function Services() {
  const { theme } = useTheme();

  const mainServices = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description:
        'Custom web applications built with cutting-edge technologies and best practices.',
      features: [
        'Full-stack development with React, Node.js, and modern frameworks',
        'Responsive and mobile-first design implementation',
        'Progressive Web Apps (PWAs) for enhanced user experience',
        'E-commerce platforms with secure payment integration',
        'Content Management Systems (CMS) customization',
        'API development and third-party integrations',
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'App Development',
      description:
        'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS and Android native app development',
        'Cross-platform solutions using React Native and Flutter',
        'Real-time features and push notifications',
        'Offline functionality and data synchronization',
        'App Store and Google Play submission assistance',
        'Ongoing maintenance and feature updates',
      ],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Graphic Design',
      description:
        'Stunning visual designs that capture your brand essence and engage your audience.',
      features: [
        'Brand identity and logo design',
        'Marketing materials and collateral',
        'Social media graphics and templates',
        'Print design for business cards, brochures, and flyers',
        'Infographics and data visualization',
        'Illustration and custom artwork',
      ],
    },
    {
      icon: <Layout className="w-12 h-12" />,
      title: 'UI/UX Design',
      description:
        'User-centered design solutions that prioritize usability and create delightful experiences.',
      features: [
        'User research and persona development',
        'Wireframing and interactive prototyping',
        'Visual design and style guide creation',
        'Usability testing and user feedback analysis',
        'Responsive design for all devices',
        'Accessibility compliance (WCAG standards)',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'SEO & Digital Marketing',
      description: 'Optimize your online presence and reach your target audience effectively.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Architecture',
      description: 'Scalable and efficient database design for optimal performance.',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Deploy and manage applications on AWS, Azure, and Google Cloud.',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Protect your digital assets with robust security measures.',
    },
  ];

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
            Our Services
          </h1>
          <p className={`text-xl ${theme === 'white' ? 'theme-text-secondary' : 'text-gray-300'} text-center max-w-3xl mx-auto`}>
            Comprehensive digital solutions tailored to transform your business and exceed your
            expectations
          </p>
        </div>
      </section>

      <section className={`py-20 ${theme === 'white' ? 'theme-bg-secondary' : 'theme-bg-secondary'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className={`bg-theme-bg-secondary p-12 rounded-2xl border theme-border hover:border-theme-accent-primary transition-all duration-300 hover:shadow-[0_0_15px_var(--shadow-color)]`}>
                    <div className="theme-accent-primary mb-6">{service.icon}</div>
                    <h2 className={`text-3xl font-bold ${theme === 'white' ? 'theme-text-primary' : 'text-white'} mb-4`}>{service.title}</h2>
                    <p className={`text-gray-300 mb-6 leading-relaxed ${theme === 'white' ? 'theme-text-secondary' : 'text-gray-300'}`}>{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-theme-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className={`text-gray-400 text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className={`w-64 h-64 bg-gradient-to-br from-[rgba(169,214,191,0.2)] to-[rgba(212,224,13,0.2)] rounded-full blur-xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${theme === 'white' ? 'theme-bg-tertiary' : 'theme-bg-tertiary'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center theme-accent-secondary mb-4`}>
            Additional Services
          </h2>
          <p className={`text-center ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'} mb-12 max-w-2xl mx-auto`}>
            Expand your capabilities with our complementary offerings
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={`bg-theme-bg-secondary p-6 rounded-xl border theme-border hover:border-theme-accent-secondary transition-all duration-300 hover:shadow-[0_0_15px_var(--shadow-color)] hover:-translate-y-2 group`}
              >
                <div className="theme-accent-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === 'white' ? 'theme-text-primary' : 'text-white'} mb-2`}>{service.title}</h3>
                <p className={`text-gray-400 text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${theme === 'white' ? 'theme-bg-secondary' : 'theme-bg-secondary'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold theme-accent-primary mb-6`}>
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className={`text-xl ${theme === 'white' ? 'theme-text-secondary' : 'text-gray-300'} mb-8`}>
            Let's discuss how our services can help achieve your business goals
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


import { Briefcase, Award, Users, Target } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'John Mitchell',
      role: 'CEO & Co-Founder',
      description:
        'Visionary leader with 15+ years in technology innovation. John drives strategic direction and fosters partnerships that fuel growth. His expertise spans enterprise solutions and startup ecosystems.',
      achievements: [
        'Led 3 successful tech startups',
        'Featured in Forbes 30 Under 30',
        'MBA from Stanford University',
      ],
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Co-Founder',
      description:
        'Technology architect and AI specialist with a passion for scalable solutions. Sarah oversees technical innovation and ensures cutting-edge implementation across all projects.',
      achievements: [
        'Former Google Senior Engineer',
        'Published 12 research papers on ML',
        'PhD in Computer Science from MIT',
      ],
    },
  ];

  const testimonials = [
    {
      client: 'Michael Roberts',
      company: 'TechFlow Solutions',
      text: 'Synitrix transformed our digital presence completely. Their team delivered a stunning website and mobile app that exceeded our expectations. The attention to detail and innovative approach set them apart.',
      rating: 5,
    },
    {
      client: 'Emily Watson',
      company: 'GreenLeaf Industries',
      text: 'Working with Synitrix was a game-changer for our business. They understood our vision and brought it to life with exceptional UI/UX design. Highly recommend their services!',
      rating: 5,
    },
    {
      client: 'David Park',
      company: 'NextGen Healthcare',
      text: 'The professionalism and technical expertise of the Synitrix team is unmatched. They delivered our healthcare platform on time and within budget, with features that delighted our users.',
      rating: 5,
    },
  ];

  const stats = [
    { icon: <Briefcase className="w-8 h-8" />, value: '200+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8" />, value: '150+', label: 'Happy Clients' },
    { icon: <Award className="w-8 h-8" />, value: '25+', label: 'Awards Won' },
    { icon: <Target className="w-8 h-8" />, value: '98%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#39ff14] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ffff00] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-[#39ff14] mb-6 drop-shadow-[0_0_20px_#39ff14]">
            About Synitrix
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Pioneering Digital Innovation Since 2015
          </p>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-[#39ff14]/30 shadow-[0_0_50px_rgba(57,255,20,0.2)]">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Synitrix is a cutting-edge technology company dedicated to transforming businesses
              through innovative digital solutions. Founded in 2015, we've grown from a small team
              of passionate developers into a full-service digital agency serving clients
              worldwide.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Our mission is to bridge the gap between technology and business objectives,
              delivering solutions that not only meet technical requirements but also drive real
              business value. We combine creative design thinking with robust engineering
              practices to create digital experiences that users love.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise spanning web development, mobile applications, graphic design, and
              UI/UX, we offer comprehensive services that cover every aspect of your digital
              journey. Our commitment to excellence and client satisfaction has made us a trusted
              partner for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-[#39ff14]/30 text-center hover:border-[#ffff00] transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]"
              >
                <div className="text-[#39ff14] flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#ffff00] mb-4 drop-shadow-[0_0_15px_#ffff00]">
            Leadership Team
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Meet the visionaries driving Synitrix forward
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-[#39ff14]/30 hover:border-[#39ff14] transition-all duration-300 hover:shadow-[0_0_40px_rgba(57,255,20,0.3)]"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#39ff14] mb-1">{member.name}</h3>
                  <p className="text-[#ffff00] font-semibold">{member.role}</p>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{member.description}</p>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm mb-3">Key Achievements:</h4>
                  {member.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#39ff14] rounded-full mt-2"></div>
                      <p className="text-gray-400 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#ffff00] mb-4 drop-shadow-[0_0_15px_#ffff00]">
            Client Testimonials
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-[#39ff14]/30 hover:border-[#ffff00] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,0,0.3)]"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#ffff00] text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.client}</p>
                  <p className="text-[#39ff14] text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { servicesData } from '../data/portfolioData';

export default function ExpertiseSection() {
  return (
    <section id="services" className="section expertise">
      <div className="section-heading">
        <p className="eyebrow">02 / Our expertise</p>
        <h2>
          Capabilities for the <em>complex.</em>
        </h2>
        <p>
          One integrated team, each discipline working together to move an idea all the way through.
        </p>
      </div>
      <div className="service-cards">
        {servicesData.map(({ title, icon: Icon, description, skills }, i) => (
          <motion.article
            className="service-card"
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <div className="service-top">
              <span>0{i + 1}</span>
              <Icon size={20} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="skill-tags">
              {skills.map((s) => (
                <i key={s}>{s}</i>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

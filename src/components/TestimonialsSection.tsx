import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { reviewsData } from '../data/portfolioData';

interface TestimonialsSectionProps {
  review: number;
  setReview: (index: number | ((prev: number) => number)) => void;
}

export default function TestimonialsSection({ review, setReview }: TestimonialsSectionProps) {
  const activeReview = reviewsData[review];

  return (
    <section className="section testimonials">
      <div className="testimonials-head">
        <p className="eyebrow">04 / In their words</p>
        <h2>
          Trusted by people who <em>care.</em>
        </h2>
        <div className="review-controls">
          <button
            onClick={() =>
              setReview((r) => (r + reviewsData.length - 1) % reviewsData.length)
            }
          >
            <ChevronLeft size={18} />
          </button>
          <span>
            0{review + 1} / 0{reviewsData.length}
          </span>
          <button onClick={() => setReview((r) => (r + 1) % reviewsData.length)}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="review-stage">
        <AnimatePresence mode="wait">
          <motion.article
            key={review}
            className="review-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.38 }}
          >
            <div className="stars">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} fill="currentColor" size={16} />
              ))}
            </div>
            <blockquote>“{activeReview.quote}”</blockquote>
            <div className="review-person">
              <div>
                {activeReview.name
                  .split(' ')
                  .map((x) => x[0])
                  .join('')}
              </div>
              <span>
                <b>{activeReview.name}</b>
                <br />
                {activeReview.role}
              </span>
              <em>{activeReview.project}</em>
            </div>
          </motion.article>
        </AnimatePresence>
        <div className="review-ghost">
          <span>
            Our clients value clear thinking, thoughtful delivery, and a partner who stays involved.
          </span>
        </div>
      </div>
    </section>
  );
}

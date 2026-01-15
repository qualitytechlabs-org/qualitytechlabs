import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="service-cta">
      <div className="service-cta__bg">
      </div>
      <div className="service-shell service-cta__content">
        <p className="service-kicker">Launch your product with Quality Tech Labs</p>
        <h3 className="service-section__title service-cta__title">
        We build scalable Websites, Mobile Apps, and AI solutions for startups and growing businesses — fast, clean, and production-ready.
          {/* <br />
          Build your Website / App / AI solution with Quality Tech Labs. */}
        </h3>
        <button className="service-btn service-btn--primary service-cta__btn">Start a Project</button>
      </div>
    </section>
  );
};

export default CtaSection;

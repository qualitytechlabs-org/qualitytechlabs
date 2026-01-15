import React from 'react';
import { expertiseCards, processSteps } from '../data';
import cardIcon from '../assets/pages/service/card_icon.png';
const ExpertiseSection: React.FC = () => {
  return (
    <section className="service-expertise">
      <div className="service-shell">
        <div className="service-expertise__header">
          <div>
            <p className="service-kicker">Our Expertise</p>
            <h3 className="service-section__title">Solutions Backed by Experience</h3>
          </div>
          <div className="service-expertise__badge">Quality-first delivery across every platform</div>
        </div>

        <div className="service-expertise__cards">
          {expertiseCards.map(item => (
            <div key={item.title} className="service-expertise__card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="service-process">
          {processSteps.map(step => (
            <div key={step.title} className="service-process__card">
              <div className="service-process__icon">
                <img src={cardIcon} alt="" />
              </div>
              <h5>{step.title}</h5>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

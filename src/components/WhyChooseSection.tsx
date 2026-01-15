import React from 'react';
import { reasons } from '../data';
// import chatIcon from '../../../assets/pages/service/chat_icon.png';
import chatIcon from '../assets/pages/service/chat_icon.png';
const WhyChooseSection: React.FC = () => {
  return (
    <section className="service-why">
      <div className="service-shell">
        <div className="service-why__header">
          <h3 className="service-section__title">Why Choose Our Mobile Application Development Service?</h3>
          <p className="service-body service-body--muted">
            From first sketches to post-launch support, we bring strategy, design, and engineering together.
          </p>
        </div>

        <div className="service-why__grid">
          {reasons.map(item => (
            <div key={item.title} className="service-why__card">
              <div className="service-why__icon">
                <img src={chatIcon} alt="" />
              </div>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

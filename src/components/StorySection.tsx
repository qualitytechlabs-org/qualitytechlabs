import React from 'react';
// import storyImage from '../../../assets/pages/service/story_sec_image.png';
// import chatIcon from '../../../assets/pages/service/chat_icon.png';
import storyImage from '../assets/pages/service/story_sec_image.png';
import chatIcon from '../assets/pages/service/chat_icon.png';
const StorySection: React.FC = () => {
  return (
    <section className="service-story">
      <div className="service-shell service-story__grid">
        <div className="service-story__copy">
          <p className="service-kicker service-story__kicker">Our story and vision</p>
          <h2 className="service-story__title">
            We craft bold brands and build scalable solutions for growing startups.
          </h2>
          <p className="service-story__body">
            We may be new, but our passion runs deep. From branding to digital campaigns, we create
            meaningful experiences that help businesses grow.
          </p>

          <div className="service-story__highlights">
            <div className="service-story__highlight service-story__highlight--accent">
              Professional developer and designer
              <span className="service-story__underline" aria-hidden />
            </div>
            <div className="service-story__rule" aria-hidden />
            <div className="service-story__highlight">Timely project delivery service</div>
          </div>

          <button className="service-btn service-btn--outline service-story__cta">
            <img src={chatIcon} alt="" className="service-btn__icon" />
            Contact with an Expert
          </button>
        </div>

        <div className="service-story__visual">
          <div className="service-story__image-wrap">
            <img src={storyImage} alt="Abstract portrait" />
            <div className="service-story__image-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

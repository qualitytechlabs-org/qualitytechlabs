import React, { useEffect, useState } from 'react';
import backgroundOne from '../assets/pages/service/background_banner1.png';
import backgroundTwo from '../assets/pages/service/background_banner2.png';
import backgroundThree from '../assets/pages/service/background_banner3.png';
import heroImage from '../assets/pages/service/start_a_project_bg_img.png';
import heroMask from '../assets/pages/service/start_a_project_bg_img_mask.png';
import btn from '../assets/pages/service/btn_arrow.png'
const SLIDES = [
  {
    id: 'mobile',
    overlay: 'Mobile Application',
    title: 'Mobile Application',
    subtitle: "Cutting-Edge Mobile App Development: Transforming\n ideas into reality.",
    background: backgroundOne,
  },
  {
    id: 'web',
    overlay: 'Web Application',
    title: 'Web Application',
    subtitle: "Web Application Development: Building robust,\n scalable solutions.",
    background: backgroundTwo,
  },
  {
    id: 'backend',
    overlay: 'Backend Service',
    title: 'Backend Service',
    subtitle: "Robust backend service development: Powering your\n digital solutions.",
    background: backgroundThree,
  },
];
const SLIDE_DURATION = 6500;

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = SLIDES[activeIndex];

  return (
    <section className="service-hero" style={{ backgroundImage: `url(${currentSlide.background})` }}>
      <div className="service-hero__overlay">{currentSlide.overlay}</div>
      <div className="service-shell service-hero__inner">
        <div className="service-hero__image-frame">
          <img src={heroImage} alt={`${currentSlide.title} showcase`} className="service-hero__image" />
          <div className="service-hero__image-gradient" />
          <img src={heroMask} alt="quality tech labs" aria-hidden className="service-hero__image-mask" />

          <div className="service-hero__content">
            <p className="service-hero__subtitle">{currentSlide.subtitle}</p>
            <div className="service-hero__cta-row">
              <button className="service-btn service-btn--primary">
                <img src={btn}  className="btn__image"  alt="quality tech labs"/>
                Start a Project</button>
            </div>
          </div>
        </div>

        <div className="service-hero__controls" aria-label="Service highlights">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              className={`service-hero__dot ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${slide.title}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

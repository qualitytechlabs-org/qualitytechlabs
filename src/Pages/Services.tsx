import React from 'react';
import '../css/Services.css';
import Hero from '../components/Hero';
import StorySection from '../components/StorySection';
import ExpertiseSection from '../components/ExpertiseSection';
import WhyChooseSection from '../components/WhyChooseSection';
import FaqSection from '../components/FaqSection';
import ServicesGrid from '../components/ServicesGrid';
import CtaSection from '../components/CtaSection';
import ContactStrip from '../components/ContactStrip';

const Services: React.FC = () => {
  return (
    <div className="service-page">
      <Hero />
      <StorySection />
      <ExpertiseSection />
      <WhyChooseSection />
      <FaqSection />
      <ServicesGrid />
      <CtaSection />
      <ContactStrip />
    </div>
  );
};

export default Services;

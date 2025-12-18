import React from 'react';
import Hero from '../components/Common/Hero';
import BottomCaption from '../components/Common/BottomCaption';
import OurServiceSection from '../components/OurServiceSection';
import BuildWaysComparison from '../components/BuildWaysComparisonSection';
import FooterMinimal from '../components/FooterMinimal';
import OurProcess from '../components/OurProcess';
const Home: React.FC = () => {
  return (
    <div >
      <Hero />
      <section style={{ marginTop: '-50px' }}>
        <BottomCaption />
      </section>
      <OurServiceSection/>
      <BuildWaysComparison/>
      <OurProcess/>
      <FooterMinimal/>
    </div>
  );
};

export default Home;

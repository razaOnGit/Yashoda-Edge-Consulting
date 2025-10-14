import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Industries from './Industries';
import WhatsAppButton from './WhatsAppButton';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
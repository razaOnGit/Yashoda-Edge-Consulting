import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Industries from './Industries';
import WhyChooseUs from './WhyChooseUs';
import StatisticsCounter from './StatisticsCounter';
import Team from './Team';
import ContactForm from './ContactForm';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <WhyChooseUs />
      <StatisticsCounter />
      <Team />
      <ContactForm />
   
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
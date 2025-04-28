import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Preloader from '../components/Preloader';  // Import the Preloader component
import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs.jsx';
import Skills from '../components/Skills';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle page load completion
  const handleLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    // Initialize AOS after the preloader has finished
    if (isLoaded) {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    }
  }, [isLoaded]);

  return (
    <div>
      {/* Show preloader until content is ready */}
      <Preloader onLoaded={handleLoaded} />

      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Skills />
        <Services />
        <CallToAction />
        <Team />
        <Testimonial />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;



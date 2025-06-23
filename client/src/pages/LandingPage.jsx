import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

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
    <>
      <Helmet>
        <title>Medicdiet Clinic | Nutrition & Diet Experts</title>
        <link rel="canonical" href="https://www.medicdietclinic.com/" />
        <meta name="description" content="Medicdiet Clinic offers expert nutrition and diet consultation for a healthier lifestyle. Book your appointment today!" />
        <meta property="og:title" content="Medicdiet Clinic | Nutrition & Diet Experts" />
        <meta property="og:description" content="Medicdiet Clinic offers expert nutrition and diet consultation for a healthier lifestyle. Book your appointment today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.medicdietclinic.com/" />
        <meta property="og:image" content="/images/Logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medicdiet Clinic | Nutrition & Diet Experts" />
        <meta name="twitter:description" content="Medicdiet Clinic offers expert nutrition and diet consultation for a healthier lifestyle. Book your appointment today!" />
        <meta name="twitter:image" content="/images/Logo.jpg" />
      </Helmet>
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
    </>
  );
};

export default LandingPage;



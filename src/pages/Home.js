// libs
import React from 'react';
// components
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import ServiceSection from '../components/ServiceSection';
// import TestimonialsSection from '../components/TestimonialsSection';

/**
 * Home
 */
const Home = () => (
  <div>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <ProjectSection />
    {/* <TestimonialsSection /> */}
    <ContactBanner />
  </div>
);

export default Home;

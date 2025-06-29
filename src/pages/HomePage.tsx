import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Technologies from '../components/Technologies';
import Team from '../components/Team';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackgroundEffects from '../components/BackgroundEffects';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-supabase-darker text-white overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Technologies />
        <Team />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
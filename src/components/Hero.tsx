import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Zap, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const Hero = () => {
  const { language, isRTL } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center mesh-bg pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-custom-teal to-custom-green bg-clip-text text-transparent glow-text">
              {t.heroTitle}
            </span>
            <br />
            <span className="text-white">{t.heroSubtitle}</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t.heroDescription}
          </motion.p>

          <motion.div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className={`glass px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-custom-teal to-custom-green hover:from-custom-green hover:to-custom-teal transition-all duration-300 flex items-center justify-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Get started with AI consultation services"
            >
              <span>{t.getStarted}</span>
              <ArrowRight size={20} className={isRTL ? 'rotate-180' : ''} />
            </motion.a>
            
            <motion.a
              href="#services"
              className="glass px-8 py-4 rounded-lg font-semibold text-white border border-custom-green hover:bg-custom-green/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Learn more about our AI services"
            >
              {t.learnMore}
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="glass p-6 rounded-lg text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-custom-teal to-custom-green rounded-lg mx-auto mb-4">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{t.aiImplementation}</h3>
              <p className="text-gray-400 text-sm">{t.aiImplementationDesc}</p>
            </div>
            
            <div className="glass p-6 rounded-lg text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-custom-teal to-custom-green rounded-lg mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{t.performanceOptimization}</h3>
              <p className="text-gray-400 text-sm">{t.performanceOptimizationDesc}</p>
            </div>
            
            <div className="glass p-6 rounded-lg text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-custom-teal to-custom-green rounded-lg mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{t.enterpriseSecurity}</h3>
              <p className="text-gray-400 text-sm">{t.enterpriseSecurityDesc}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Shield, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const About = () => {
  const { language, isRTL } = useLanguage();
  const t = useTranslation(language);

  const values = [
    {
      icon: Zap,
      title: t.innovationFirst,
      description: t.innovationFirstDesc
    },
    {
      icon: Target,
      title: t.resultsDriven,
      description: t.resultsDrivenDesc
    },
    {
      icon: Shield,
      title: t.securityPrivacy,
      description: t.securityPrivacyDesc
    },
    {
      icon: Rocket,
      title: t.scalableSolutions,
      description: t.scalableSolutionsDesc
    }
  ];

  return (
    <section id="about" className="py-20 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-custom-teal to-custom-green bg-clip-text text-transparent">
              {t.aboutCyberbeam}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.aboutDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-lg"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">{t.ourMission}</h3>
            <p className="text-lg text-gray-300 mb-6">
              {t.missionDescription}
            </p>
            <p className="text-lg text-gray-300">
              {t.missionDescription2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-lg"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">{t.whatSetsUsApart}</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-custom-green rounded-full mt-2"></div>
                <span>{t.deepExpertiseAiMl}</span>
              </li>
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-custom-green rounded-full mt-2"></div>
                <span>{t.provenTrackRecordScale}</span>
              </li>
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-custom-green rounded-full mt-2"></div>
                <span>{t.endToEndService}</span>
              </li>
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-custom-green rounded-full mt-2"></div>
                <span>{t.focusSecurityPrivacy}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-lg text-center hover:border-custom-green/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-custom-teal to-custom-green rounded-lg mb-6 mx-auto group-hover:from-custom-green group-hover:to-custom-teal transition-all duration-300">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              
              <h4 className="text-xl font-bold mb-4 text-white">{value.title}</h4>
              <p className="text-gray-300 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-6 text-white">{t.readyToTransform}</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              {t.readyToTransformDesc}
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-custom-teal to-custom-green text-white font-semibold rounded-lg hover:from-custom-green hover:to-custom-teal transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Start your AI transformation journey"
            >
              {t.startAiJourney}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
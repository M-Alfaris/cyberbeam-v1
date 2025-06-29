import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const Team = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const teamHighlights = [
    {
      icon: Users,
      title: t.bigTechVeterans,
      description: t.bigTechVeteransDesc,
      stats: '15+ Years Average Experience'
    },
    {
      icon: Award,
      title: t.aiSpecialists,
      description: t.aiSpecialistsDesc,
      stats: '50+ AI Projects Delivered'
    },
    {
      icon: Target,
      title: t.technicalLeaders,
      description: t.technicalLeadersDesc,
      stats: '100+ Enterprise Clients'
    },
    {
      icon: Lightbulb,
      title: t.innovationFocused,
      description: t.innovationFocusedDesc,
      stats: '24/7 Research & Development'
    }
  ];

  const expertise = [
    'Senior Software Development Managers',
    'Technical Program Managers (TPMs)',
    'Network Engineering Experts',
    'AI/ML Engineers',
    'System Architecture Specialists',
    'Cloud Infrastructure Engineers',
    'Data Scientists',
    'DevOps & Security Engineers'
  ];

  return (
    <section id="team" className="py-20 bg-supabase-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-custom-teal to-custom-green bg-clip-text text-transparent">
              {t.worldClassTeam}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.teamDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-lg text-center hover:border-custom-green/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-custom-teal to-custom-green rounded-lg mb-6 mx-auto group-hover:from-custom-green group-hover:to-custom-teal transition-all duration-300">
                <highlight.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">{highlight.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{highlight.description}</p>
              <div className="text-custom-green font-semibold text-sm">{highlight.stats}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass p-8 rounded-lg"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-white">{t.ourExpertise}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertise.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-lg hover:bg-custom-green/10 transition-all duration-200"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-custom-teal to-custom-green rounded-full"></div>
                <span className="text-gray-300 text-sm">{role}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4 text-white">{t.whyChooseTeam}</h3>
            <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
              {t.whyChooseTeamDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-3 h-3 bg-custom-green rounded-full"></div>
                <span className="text-gray-300">{t.provenTrackRecord}</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-3 h-3 bg-custom-green rounded-full"></div>
                <span className="text-gray-300">{t.industryRecognition}</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-3 h-3 bg-custom-green rounded-full"></div>
                <span className="text-gray-300">{t.continuousInnovation}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
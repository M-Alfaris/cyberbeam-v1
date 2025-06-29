import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const Footer = () => {
  const { language, isRTL } = useLanguage();
  const t = useTranslation(language);

  const quickLinks = [
    { name: t.home, href: '#home' },
    { name: t.services, href: '#services' },
    { name: t.technologies, href: '#technologies' },
    { name: t.team, href: '#team' },
    { name: t.about, href: '#about' },
    { name: t.contact, href: '#contact' }
  ];

  const services = [
    t.aiConsultation,
    t.cloudAiSolutions,
    t.aiAutomation,
    t.dataEngineering,
    t.aiSecurity,
    t.performanceMonitoring
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/M-Alfaris', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/al-faris', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/muthanna_alfars', label: 'Twitter' }
  ];

  return (
    <footer className="bg-supabase-darker border-t border-custom-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-span-2"
          >
            <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''} mb-4`}>
              <Zap className="h-8 w-8 text-custom-green glow-text" />
              <span className="text-2xl font-bold bg-gradient-to-r from-custom-teal to-custom-green bg-clip-text text-transparent">
                {t.heroTitle}
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t.footerDescription}
            </p>
            <div className="space-y-2">
              <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''} text-gray-300`}>
                <Mail className="h-4 w-4 text-custom-green" />
                <span className="ltr-content">{t.email_address}</span>
              </div>
              <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''} text-gray-300`}>
                <Phone className="h-4 w-4 text-custom-green" />
                <span className="ltr-content">{t.phone_number}</span>
              </div>
              <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''} text-gray-300`}>
                <MapPin className="h-4 w-4 text-custom-green" />
                <span>{t.sanFrancisco}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-custom-green transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">{t.services}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-custom-green/20 flex flex-col md:flex-row justify-between items-center"
        >
          <div className={`flex space-x-6 ${isRTL ? 'space-x-reverse' : ''} mb-4 md:mb-0`}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-gray-300 hover:text-custom-green transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
          <div className="text-gray-300 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} {t.heroTitle}. {t.allRightsReserved}</p>
            <p className="mt-1">{t.builtWithTechnology}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
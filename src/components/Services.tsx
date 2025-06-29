import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Cog, 
  Database, 
  Shield, 
  TrendingUp,
  Workflow,
  MessageSquare,
  Network
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const Services = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const services = [
    {
      icon: Brain,
      title: t.aiConsultation,
      description: t.aiConsultationDesc,
      features: ['Strategy Development', 'Technical Assessment', 'ROI Analysis', 'Risk Management']
    },
    {
      icon: Cloud,
      title: t.cloudAiSolutions,
      description: t.cloudAiSolutionsDesc,
      features: ['Multi-cloud Strategy', 'Auto-scaling', 'Cost Optimization', 'Security Compliance']
    },
    {
      icon: Workflow,
      title: t.aiAutomation,
      description: t.aiAutomationDesc,
      features: ['Process Optimization', 'Workflow Automation', 'Data Integration', 'Real-time Analytics']
    },
    {
      icon: Database,
      title: t.dataEngineering,
      description: t.dataEngineeringDesc,
      features: ['Data Architecture', 'ETL Pipelines', 'Real-time Processing', 'Data Governance']
    },
    {
      icon: Shield,
      title: t.aiSecurity,
      description: t.aiSecurityDesc,
      features: ['Security Audits', 'Privacy Compliance', 'Access Control', 'Threat Detection']
    },
    {
      icon: TrendingUp,
      title: t.performanceMonitoring,
      description: t.performanceMonitoringDesc,
      features: ['Performance Metrics', 'Monitoring Dashboards', 'Alerting Systems', 'Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 bg-supabase-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-custom-teal to-custom-green bg-clip-text text-transparent">
              {t.ourServices}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.servicesDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-lg hover:border-custom-green/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-custom-teal to-custom-green rounded-lg mb-6 group-hover:from-custom-green group-hover:to-custom-teal transition-all duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-custom-green rounded-full mr-3 rtl:mr-0 rtl:ml-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.a
                href="#contact"
                className="inline-block mt-6 text-custom-green hover:text-custom-teal transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
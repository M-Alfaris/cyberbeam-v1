import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Cpu, Network, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const Technologies = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const techCategories = [
    {
      icon: Code,
      title: t.programmingLanguages,
      color: 'from-custom-teal to-custom-green',
      technologies: ['Python', 'Golang', 'Ruby', 'TypeScript', 'JavaScript', 'Rust']
    },
    {
      icon: Cpu,
      title: t.aiMlFrameworks,
      color: 'from-custom-green to-custom-teal',
      technologies: ['TensorFlow', 'PyTorch', 'Langchain', 'CrewAI', 'Hugging Face', 'OpenAI']
    },
    {
      icon: Database,
      title: t.dataAnalytics,
      color: 'from-custom-teal to-custom-green',
      technologies: ['Apache Kafka', 'Elasticsearch', 'MongoDB', 'PostgreSQL', 'Redis', 'Spark']
    },
    {
      icon: Cloud,
      title: t.cloudPlatforms,
      color: 'from-custom-green to-custom-teal',
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      icon: Network,
      title: t.aiToolsPlatforms,
      color: 'from-custom-teal to-custom-green',
      technologies: ['n8n', 'Flowise', 'Dify', 'MCP', 'A2A', 'Zapier']
    },
    {
      icon: Shield,
      title: t.securityMonitoring,
      color: 'from-custom-green to-custom-teal',
      technologies: ['Prometheus', 'Grafana', 'Vault', 'Istio', 'Falco', 'OWASP']
    }
  ];

  return (
    <section id="technologies" className="py-20 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-custom-teal to-custom-green bg-clip-text text-transparent">
              {t.technologiesTitle}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.technologiesDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-lg hover:border-custom-green/50 transition-all duration-300 group"
            >
              <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg mb-6 group-hover:animate-pulse`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-supabase-darker/50 border border-custom-green/30 rounded-full text-sm text-custom-green hover:bg-custom-green/10 transition-all duration-200 cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 glass p-8 rounded-lg text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">{t.enterpriseGradeSolutions}</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
            {t.enterpriseGradeDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-custom-green">
              <Shield className="h-5 w-5" />
              <span>{t.securityFirst}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-custom-green">
              <Network className="h-5 w-5" />
              <span>{t.scalableArchitecture}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-custom-green">
              <Cpu className="h-5 w-5" />
              <span>{t.highPerformance}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
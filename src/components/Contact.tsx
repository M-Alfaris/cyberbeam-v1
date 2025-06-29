import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const Contact = () => {
  const { language, isRTL } = useLanguage();
  const t = useTranslation(language);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Replace this with your actual webhook URL
  const WEBHOOK_URL = 'https://chipmunk-growing-cricket.ngrok-free.app/webhook-test/997eea60-6b5a-4220-8f02-2fb9570fa700';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'contact-form'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Success
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to send message. Please try again.');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitError(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t.email,
      value: t.email_address,
      href: `mailto:${t.email_address}`,
      isLTR: true // Email should always be LTR
    },
    {
      icon: Phone,
      title: t.phone,
      value: t.phone_number,
      href: `tel:${t.phone_number}`,
      isLTR: true // Phone number should always be LTR
    },
    {
      icon: MapPin,
      title: t.location,
      value: t.sanFrancisco,
      href: '#',
      isLTR: false // Location can follow text direction
    }
  ];

  return (
    <section id="contact" className="py-20 bg-supabase-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-custom-teal to-custom-green bg-clip-text text-transparent">
              {t.getInTouch}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.contactDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">{t.sendMessage}</h3>
            
            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-3"
              >
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-green-300">Message sent successfully! We'll get back to you soon.</span>
              </motion.div>
            )}

            {/* Error Message */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-3"
              >
                <AlertCircle className="h-5 w-5 text-red-400" />
                <span className="text-red-300">{submitError}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.name} {t.required}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-supabase-darker/50 border border-custom-green/30 rounded-lg focus:outline-none focus:border-custom-green text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={t.yourFullName}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.email} {t.required}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-supabase-darker/50 border border-custom-green/30 rounded-lg focus:outline-none focus:border-custom-green text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed ltr-content"
                  placeholder={t.yourEmail}
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-supabase-darker/50 border border-custom-green/30 rounded-lg focus:outline-none focus:border-custom-green text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={t.yourCompany}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.message} {t.required}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-supabase-darker/50 border border-custom-green/30 rounded-lg focus:outline-none focus:border-custom-green text-white placeholder-gray-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={t.projectRequirements}
                />
              </div>
              
              <motion.button
                type="submit"
                className={`w-full flex items-center justify-center space-x-2 ${isRTL ? 'space-x-reverse' : ''} px-6 py-3 bg-gradient-to-r from-custom-teal to-custom-green text-white font-semibold rounded-lg hover:from-custom-green hover:to-custom-teal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>{t.messageSent}</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t.sendMessage}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">{t.contactInformation}</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className={`flex items-start space-x-4 ${isRTL ? 'space-x-reverse' : ''} p-4 rounded-lg hover:bg-custom-green/10 transition-all duration-200 group`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-custom-teal to-custom-green rounded-lg group-hover:from-custom-green group-hover:to-custom-teal transition-all duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className={`text-gray-300 ${info.isLTR ? 'ltr-content' : ''}`}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">{t.whyWorkWithUs}</h3>
              <ul className="space-y-4 text-gray-300">
                <li className={`flex items-start space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-custom-green rounded-full mt-2"></div>
                  <span>{t.freeConsultation}</span>
                </li>
                <li className={`flex items-start space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-custom-green rounded-full mt-2"></div>
                  <span>{t.transparentPricing}</span>
                </li>
                <li className={`flex items-start space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-custom-green rounded-full mt-2"></div>
                  <span>{t.dedicatedManagers}</span>
                </li>
                <li className={`flex items-start space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-custom-green rounded-full mt-2"></div>
                  <span>{t.ongoingSupport}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { createContext, useContext, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract language from URL path
  const getLanguageFromPath = (): Language => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const langFromPath = pathSegments[0];
    return (langFromPath === 'ar' || langFromPath === 'en') ? langFromPath : 'en';
  };

  const language = getLanguageFromPath();
  const isRTL = language === 'ar';

  const setLanguage = (lang: Language) => {
    // Navigate to the new language route
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);
    
    // Replace the language segment or add it
    if (pathSegments.length > 0 && (pathSegments[0] === 'en' || pathSegments[0] === 'ar')) {
      pathSegments[0] = lang;
    } else {
      pathSegments.unshift(lang);
    }
    
    const newPath = '/' + pathSegments.join('/');
    navigate(newPath, { replace: true });
  };

  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Add RTL class to body for additional styling
    if (isRTL) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }

    // Update page title based on language
    const titles = {
      en: 'Cyberbeam | AI Consultation & Implementation Services',
      ar: 'سايبربيم | خدمات استشارات وتنفيذ الذكاء الاصطناعي'
    };
    document.title = titles[language];

    // Update meta description
    const descriptions = {
      en: 'Leading AI consultation and implementation company. Transform your business with cutting-edge artificial intelligence technology from industry veterans.',
      ar: 'شركة رائدة في استشارات وتنفيذ الذكاء الاصطناعي. حوّل عملك بتكنولوجيا الذكاء الاصطناعي المتطورة من قدامى المحاربين في الصناعة.'
    };
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[language]);
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', titles[language]);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', descriptions[language]);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const baseUrl = 'https://cyberbeam.ie';
      canonical.setAttribute('href', `${baseUrl}/${language}`);
    }

    // Update hreflang
    const currentUrl = window.location.origin;
    
    // Remove existing hreflang links
    const existingHreflangs = document.querySelectorAll('link[hreflang]');
    existingHreflangs.forEach(link => link.remove());

    // Add new hreflang links
    const hreflangs = [
      { lang: 'en', url: `${currentUrl}/en` },
      { lang: 'ar', url: `${currentUrl}/ar` },
      { lang: 'x-default', url: `${currentUrl}/en` }
    ];

    hreflangs.forEach(({ lang, url }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = url;
      document.head.appendChild(link);
    });

  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};
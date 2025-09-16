import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'dial.112': 'Dial 112',
    'citizen.portal': 'Citizen Portal',
    'e.office': 'E-Office',
    'nic.email': 'NIC Email',
    'sss': 'SSS',
    'skip.content': 'Skip to Content',
    'font.size': 'Font Size',
    'high.contrast': 'High Contrast',
    'light.mode': 'Light',
    'dark.mode': 'Dark',
    'language': 'Language',
    'marathi': 'मराठी',
    'english': 'English',
    
    // Department Info
    'dept.name.marathi': 'पोलीस दळणवळण व माहिती तंत्रज्ञान विभाग',
    'dept.name.english': 'Police Communication and Information Technology Department',
    'dept.subtitle': 'Maharashtra State Official Website',
    
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.citizens': "Citizen's Corner",
    'nav.police': 'Police Corner',
    'nav.tenders': 'Tenders',
    'nav.recruitment': 'Recruitment',
    'nav.contact': 'Contact Us',
    'nav.gallery': 'Photo Gallery',
    
    // Hero Section
    'police.helpline': 'Police Helpline',
    'medical.helpline': 'Medical Emergency',
    'women.safety': 'Women Safety Helpline',
    'welcome.title': 'Welcome to Maharashtra Police IT Department',
    'welcome.message': 'Committed to leveraging cutting-edge technology for enhanced public safety and efficient police operations across Maharashtra State.',
    'director.desk': "From Director's Desk",
    'read.more': 'Read More',
    
    // Director Info
    'director.name': 'Shri Rajesh Kumar IPS',
    'director.rank': 'Director',
    'director.designation': 'Police Communication & IT Department',
    
    // Government Updates
    'govt.updates': 'Government Updates',
    'bulletins': 'Bulletins / Orders / Instructions',
    'tenders.section': 'Tenders',
    'view.all': 'View All',
    
    // Events
    'latest.events': 'Latest Events',
    'photo.gallery': 'Photo Gallery',
    'view.all.events': 'View All Events',
    'view.gallery': 'View Gallery',
    
    // Footer
    'quick.links': 'Quick Links',
    'important.links': 'Important Links',
    'contact.info': 'Contact Information',
    'visitor.stats': 'Visitor Statistics',
    'address': 'Address',
    'phone': 'Phone',
    'email': 'Email',
    'copyright': '© 2024 Police Communication & IT Department, Maharashtra State. All rights reserved.',
    'developed.by': 'Designed & Developed by Demerg Systems India',
    
    // Helpline
    'emergency.helpline': 'Emergency Helplines',
    'police.100': 'Police - 100/112',
    'medical.108': 'Medical - 108',
    'women.103': 'Women Safety - 103/1091',
    'metro.helpline': 'Mumbai Metro',
    'rest.helpline': 'Rest of Maharashtra',
  },
  mr: {
    // Header
    'dial.112': 'डायल १११',
    'citizen.portal': 'नागरिक पोर्टल',
    'e.office': 'ई-ऑफिस',
    'nic.email': 'एनआयसी ईमेल',
    'sss': 'एसएसएस',
    'skip.content': 'मुख्य मजकुराकडे जा',
    'font.size': 'अक्षराचा आकार',
    'high.contrast': 'हाय कॉन्ट्रास्ट',
    'light.mode': 'उजळा',
    'dark.mode': 'गडद',
    'language': 'भाषा',
    'marathi': 'मराठी',
    'english': 'English',
    
    // Department Info
    'dept.name.marathi': 'पोलीस दळणवळण व माहिती तंत्रज्ञान विभाग',
    'dept.name.english': 'Police Communication and Information Technology Department',
    'dept.subtitle': 'महाराष्ट्र राज्य अधिकृत संकेतस्थळ',
    
    // Navigation  
    'nav.home': 'मुख्यपृष्ठ',
    'nav.about': 'आमच्याबद्दल',
    'nav.citizens': 'नागरिकांचे कोपरे',
    'nav.police': 'पोलीस कोपरे',
    'nav.tenders': 'निविदा',
    'nav.recruitment': 'भरती',
    'nav.contact': 'संपर्क',
    'nav.gallery': 'फोटो गॅलरी',
    
    // Hero Section
    'police.helpline': 'पोलीस हेल्पलाइन',
    'medical.helpline': 'वैद्यकीय आणीबाणी',
    'women.safety': 'महिला सुरक्षा हेल्पलाइन',
    'welcome.title': 'महाराष्ट्र पोलीस आयटी विभागात आपले स्वागत',
    'welcome.message': 'महाराष्ट्र राज्यभर वर्धित सार्वजनिक सुरक्षा आणि कार्यक्षम पोलीस कामकाजासाठी अत्याधुनिक तंत्रज्ञानाचा वापर करण्यास वचनबद्ध.',
    'director.desk': 'संचालकांच्या मेजावरून',
    'read.more': 'अधिक वाचा',
    
    // Director Info
    'director.name': 'श्री राजेश कुमार आयपीएस',
    'director.rank': 'संचालक',
    'director.designation': 'पोलीस दळणवळण व आयटी विभाग',
    
    // Government Updates
    'govt.updates': 'सरकारी अपडेट्स',
    'bulletins': 'बुलेटिन / आदेश / सूचना',
    'tenders.section': 'निविदा',
    'view.all': 'सर्व पहा',
    
    // Events
    'latest.events': 'ताज्या घटना',
    'photo.gallery': 'फोटो गॅलरी',
    'view.all.events': 'सर्व कार्यक्रम पहा',
    'view.gallery': 'गॅलरी पहा',
    
    // Footer
    'quick.links': 'द्रुत दुवे',
    'important.links': 'महत्वाचे दुवे',
    'contact.info': 'संपर्क माहिती',
    'visitor.stats': 'भेटकर्ता आकडेवारी',
    'address': 'पत्ता',
    'phone': 'फोन',
    'email': 'ईमेल',
    'copyright': '© २०२४ पोलीस दळणवळण व आयटी विभाग, महाराष्ट्र राज्य. सर्व हक्क राखीव.',
    'developed.by': 'डिझाइन आणि डेवलप केले - डेमर्ग सिस्टम्स इंडिया',
    
    // Helpline
    'emergency.helpline': 'आणीबाणी हेल्पलाइन',
    'police.100': 'पोलीस - १००/१११',
    'medical.108': 'वैद्यकीय - १०८',
    'women.103': 'महिला सुरक्षा - १०३/१०९१',
    'metro.helpline': 'मुंबई मेट्रो',
    'rest.helpline': 'उर्वरित महाराष्ट्र',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div lang={language === 'mr' ? 'mr' : 'en'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
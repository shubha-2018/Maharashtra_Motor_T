import React, { useState } from 'react';
import { Search, Menu, X, Phone, Globe, Eye, Sun, Moon, Contrast } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
// Replace with your actual image URLs
const ashokChakra = "https://via.placeholder.com/64x64?text=Ashok+Chakra";
const maharashtraEmblem = "https://via.placeholder.com/64x64?text=MH+Emblem";

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [theme, setTheme] = useState('light');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleFontSize = (size: string) => {
    setFontSize(size);
    const root = document.documentElement;
    switch (size) {
      case 'small':
        root.style.fontSize = '14px';
        break;
      case 'large':
        root.style.fontSize = '18px';
        break;
      default:
        root.style.fontSize = '16px';
    }
  };

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark', 'high-contrast');
    document.documentElement.classList.add(newTheme);
  };

  const navigationItems = [
    { key: 'nav.home', href: '#home' },
    { 
      key: 'nav.about', 
      href: '#about',
      submenu: [
        { key: 'Organization Structure', href: '#org' },
        { key: 'Vision & Mission', href: '#vision' },
        { key: 'History', href: '#history' }
      ]
    },
    { key: 'nav.citizens', href: '#citizens' },
    { key: 'nav.police', href: '#police' },
    { key: 'nav.tenders', href: '#tenders' },
    { key: 'nav.recruitment', href: '#recruitment' },
    { key: 'nav.contact', href: '#contact' },
    { key: 'nav.gallery', href: '#gallery' },
  ];

  return (
    <header className="w-full bg-background shadow-lg sticky top-0 z-50">
      {/* Utility Bar */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-between items-center text-sm">
            {/* Left - Government Links */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="nav-link text-xs hover:text-primary">
                <Phone className="w-3 h-3 inline mr-1" />
                {t('dial.112')}
              </a>
              <a href="#" className="nav-link text-xs">{t('citizen.portal')}</a>
              <a href="#" className="nav-link text-xs">{t('e.office')}</a>
              <a href="#" className="nav-link text-xs">{t('nic.email')}</a>
              <a href="#" className="nav-link text-xs">{t('sss')}</a>
            </div>

            {/* Center - Accessibility */}
            <div className="flex items-center space-x-4">
              <button className="nav-link text-xs">{t('skip.content')}</button>
              
              {/* Font Size Controls */}
              <div className="flex items-center space-x-1">
                <span className="text-xs">{t('font.size')}:</span>
                <button 
                  onClick={() => handleFontSize('small')}
                  className={cn('px-1 text-xs hover:text-primary', fontSize === 'small' && 'text-primary font-bold')}
                >
                  A-
                </button>
                <button 
                  onClick={() => handleFontSize('normal')}
                  className={cn('px-1 text-xs hover:text-primary', fontSize === 'normal' && 'text-primary font-bold')}
                >
                  A
                </button>
                <button 
                  onClick={() => handleFontSize('large')}
                  className={cn('px-1 text-xs hover:text-primary', fontSize === 'large' && 'text-primary font-bold')}
                >
                  A+
                </button>
              </div>

              {/* Theme Controls */}
              <div className="flex items-center space-x-1">
                <button 
                  onClick={() => toggleTheme('high-contrast')}
                  className={cn('p-1 rounded hover:bg-primary/10 transition-colors', theme === 'high-contrast' && 'bg-primary/20')}
                  title={t('high.contrast')}
                >
                  <Contrast className="w-3 h-3" />
                </button>
                <button 
                  onClick={() => toggleTheme('light')}
                  className={cn('p-1 rounded hover:bg-primary/10 transition-colors', theme === 'light' && 'bg-primary/20')}
                  title={t('light.mode')}
                >
                  <Sun className="w-3 h-3" />
                </button>
                <button 
                  onClick={() => toggleTheme('dark')}
                  className={cn('p-1 rounded hover:bg-primary/10 transition-colors', theme === 'dark' && 'bg-primary/20')}
                  title={t('dark.mode')}
                >
                  <Moon className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Right - Language Switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="w-3 h-3" />
              <button
                onClick={() => setLanguage('mr')}
                className={cn('text-xs hover:text-primary transition-colors', language === 'mr' && 'text-primary font-bold')}
              >
                {t('marathi')}
              </button>
              <span className="text-xs">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={cn('text-xs hover:text-primary transition-colors', language === 'en' && 'text-primary font-bold')}
              >
                {t('english')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Identity Block */}
      <div className="bg-gradient-to-r from-primary/5 to-saffron/5 border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Left - Government Symbol */}
            <div className="flex-shrink-0">
              <img src={ashokChakra} alt="Ashok Chakra" className="w-12 h-12 object-contain" />
            </div>

            {/* Center - Department Info */}
            <div className="flex-1 text-center px-4">
              <h1 className="text-lg md:text-xl font-bold text-primary leading-tight">
                {t('dept.name.marathi')}
              </h1>
              <h2 className="text-base md:text-lg font-semibold text-foreground/80 mt-1">
                {t('dept.name.english')}
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                {t('dept.subtitle')}
              </p>
            </div>

            {/* Right - Secondary Emblem */}
            <div className="flex-shrink-0">
              <img src={maharashtraEmblem} alt="Maharashtra Emblem" className="w-12 h-12 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 py-2">
              {navigationItems.map((item) => (
                <div key={item.key} className="relative group">
                  <a
                    href={item.href}
                    className="nav-link text-primary-foreground hover:text-saffron transition-colors py-2"
                  >
                    {t(item.key)}
                  </a>
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-card shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.key}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-card-foreground hover:bg-primary/10 transition-colors"
                          >
                            {subItem.key}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search & Mobile Menu */}
            <div className="flex items-center space-x-4 py-2">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-saffron">
                <Search className="w-5 h-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-primary-foreground hover:text-saffron"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-primary-hover border-t border-primary-foreground/20">
              <nav className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.key}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-primary-foreground hover:text-saffron transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(item.key)}
                    </a>
                    {item.submenu && (
                      <div className="pl-8 space-y-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.key}
                            href={subItem.href}
                            className="block px-4 py-1 text-sm text-primary-foreground/80 hover:text-saffron transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.key}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
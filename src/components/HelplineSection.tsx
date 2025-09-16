import React from 'react';
import { Phone, Heart, Shield, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const HelplineSection: React.FC = () => {
  const { t } = useLanguage();

  const helplines = [
    {
      icon: Shield,
      title: t('police.100'),
      metro: '100 / 112',
      rest: '100 / 112',
      color: 'from-primary to-primary-hover',
      textColor: 'text-white',
      bgColor: 'bg-primary',
      pulse: 'pulse-emergency',
      description: 'Police Emergency & General Help'
    },
    {
      icon: Heart,
      title: t('medical.108'),
      metro: '108',
      rest: '108',
      color: 'from-red-600 to-red-700',
      textColor: 'text-white',
      bgColor: 'bg-red-600',
      pulse: 'animate-pulse',
      description: 'Medical Emergency Services'
    },
    {
      icon: Phone,
      title: t('women.103'),
      metro: '103 / 1091',
      rest: '103 / 1091',
      color: 'from-pink-600 to-pink-700',
      textColor: 'text-white',
      bgColor: 'bg-pink-600',
      pulse: 'animate-pulse',
      description: 'Women Safety & Helpline'
    }
  ];

  const additionalHelplines = [
    { title: 'Child Helpline', number: '1098', color: 'bg-blue-600' },
    { title: 'Senior Citizen Helpline', number: '14567', color: 'bg-green-600' },
    { title: 'Road Accident Emergency', number: '1073', color: 'bg-orange-600' },
    { title: 'Fire Services', number: '101', color: 'bg-red-500' },
    { title: 'Disaster Management', number: '1077', color: 'bg-purple-600' },
    { title: 'Anti-Corruption Helpline', number: '1031', color: 'bg-yellow-600' }
  ];

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <section className="py-12 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Emergency Helplines Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertCircle className="w-8 h-8 text-red-600 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t('emergency.helpline')}
            </h2>
            <AlertCircle className="w-8 h-8 text-red-600 animate-pulse" />
          </div>
          <p className="text-muted-foreground">
            In case of emergency, dial these numbers for immediate assistance
          </p>
        </div>

        {/* Main Emergency Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {helplines.map((helpline, index) => (
            <Card 
              key={index}
              className={cn(
                'glass-card overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer border-0',
                helpline.pulse
              )}
              onClick={() => handleCall(helpline.metro.replace(/\D/g, ''))}
            >
              <div className={cn('bg-gradient-to-br', helpline.color, 'p-1')}>
                <CardContent className="p-6 text-center bg-background/90 backdrop-blur-sm">
                  <div className={cn('w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center', helpline.bgColor)}>
                    <helpline.icon className={cn('w-8 h-8', helpline.textColor)} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {helpline.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="bg-card border border-border rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">{t('metro.helpline')}</p>
                      <p className="text-2xl font-bold text-primary">{helpline.metro}</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">{t('rest.helpline')}</p>
                      <p className="text-2xl font-bold text-primary">{helpline.rest}</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    {helpline.description}
                  </p>
                  
                  <div className="mt-4 pt-2 border-t border-border">
                    <p className="text-xs text-saffron font-medium">
                      Tap to Call
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Helpline Numbers */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Other Important Helpline Numbers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalHelplines.map((helpline, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
                onClick={() => handleCall(helpline.number)}
              >
                <div className={cn('w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center', helpline.color)}>
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1 leading-tight">
                  {helpline.title}
                </h4>
                <p className="text-lg font-bold text-primary group-hover:text-primary-hover transition-colors">
                  {helpline.number}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-saffron/10 border border-saffron/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-saffron" />
              <p className="font-semibold text-foreground">Important Note:</p>
            </div>
            <p className="text-sm text-muted-foreground">
              These helpline numbers are available 24/7. For non-emergency police services, 
              you can also visit your nearest police station or use our online portal.
            </p>
          </div>
        </div>

        {/* Emergency Tips Section */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="glass-card">
            <CardContent className="p-6">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                During Emergency
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Stay calm and speak clearly
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Provide your exact location
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Describe the nature of emergency
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Follow operator's instructions
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5 text-saffron" />
                Smart Features
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full"></span>
                  SMS to 112 for speech/hearing impaired
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full"></span>
                  Location tracking for faster response
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full"></span>
                  Multi-language support available
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full"></span>
                  Integration with emergency services
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HelplineSection;
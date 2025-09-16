import React from 'react';
import { Calendar, FileText, Megaphone, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const GovernmentUpdates: React.FC = () => {
  const { t } = useLanguage();

  const bulletins = [
    {
      id: 1,
      type: 'bulletin',
      title: 'New Cybercrime Reporting Portal Launch',
      titleMr: 'नवीन सायबर क्राइम रिपोर्टिंग पोर्टल लॉन्च',
      date: '2024-01-15',
      icon: Megaphone,
      color: 'border-l-blue-500',
      badge: 'New'
    },
    {
      id: 2,
      type: 'order',
      title: 'Updated Guidelines for Digital Evidence Collection',
      titleMr: 'डिजिटल पुरावे गोळा करण्यासाठी अद्यतनित मार्गदर्शक तत्त्वे',
      date: '2024-01-12',
      icon: FileText,
      color: 'border-l-green-500',
      badge: 'Important'
    },
    {
      id: 3,
      type: 'instruction',
      title: 'Emergency Communication Protocol Enhancement',
      titleMr: 'आणीबाणी दळणवळण प्रोटोकॉल सुधारणा',
      date: '2024-01-10',
      icon: FileText,
      color: 'border-l-orange-500',
      badge: 'Update'
    },
    {
      id: 4,
      type: 'bulletin',
      title: 'Annual IT Infrastructure Audit Results',
      titleMr: 'वार्षिक आयटी इन्फ्रास्ट्रक्चर ऑडिट परिणाम',
      date: '2024-01-08',
      icon: Megaphone,
      color: 'border-l-purple-500',
      badge: 'Report'
    }
  ];

  const tenders = [
    {
      id: 1,
      title: 'Supply and Installation of Communication Equipment',
      titleMr: 'दळणवळण उपकरणांचा पुरवठा आणि स्थापना',
      lastDate: '2024-02-15',
      tender_no: 'PCIT/2024/001',
      value: '₹ 2.5 Crores',
      status: 'Open'
    },
    {
      id: 2,
      title: 'Development of Mobile Application for Citizen Services',
      titleMr: 'नागरिक सेवांसाठी मोबाइल अॅप्लिकेशन विकास',
      lastDate: '2024-02-20',
      tender_no: 'PCIT/2024/002',
      value: '₹ 1.8 Crores',
      status: 'Open'
    },
    {
      id: 3,
      title: 'Annual Maintenance of Server Infrastructure',
      titleMr: 'सर्व्हर इन्फ्रास्ट्रक्चरची वार्षिक देखभाल',
      lastDate: '2024-01-30',
      tender_no: 'PCIT/2024/003',
      value: '₹ 85 Lakhs',
      status: 'Closing Soon'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN');
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'new': return 'default';
      case 'important': return 'destructive';
      case 'update': return 'secondary';
      default: return 'outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-green-100 text-green-800 border-green-200';
      case 'closing soon': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'closed': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            {t('govt.updates')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-saffron mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bulletins / Orders / Instructions */}
          <Card className="glass-card fade-in">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Megaphone className="w-6 h-6 text-primary" />
                {t('bulletins')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bulletins.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 border-l-4 ${item.color} bg-card hover:bg-card/80 rounded-r-lg transition-all duration-300 hover:shadow-md card-hover cursor-pointer`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                      <Badge variant={getBadgeVariant(item.badge)} className="text-xs">
                        {item.badge}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.titleMr}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {t('read.more')}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <Download className="w-3 h-3 mr-1" />
                      PDF
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="text-center pt-4">
                <Button className="btn-police">
                  {t('view.all')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tenders */}
          <Card className="glass-card slide-up">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <FileText className="w-6 h-6 text-saffron" />
                {t('tenders.section')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tenders.map((tender, index) => (
                <div
                  key={tender.id}
                  className="p-4 border border-border rounded-lg bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-md card-hover cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 leading-tight">
                        {tender.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {tender.titleMr}
                      </p>
                    </div>
                    <Badge className={`text-xs ${getStatusColor(tender.status)}`}>
                      {tender.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-muted-foreground">Tender No:</span>
                      <p className="font-medium text-foreground">{tender.tender_no}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Value:</span>
                      <p className="font-medium text-foreground">{tender.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      Last Date: {formatDate(tender.lastDate)}
                    </div>
                    <Button variant="outline" size="sm" className="hover:bg-saffron hover:text-white hover:border-saffron">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="text-center pt-4">
                <Button className="btn-saffron">
                  {t('view.all')} {t('tenders.section')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GovernmentUpdates;
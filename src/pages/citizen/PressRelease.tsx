import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Newspaper } from "lucide-react";
import techPhoto from "@/assets/1.jpg";
import aiPhoto from "@/assets/1.jpg";
import emergencyPhoto from "@/assets/1.jpg";
import cyberPhoto from "@/assets/1.jpg";
import { useNavigate } from "react-router";


export default function PressRelease() {
      const navigate = useNavigate();
    const goBack = () => navigate("/");
  const newsItems = [
    {
      title: "Technological Upgrades",
      description:
        "The Police Communication and Information Technology (PCIT) wing is undergoing significant modernization, adopting advanced systems to improve operational efficiency and response times across Maharashtra. This includes state-of-the-art radio, secure data links, and high-speed digital infrastructure.",
      image: techPhoto,
    },
    {
      title: "AI-Powered Policing - MARVEL Project",
      description:
        "In March 2024, the state cabinet approved the ₹23 crore 'MARVEL' project (Maharashtra Advanced Research and Vigilance for Advanced Law Enforcement). This initiative uses AI to enhance intelligence capabilities, improve crime prediction, and assist with complex cases, making policing smarter and more proactive.",
      image: aiPhoto,
    },
    {
      title: "Enhanced Emergency Response - Dial 112",
      description:
        "The 'Dial 112' emergency system integrates police (100), fire (101), and ambulance (108) services into a single number. Using advanced tracking and dispatch technology, response times are drastically reduced, saving lives and improving public safety.",
      image: emergencyPhoto,
    },
    {
      title: "New Cyber Command Center",
      description:
        "In October 2024, a new Cyber Command and Control Centre was launched. Equipped with advanced forensic tools and AI-based threat detection, it allows the police to combat cybercrime efficiently and ensures digital safety for citizens and critical infrastructure.",
      image: cyberPhoto,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-violet-400/20 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/20 blur-3xl rounded-full animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back to Home Button */}
        <Button
          variant="ghost"
          onClick={goBack}
          className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-400 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
          Press Releases
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12">
          Positive developments and ongoing projects in the Maharashtra Police Wireless Department
        </h2>

        {/* News Items */}
        <div className="space-y-10">
          {newsItems.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/20 border border-gray-200 backdrop-blur-md shadow-xl rounded-3xl hover:shadow-blue-400/20 transition-all duration-500 flex flex-col md:flex-row overflow-hidden"
            >
              {/* Image Section */}
              <div className="md:w-1/3 h-64 md:h-auto relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-3xl md:rounded-none md:rounded-l-3xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <CardContent className="p-8 flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <Newspaper className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-500 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed text-justify">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

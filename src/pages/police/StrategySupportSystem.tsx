// StrategySupportSystem.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cpu } from "lucide-react";
import { useNavigate } from "react-router";


export default function StrategySupportSystem() {
        const navigate = useNavigate();
    const goBack = () => navigate("/");
  const sssItems = [
    {
      title: "SSS Branch Functions",
      description: [
        "Conducting trials for new communication technologies.",
        "Development and improvisation in the field of Communication and IT.",
        "Studying various technologies as per the needs of all Police Units in the State.",
      ],
    },
    {
      title: "Research & Development (R&D) Initiatives",
      description: [
        "Data Communication System: Development of systems using Existing VHF Radio Network for computer-based message transmission/reception.",
        "Advanced Technical Specifications: Preparation and evaluation of specs for equipment like Digital Mobile Radio Sets, Handheld Transceivers, Repeaters, Antennas, Microwave Links, Computers, Network Switches, Telephone Exchanges, etc.",
        "Testing & Evaluation: Field trials and technical evaluations of new equipment post-tender processes.",
      ],
    },
    {
      title: "Dr. APJ Abdul Kalam Innovation Centre",
      description: [
        "Focus on innovation in policing technologies (e.g., AI, IoT, 4G LTE, Software Defined Radios).",
        "Hands-on training and development for advanced policing tools.",
      ],
    },
    {
      title: "Sir J C Bose E-Learning Centre",
      description: [
        "Digital classroom with Learning Management System (LMS) for secure, remote training.",
        "Features: Two-way video interactions, encrypted session recordings, remote access for trainees, online assessments.",
      ],
    },
    {
      title: "Implementation of Modern Systems",
      description: [
        "e-Office: Digital office management system for efficient workflow.",
        "NIC Email: Secure official email communication service.",
        "Cipher Systems: Maintenance and loading of cipher programmes for secure communication across Crypto Centers in Maharashtra.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back to Home Button */}
        <Button
          variant="ghost"
          onClick={goBack}
          className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>

        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
            Strategy Support System (SSS)
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-600">
            Digital tools and systems for internal operational support
          </h2>
        </div>

        {/* SSS Cards */}
        <div className="space-y-8">
          {sssItems.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-purple-400/20 transition-all duration-500"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-500 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-800 text-lg leading-relaxed space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight / Summary */}
        <Card className="bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-teal-400/20 p-6 rounded-3xl border border-white/20 shadow-inner text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-900">
            The <span className="text-purple-500">SSS</span> ensures innovation, operational efficiency, and secure communication, empowering Maharashtra Police with <span className="text-blue-500">cutting-edge technology</span> and <span className="text-teal-500">advanced training solutions</span>.
          </p>
        </Card>
      </div>
    </div>
  );
}

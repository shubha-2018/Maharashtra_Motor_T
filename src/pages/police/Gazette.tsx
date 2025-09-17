import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, FileCheck, Bell, BookOpen, Clipboard } from "lucide-react";
import { useNavigate } from "react-router";


export default function GovernmentPublications() {
        const navigate = useNavigate();
      const goBack = () => navigate(-1);
  const publications = [
    {
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      title: "Gazette Notifications",
      description:
        "Official announcements, appointments, and policy changes published in the Maharashtra Government Gazette. Citizens and employees can access notifications to stay informed about governmental and departmental developments.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-blue-400" />,
      title: "Government Orders (GRs)",
      description:
        "Copies of Government Resolutions relevant to the Police Communication & IT Department. These orders ensure transparency and provide official directives for operations, personnel management, and policy implementation.",
    },
    {
      icon: <Bell className="w-6 h-6 text-blue-400" />,
      title: "Circulars",
      description:
        "Official circulars issued by the Director General of Police (DGP) or Home Department, providing guidelines, instructions, and updates for departmental operations and staff.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: "Notifications",
      description:
        "Public notices regarding administrative changes, rules, or regulations. These notifications ensure citizens and employees are aware of new protocols or modifications in policies.",
    },
    {
      icon: <Clipboard className="w-6 h-6 text-blue-400" />,
      title: "Tender Notices",
      description:
        "Official announcements of tenders related to departmental procurement and services. While some tenders are listed under a separate section, key notices are provided here for transparency and access.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-teal-400/20 blur-3xl rounded-full animate-pulse-slow"></div>
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
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-400 via-teal-400 to-violet-400 bg-clip-text text-transparent drop-shadow-lg">
          Government Publications & Notifications
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12">
          Access official announcements, resolutions, circulars, and tenders issued by the Maharashtra Police Communication & IT Department
        </h2>

        {/* Publication Cards */}
        <div className="space-y-8">
          {publications.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-violet-400">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed text-justify">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

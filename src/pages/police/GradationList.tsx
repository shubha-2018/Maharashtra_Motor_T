import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, List } from "lucide-react";
import { useNavigate } from "react-router";


export default function GradationList() {
        const navigate = useNavigate();
      const goBack = () => navigate(-1);
  const gradationItems = [
    {
      title: "PC to PSI Gradation List",
      description:
        "The official seniority list for ranks from Police Constable (PC) to Police Sub-Inspector (PSI). This ensures transparency in promotions, postings, and career tracking for departmental personnel.",
    },
    {
      title: "Updated Gradation Lists",
      description:
        "Current and historical seniority lists for all departmental personnel, maintained meticulously to reflect transfers, promotions, and retirements, providing accurate records for administrative purposes.",
    },
    {
      title: "Seniority Records",
      description:
        "Maintenance and updates of service sheets and vacancy statements. These records ensure that promotions, transfers, and other personnel actions are carried out according to proper seniority protocols.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-teal-400/20 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/20 blur-3xl rounded-full animate-pulse-slow"></div>
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
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-teal-400 via-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow-lg">
          Gradation List
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12">
          Seniority-wise ranking of officers and staff in the Maharashtra Police Communication & IT Department
        </h2>

        {/* Gradation Cards */}
        <div className="space-y-8">
          {gradationItems.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-teal-400/20 transition-all duration-500"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <List className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <h3 className="text-2xl md:text-3xl font-bold text-teal-500 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-violet-400">
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

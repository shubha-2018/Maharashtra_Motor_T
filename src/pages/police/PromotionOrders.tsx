// PromotionOrders.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { useNavigate } from "react-router";

export default function PromotionOrders() {
        const navigate = useNavigate();
      const goBack = () => navigate("/");
  const promotionItems = [
    {
      title: "Promotion Orders",
      description:
        "Official documents and circulars announcing promotions of personnel across all ranks, from Police Constable (PC) to senior officers. These orders ensure transparency and maintain morale among the department's personnel.",
    },
    {
      title: "Departmental Promotion Committee (DPC) Results",
      description:
        "Notifications and outcomes from Departmental Promotion Committee meetings, detailing which officers have been approved for promotion, along with the effective dates and ranks.",
    },
    {
      title: "Seniority-Based Promotions",
      description:
        "Promotions executed based on official gradation lists, vacancy positions, and merit. These orders ensure fair advancement within the department and adherence to organizational protocols.",
    },
    {
      title: "Classification & Proficiency Exam Results",
      description:
        "Promotion orders linked to the successful completion of exams, such as wireless operator exams or technical proficiency assessments. Officers demonstrating competence are recognized and promoted accordingly.",
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
            Promotion Orders
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-600">
            Official notifications and updates regarding promotions of officers and staff
          </h2>
        </div>

        {/* Promotion Cards */}
        <div className="space-y-8">
          {promotionItems.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-purple-400/20 transition-all duration-500"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-500 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight / Summary */}
        <Card className="bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-teal-400/20 p-6 rounded-3xl border border-white/20 shadow-inner text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-900">
            These promotion orders reflect the department’s commitment to <span className="text-purple-500">merit-based growth</span>, <span className="text-blue-500">fair procedures</span>, and <span className="text-teal-500">organizational excellence</span>.
          </p>
        </Card>
      </div>
    </div>
  );
}

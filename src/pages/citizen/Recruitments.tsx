import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, UserCheck } from "lucide-react";

export default function Recruitments() {
  const recruitmentItems = [
    {
      title: "Recruitment Notifications",
      description:
        "Official advertisements for current and upcoming job openings in the department, including positions such as ASI, HC, PC, Technical Assistants, and Drivers. Stay updated to apply for suitable roles."
    },
    {
      title: "Application Forms",
      description:
        "Links and downloadable forms for submitting applications for departmental vacancies. Online submission portals are also provided where applicable."
    },
    {
      title: "Exam Schedules",
      description:
        "Dates and timetables for written tests, proficiency exams, and practical assessments for various recruitment drives."
    },
    {
      title: "Results",
      description:
        "Merit lists and final selection results for completed recruitments, such as 'PP RESULT RM, ELE., WO – 2024'."
    },
    {
      title: "Training Details",
      description:
        "Information on training programs for selected cadets, including basic training for DySP, PSI, ASI/RM, HC/Wireless Operators, HC/Electricians, and PC/Workshop Hand."
    },
    {
      title: "Eligibility Criteria",
      description:
        "Educational qualifications, age limits, and physical requirements for various posts to ensure all applicants meet departmental standards."
    },
    {
      title: "Proficiency / Classification Exams",
      description:
        "Notices for internal exams that assist in promotions, such as wireless operator exams and classification tests for departmental personnel."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Back to Home Button */}
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
        className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
      </Button>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-10">
        Recruitments
      </h1>
      <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12">
        Information about current and upcoming job opportunities in the Maharashtra Police Wireless Department
      </h2>

      {/* Recruitment Cards */}
      <div className="space-y-8">
        {recruitmentItems.map((item, idx) => (
          <Card
            key={idx}
            className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500"
          >
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-blue-500 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

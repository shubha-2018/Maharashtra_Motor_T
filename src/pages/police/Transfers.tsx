// TransferOrders.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";


export default function TransferOrders() {
        const navigate = useNavigate();
      const goBack = () => navigate(-1);
  const transferItems = [
    {
      title: "Transfer Orders",
      description: [
        "Official documents and circulars announcing the transfer of personnel from one unit or location to another.",
        "Includes notifications of effective dates, reporting instructions, and reasons for transfer when applicable.",
      ],
    },
    {
      title: "Posting Details",
      description: [
        "Information about new postings including location, department, and hierarchy details.",
        "Ensures transparency and proper documentation of assignments for all officers and staff.",
      ],
    },
    {
      title: "Replacement Orders",
      description: [
        "Notifications regarding the filling of vacancies caused by transfers.",
        "Ensures continuity of operations without disruption to departmental functions.",
      ],
    },
    {
      title: "Rotation Policy Orders",
      description: [
        "Details about periodic transfer policies implemented by the department.",
        "Aims to maintain efficiency, prevent stagnation, and provide career development opportunities for personnel.",
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
            Transfer Orders
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-600">
            Official transfer orders and posting details for officers and staff
          </h2>
        </div>

        {/* Transfer Cards */}
        <div className="space-y-8">
          {transferItems.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-purple-400/20 transition-all duration-500"
            >
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-purple-500 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  {item.title}
                </h3>
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
            Transfer orders and posting notifications ensure <span className="text-purple-500">operational continuity</span>, <span className="text-blue-500">transparency</span>, and <span className="text-teal-500">career development</span> for Maharashtra Police personnel.
          </p>
        </Card>
      </div>
    </div>
  );
}

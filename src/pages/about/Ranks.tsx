import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star } from "lucide-react";
import { useNavigate } from "react-router";

export default function Ranks() {
    const navigate = useNavigate();
    const goBack = () => navigate("/");
  const ranksData = [
    {
      rank: "Addl. DGP & Director Police Communication, Information Technology & Transportation, M.S. Pune",
      description: "Leads the entire department, sets strategic direction, ensures coordination across all units, and oversees communication, IT, and transportation functions statewide."
    },
    {
      rank: "Deputy Inspector General of Police Communication & Information Technology, M.S. Pune",
      description: "Assists the Director in managing statewide operations, supervises technical teams, and ensures adherence to policies and standards."
    },
    {
      rank: "Additional Commissioner of Police Communication & Information Technology, M.S. Mumbai",
      description: "Leads Mumbai operations, manages critical IT infrastructure, ensures secure communications, and coordinates with local law enforcement units."
    },
    {
      rank: "Supdt. Of Police Communication & Information Technology",
      description: "Supervises field units, monitors wireless systems, coordinates departmental activities, and ensures smooth day-to-day operations."
    },
    {
      rank: "Deputy Commissioner of Police Communication & Information Technology",
      description: "Oversees technical teams, manages operations, and provides guidance for implementing IT and communication strategies."
    },
    {
      rank: "Deputy Supdt. Of Police /Asst. Commissioner of Police",
      description: "Handles daily technical operations, staff assignments, troubleshooting, and ensures compliance with departmental protocols."
    },
    {
      rank: "Police Inspector (PI)",
      description: "Supervises teams, monitors field communications, enforces regulations, and reports technical issues to senior officers."
    },
    {
      rank: "Police Sub-Inspector (PSI)",
      description: "Maintains wireless networks, supports investigations, and ensures effective communication within the unit."
    },
    {
      rank: "ASI (Senior Technical Officer)",
      description: "Leads technical projects, audits systems, trains junior staff, and ensures technical excellence across operations."
    },
    {
      rank: "HC (Technical Officer)",
      description: "Operates and maintains technical equipment, supports wireless and IT operations, and ensures continuous service."
    },
    {
      rank: "ASI (Senior Technical Assistant)",
      description: "Assists senior officers in technical tasks, system maintenance, and coordinates with field units."
    },
    {
      rank: "HC (Technical Assistant Grade II)",
      description: "Handles administrative support, technical documentation, and assists in communication tasks."
    },
    {
      rank: "PN (Technical Assistant Grade I)",
      description: "Performs day-to-day technical assistance, monitors equipment, and supports operations."
    },
    {
      rank: "PC (Technical Assistant)",
      description: "Supports operations under supervision, assists in communication tasks, and maintains records."
    },
    {
      rank: "ASI (Driver)",
      description: "Provides transportation for high-ranking officers and supports operational logistics."
    },
    {
      rank: "HC (Driver)",
      description: "Ensures reliable transport for staff and equipment, assists in logistical planning."
    },
    {
      rank: "PN (Driver)",
      description: "Supports vehicle operations and transportation coordination within the department."
    },
    {
      rank: "PC (Driver)",
      description: "Handles routine driving duties, transport coordination, and ensures timely mobility of personnel."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-violet-400/20 blur-3xl rounded-full"></div>
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
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
          Ranks
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-10">
          List of Ranks and Designations in Police Communication and Information Technology Department
        </h2>

        {/* Glassmorphic Cards for each rank */}
        <div className="space-y-6">
          {ranksData.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-violet-400/20 transition-all duration-500"
            >
              <CardContent className="p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-violet-400 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-violet-500">{item.rank}</h3>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

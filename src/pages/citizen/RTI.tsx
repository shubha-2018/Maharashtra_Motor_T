import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info, FileText, Link, Book, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router";

export default function RTIPage() {
    const navigate = useNavigate();
    const onBack = () => navigate("/");
  const rtiSections = [
    {
      icon: <Info className="w-6 h-6 text-teal-400" />,
      title: "Public Information Officer (PIO) Details",
      description:
        "Contact information for the designated PIOs and Appellate Authorities within the Police Communication & IT Department is provided here. Citizens can reach out directly for submitting RTI requests or seeking clarifications.",
    },
    {
      icon: <FileText className="w-6 h-6 text-teal-400" />,
      title: "RTI Application Procedure",
      description:
        "Step-by-step guide on filing an RTI application including the proper format, required details, and applicable fees. Ensure all fields are correctly filled for faster processing.",
    },
    {
      icon: <Link className="w-6 h-6 text-teal-400" />,
      title: "Online RTI Portal Link",
      description:
        "Submit RTI applications electronically through the official portals. Maharashtra RTI Portal and Government of India RTI online portals are linked for citizen convenience.",
    },
    {
      icon: <Book className="w-6 h-6 text-teal-400" />,
      title: "Frequently Requested Information",
      description:
        "Access commonly requested documents such as organizational structure, budget details, citizen charters, and departmental manuals. This improves transparency and eases information retrieval.",
    },
    {
      icon: <Book className="w-6 h-6 text-teal-400" />,
      title: "RTI Act Manual",
      description:
        "Download or view the full RTI Act, 2005 and official guidelines for reference. Citizens are encouraged to familiarize themselves with their rights and responsibilities under the Act.",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-teal-400" />,
      title: "Appeal Process",
      description:
        "If the applicant is unsatisfied with the response, follow the appeal procedure within the prescribed timelines. Details for submitting first and second appeals, along with contact information for appellate authorities, are provided.",
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
          onClick={onBack}
          className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-teal-400 via-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow-lg">
          RTI (Right to Information)
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12">
          Information and procedures for citizens under the Right to Information Act
        </h2>

        {/* RTI Sections */}
        <div className="space-y-8">
          {rtiSections.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-teal-400/20 transition-all duration-500"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  {item.icon}
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

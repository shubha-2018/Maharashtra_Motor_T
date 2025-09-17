import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function FormerDirectors() {
   const navigate = useNavigate();
      const onBack = () => navigate(-1);
  const achievementsKamte = [
    "Appointed first Special Inspector General of Police, Bombay State in 1947",
    "Oversaw transition of police operations after independence",
    "Set the foundation for modern administrative practices in police department",
  ];

  const achievementsNabar = [
    "Appointed Superintendent of Police Wireless according to technical expertise",
    "Established the Police Wireless Department as an independent administrative unit",
    "Implemented technical communication systems for efficient police operations",
  ];

  const renderList = (items) => (
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-1 drop-shadow-md" />
          <span className="text-gray-800 text-lg leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-violet-400/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Back Button */}
        <Button
          onClick={() => window.history.back()}
          variant="ghost"
          className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Button>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-md">
          Former Directors
        </h1>

        {/* Mr. N. M. Kamte */}
        <Card className="bg-white border border-gray-200 shadow-xl rounded-3xl hover:shadow-violet-200 transition-all duration-500">
          <CardContent className="p-10 space-y-8">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-md">
              Mr. N. M. Kamte
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Appointed as the first Special Inspector General of Police of the Bombay State in 1947, immediately after India's independence. He laid the administrative foundation for a modern police department.
            </p>
            {renderList(achievementsKamte)}
          </CardContent>
        </Card>

        {/* Mr. S. M. Nabar */}
        <Card className="bg-white border border-gray-200 shadow-xl rounded-3xl hover:shadow-violet-200 transition-all duration-500">
          <CardContent className="p-10 space-y-8">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-md">
              Mr. S. M. Nabar
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Appointed Superintendent of Police Wireless, leveraging his technical qualifications. He oversaw the separation of the Police Wireless Department as an independent administrative unit.
            </p>
            {renderList(achievementsNabar)}
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="bg-white border border-gray-200 shadow-xl rounded-3xl hover:shadow-violet-200 transition-all duration-500">
          <CardContent className="p-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              Together, these former directors established the core administrative and technical framework for the Police Wireless Department, ensuring independent operations and laying the groundwork for modern communication systems within the Maharashtra State Police.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

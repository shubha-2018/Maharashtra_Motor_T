import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import directorPhoto from "@/assets/director-placeholder.jpg"; // Replace with actual image
import { useNavigate } from "react-router";


export default function DirectorsDesk() {
  const navigate = useNavigate();
  const onBack = () => navigate("/");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-40 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center text-gray-700 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          {/* Photo */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 opacity-40 blur-lg group-hover:opacity-80 transition duration-700"></div>
            <img
              src={directorPhoto}
              alt="Mr. Deepak Shivanand Pandey"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-200 shadow-xl transition-all duration-500 group-hover:border-gray-400 group-hover:shadow-2xl"
            />
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              From Director’s Desk
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Mr. Deepak Shivanand Pandey{" "}
              <span className="text-purple-600">(IPS)</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Additional Director General of Police & Director <br />
              <span className="text-blue-600">
                Police Communication & IT Department
              </span>
              , <br />
              Maharashtra State, Pune
            </p>
          </div>
        </div>

        {/* Content */}
        <Card className="bg-white border border-gray-200 shadow-xl rounded-3xl hover:shadow-purple-200 transition-all duration-500">
          <CardContent className="p-10 prose max-w-none space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              The Police Wireless Department prior to Police Communication and
              Information Technology Department typically handles communication
              systems used by law enforcement authority that is Maharashtra
              State Police. This includes managing radio frequencies,
              dispatching officers, and ensuring secure and efficient
              communication between police units in the field.{" "}
              <span className="text-purple-600 font-semibold">
                Uninterrupted 24×7 communication
              </span>{" "}
              system is provided by our Department.
            </p>

            <p className="text-lg text-gray-700">
              The Police Communication and Information Technology Department
              plays a vital role in policing by ensuring effective communication
              and coordination among officers with key functions such as:
            </p>

            {/* Key Functions */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-md flex-shrink-0"></span>
                <p className="text-gray-800 text-lg">
                  <strong>Real-time Communication</strong> – facilitates
                  immediate contact between officers and dispatch.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-md flex-shrink-0"></span>
                <p className="text-gray-800 text-lg">
                  <strong>Situational Awareness</strong> – provides updates on
                  ongoing situations for better decisions.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-md flex-shrink-0"></span>
                <p className="text-gray-800 text-lg">
                  <strong>Emergency Response</strong> – enables faster
                  deployment during emergencies.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-md flex-shrink-0"></span>
                <p className="text-gray-800 text-lg">
                  <strong>Data Transmission</strong> – supports secure sharing
                  of critical intelligence.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-md flex-shrink-0"></span>
                <p className="text-gray-800 text-lg">
                  <strong>Safety and Security</strong> – protects sensitive
                  information and officer safety.
                </p>
              </li>
            </ul>

            <p className="text-lg text-gray-700">
              The{" "}
              <span className="font-semibold text-blue-600">
                Koyna earthquake (1967)
              </span>{" "}
              and{" "}
              <span className="font-semibold text-blue-600">
                Killari earthquake (1993)
              </span>{" "}
              caused significant devastation in Maharashtra. The{" "}
              <span className="font-semibold text-blue-600">
                Mumbai floods (2005)
              </span>{" "}
              and{" "}
              <span className="font-semibold text-blue-600">
                26/11 terrorist attack
              </span>{" "}
              highlighted the importance of communication. During such crises,
              when private networks collapsed,{" "}
              <span className="text-purple-600">
                wireless systems kept police connected
              </span>
              , enabling life-saving coordination.
            </p>

            <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-teal-100 p-8 rounded-2xl border border-gray-200 shadow-inner">
              <p className="text-xl font-bold text-center text-gray-900">
                Effective wireless communication is the backbone of{" "}
                <span className="text-purple-600">public safety</span> and{" "}
                <span className="text-blue-600">operational excellence</span> in
                policing.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

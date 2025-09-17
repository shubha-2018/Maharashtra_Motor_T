import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import historyPhoto from "@/assets/1.jpg"; // Replace with actual image
import { useNavigate } from "react-router";

export default function History() {
    const navigate = useNavigate();
    const onBack = () => navigate("/");
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 px-6 py-12 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center text-gray-700 hover:bg-gray-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/10 blur-lg opacity-75 group-hover:opacity-100 transition duration-700"></div>
              <img
                src={historyPhoto}
                alt="History of Police Wireless"
                className="relative w-64 h-40 md:w-80 md:h-52 rounded-2xl object-cover border-4 border-gray-200 shadow-xl transition-all duration-500 group-hover:border-gray-400 group-hover:shadow-2xl"
              />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              History of Police Wireless Communication Department
            </h1>
            <p className="text-gray-700 leading-relaxed max-w-2xl">
              Established in 1946, the Department has evolved from WWII wireless
              sets to cutting-edge satellite and IP-based networks ensuring
              secure, real-time communication across Maharashtra.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative border-l-2 border-gray-300 pl-8 space-y-10">
          {/* 1946 */}
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">1946 – Foundation</h2>
              <p className="text-gray-700">
                Department established in Mumbai during pre-independence.
                Wireless started with WWII sets; 13 districts linked to Pune HQ.
              </p>
            </CardContent>
          </Card>

          {/* 1947 */}
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">1947 – First Leadership</h2>
              <p className="text-gray-700">
                After independence, Mr. N.M. Kamte became the first Special IGP.
                Wireless Dept. separated administratively, led by Mr. S.M. Nabar.
              </p>
            </CardContent>
          </Card>

          {/* 1984 */}
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">1984 – VHF & Teleprinters</h2>
              <p className="text-gray-700">
                Local VHF introduced; teleprinter links leased from Dept. of
                Telecommunications connecting Zonal HQs with State HQ.
              </p>
            </CardContent>
          </Card>

          {/* 1988 */}
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">1988 – ACS Messaging</h2>
              <p className="text-gray-700">
                Microprocessor-based Auto Communication System (ACS) introduced
                between District HQs and Mumbai HQ, enabling faster message
                exchange.
              </p>
            </CardContent>
          </Card>

          {/* 1990 */}
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">1990 – Modern Telephone Exchanges</h2>
              <p className="text-gray-700">
                C-dot automatic exchanges deployed, revolutionizing call
                efficiency at district and state HQs.
              </p>
            </CardContent>
          </Card>

          {/* 1995 */}
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">1995 – UHF Systems</h2>
              <p className="text-gray-700">
                UHF introduced in Pune, Nagpur, Mumbai improving clarity by
                overcoming obstacles like tall buildings.
              </p>
            </CardContent>
          </Card>

          {/* 1997 */}
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">1997 – Radio Trunking</h2>
              <p className="text-gray-700">
                India’s first police radio trunking in Mumbai, ensuring instant
                channel allocation without delays.
              </p>
            </CardContent>
          </Card>

          {/* 1998 */}
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">1998 – Satellite Communication</h2>
              <p className="text-gray-700">
                V-SAT via INSAT3B enabled fast written message exchange. 52
                stations connected; NMS setup in Pune.
              </p>
            </CardContent>
          </Card>

          {/* 2019 */}
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">2019 – Polnet 2.0</h2>
              <p className="text-gray-700">
                Nationwide IP-based system under MHA, New Delhi. Provides voice,
                fax, and data communication; connects NCRB systems. 64 stations
                active in Maharashtra.
              </p>
            </CardContent>
          </Card>

          {/* 2021 */}
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">2021 – DIAL 112</h2>
              <p className="text-gray-700">
                ERSS emergency number operational across Maharashtra. Citizens
                can dial 112 for police, fire, health, and rescue services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

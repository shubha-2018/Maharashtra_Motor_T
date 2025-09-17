import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";


export default function AdminOffice() {
      const navigate = useNavigate();
    const goBack = () => navigate(-1);
  const renderList = (items) => (
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-1 drop-shadow-md" />
          <span className="text-gray-800 text-lg leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-violet-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Back Button */}
        <button
          onClick={goBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-all duration-300 text-sm font-medium text-violet-700 mb-8 shadow"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
          Administrative Office
        </h1>

        {/* Main Card */}
        <Card className="bg-white border border-gray-200 shadow-2xl rounded-3xl hover:shadow-violet-200 transition-all duration-500">
          <CardContent className="p-10 space-y-16">
            {/* Ministerial & Technical Branch */}
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-md">
                Ministerial & Technical Branch
              </h2>
              <p className="text-lg text-gray-700 italic">
                <span className="font-semibold not-italic">In charge:</span> Office Superintendent (OS)
              </p>
            </div>

            {/* A Branch */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-violet-700">“A” Branch</h3>
              {renderList([
                "RTI",
                "Yearly Administrative Report",
                "Budget, Annual Inspection",
                "BMI Govt. Quarters distribution / maintenance / repairs",
                "NE line / Medical / TA / MSEB / MKAY / Telephone / MT / Fuel / Bills payment",
              ])}
            </div>

            {/* B Branch */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-violet-700">“B” Branch</h3>
              {renderList([
                "Welfare / Income Tax / GST bills",
                "Pension / GPF / Medical / Transfer TA / HBA / Reward / ODC",
                "Online payment coordination with Pune Treasury",
              ])}
            </div>

            {/* E Branch */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-violet-700">“E” Branch</h3>
              {renderList([
                "MAT Cases relating work",
                "Wireless Officers / Men – all types of enquiry",
                "PC to PSI Gradation List",
                "Promotion & Transfer",
                "Service sheet preparation & vacancy statement update",
                "Classification / Proficiency Exams scheduling",
                "Recruitment / RR process follow-up",
              ])}
            </div>

            {/* D Branch */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-violet-700">“D” Branch</h3>
              {renderList([
                "Procurement & purchase of spares/accessories via GEM (NIC portal)",
                "Day-to-day Tender process for wireless equipment purchases by DGP MS Mumbai",
              ])}
            </div>
          </CardContent>
        </Card>

        {/* Innovation Centre */}
        <Card className="bg-white border border-gray-200 shadow-2xl rounded-3xl hover:shadow-violet-200 transition-all duration-500">
          <CardContent className="p-10 space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-md">
                Dr. A P J Abdul Kalam Innovation Centre
              </h2>
              <p className="text-lg text-gray-700 italic">
                <span className="font-semibold not-italic">In charge:</span> DYSP (Admin)
              </p>
            </div>

            {renderList([
              "Oversees all administrative & technical branches in HQ",
              "Technical: Bandobast, Planning, License, Welfare, Home PI, SSS Branch",
              "Administrative: A, B, D, E, Accounts Branch",
            ])}

            {/* Sub-branches */}
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Bandobast Branch</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Provides manpower & equipment for bandobast, maintains records, and handles inspections.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Planning Branch</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Prepares proposals, conducts meetings, coordinates with Pol-4 & DGP Mumbai for purchases.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Home PI</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Manages MT section, MAT cases, and RTI-related work.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Welfare Branch</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Oversees Dnyaneshwari Sr. Officers Mess, Sanchar Hostel, and more.
                </p>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">SSS Branch</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Conducts trials, innovations & technology studies for Police units under the Innovation Centre.
                </p>
              </div>
            </div>

            {/* Highlight Note */}
            <div className="bg-gradient-to-r from-violet-100 via-blue-100 to-teal-100 p-8 rounded-2xl border border-gray-200 shadow-inner text-center">
              <p className="text-xl font-bold text-gray-800">
                Empowering <span className="text-violet-700">innovation</span> and{" "}
                <span className="text-blue-700">administrative excellence</span> in policing.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

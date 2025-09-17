import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Activity } from "lucide-react";
import { useNavigate } from "react-router";

export default function WelfareActivities() {
    const navigate = useNavigate();
    const onBack = () => navigate(-1);
  const welfarePrograms = [
    {
      title: "Blood Donation Camps",
      description:
        "Government Hospital authorities organize blood donation camps at the Training Centre, promoting civic responsibility. Camps were successfully conducted in 2020-21 and 2022-23. Officers and cadets actively participate, fostering teamwork, empathy, and social contribution."
    },
    {
      title: "Medical Camps",
      description:
        "Renowned hospitals conduct comprehensive medical camps within the Training Centre. Services include health checkups, consultations, diagnostics, and awareness sessions on nutrition, hygiene, and wellness, benefitting employees, cadets, and their families."
    },
    {
      title: "CSD Canteen Facility",
      description:
        "The CSD Canteen of Pune Rural Police is extended to cadets and Training Centre staff, providing quality meals and essentials at reasonable prices. This facility supports day-to-day convenience and ensures staff well-being."
    },
    {
      title: "Police Health Centre",
      description:
        "The Police Health Centre at Pune Rural Police provides primary healthcare, routine checkups, and emergency medical support for cadets and staff, ensuring optimal health and operational readiness."
    },
    {
      title: "Mess Facility",
      description:
        "A modern, well-equipped mess with a seating capacity of 70 persons operates on a no-profit, no-loss basis. It provides nutritious meals for trainees and staff, fostering community, discipline, and a positive learning environment."
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
          onClick={onBack}
          className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
          Welfare Activities
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12">
          Programs and initiatives for the welfare of employees, officers, and cadets
        </h2>

        {/* Glassmorphic Cards */}
        <div className="space-y-8">
          {welfarePrograms.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-violet-400/20 transition-all duration-500"
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-violet-500 flex-shrink-0 animate-pulse" />
                  <h3 className="text-2xl md:text-3xl font-bold text-violet-500 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed text-justify">
                  {item.description}
                </p>
                <div className="flex justify-end">
                  <Activity className="w-5 h-5 text-blue-400 animate-bounce" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// PositiveStories.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star } from "lucide-react";
import { useNavigate } from "react-router";


export default function PositiveStories() {
        const navigate = useNavigate();
      const goBack = () => navigate("/");
  const stories = [
    {
      title: "Award-Winning Training Centre",
      description:
        "The Maharashtra State Police Communication and Information Technology Training Centre, Pune, has been recognized for excellence. It won the Union Home Minister’s Best Training Institutions Zonal Level First Prize and Trophy in 2018-2019, and the National Level Union Home Minister’s Trophy for Best Police Training Institutions in 2020-21, including a cash reward of ₹20,00,000.",
    },
    {
      title: "Event Participation",
      description:
        "The department actively participates in and organizes key national events, promoting public engagement and awareness. Notable events include:\n- Independence Day Celebrations\n- National Yoga Day\n- Inauguration of the Dr. APJ Abdul Kalam Innovation Centre by the Home Minister\n- Inauguration of the Ashok Jog Lecture Hall\n- Republic Day Celebrations",
    },
    {
      title: "Innovation and Development",
      description:
        "The Dr. APJ Abdul Kalam Innovation Centre and the Research & Development (R&D) section have pioneered cutting-edge communication systems and technologies to enhance policing efficiency, ensuring the department remains at the forefront of modern law enforcement.",
    },
    {
      title: "Welfare Initiatives",
      description:
        "The department emphasizes the well-being of its personnel and community. Key welfare activities include:\n- Blood donation camps\n- Medical camps for employees and their families\n- Community and health awareness lectures",
    },
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
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
            Positive Stories
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-600">
            Notable achievements and commendable work by the department and its personnel
          </h2>
        </div>

        {/* Stories Cards */}
        <div className="space-y-8">
          {stories.map((story, idx) => (
            <Card
              key={idx}
              className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-violet-400/20 transition-all duration-500"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                    {story.title}
                  </h3>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">{story.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight Card */}
        <Card className="bg-gradient-to-r from-violet-400/20 via-blue-400/20 to-teal-400/20 p-6 rounded-3xl border border-white/20 shadow-inner text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-900">
            These positive initiatives reflect the department's commitment to <span className="text-purple-500">innovation</span>, <span className="text-blue-500">community engagement</span>, and <span className="text-yellow-500">excellence in policing</span>.
          </p>
        </Card>
      </div>
    </div>
  );
}

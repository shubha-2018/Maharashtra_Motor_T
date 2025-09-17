import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

export default function PositiveStories() {
  const navigate = useNavigate();
  const goBack = () => navigate("/");
  const [darkMode, setDarkMode] = useState(false);

  // Check system preference on component mount
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const stories = [
    {
      title: "Award-Winning Training Centre",
      description:
        "The Maharashtra State Police Communication and Information Technology Training Centre, Pune, has been recognized for excellence. It won the Union Home Minister's Best Training Institutions Zonal Level First Prize and Trophy in 2018-2019, and the National Level Union Home Minister's Trophy for Best Police Training Institutions in 2020-21, including a cash reward of ₹20,00,000.",
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-violet-400/20 dark:bg-violet-600/20 blur-3xl rounded-full transition-colors duration-300"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/20 dark:bg-blue-600/20 blur-3xl rounded-full transition-colors duration-300"></div>
      </div>

      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full h-12 w-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-300 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="h-6 w-6 text-yellow-400" />
          ) : (
            <Moon className="h-6 w-6 text-gray-700" />
          )}
        </Button>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back to Home Button */}
        <Button
          variant="ghost"
          onClick={goBack}
          className="flex items-center text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>

        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 dark:from-violet-500 dark:via-blue-500 dark:to-teal-500 bg-clip-text text-transparent drop-shadow-lg transition-colors duration-300">
            Positive Stories
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Notable achievements and commendable work by the department and its personnel
          </h2>
        </div>

        {/* Stories Cards */}
        <div className="space-y-8">
          {stories.map((story, idx) => (
            <Card
              key={idx}
              className="bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-violet-400/20 dark:hover:shadow-violet-600/20 transition-all duration-500"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400 dark:text-yellow-300 flex-shrink-0 transition-colors duration-300" />
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 dark:text-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-300 dark:from-yellow-300 dark:to-yellow-200 bg-clip-text text-transparent transition-colors duration-300">
                    {story.title}
                  </h3>
                </div>
                <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed whitespace-pre-line transition-colors duration-300">
                  {story.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight Card */}
        <Card className="bg-gradient-to-r from-violet-400/20 via-blue-400/20 to-teal-400/20 dark:from-violet-600/20 dark:via-blue-600/20 dark:to-teal-600/20 p-6 rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-inner text-center transition-colors duration-300">
          <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
            These positive initiatives reflect the department's commitment to <span className="text-purple-500 dark:text-purple-400 transition-colors duration-300">innovation</span>, <span className="text-blue-500 dark:text-blue-400 transition-colors duration-300">community engagement</span>, and <span className="text-yellow-500 dark:text-yellow-400 transition-colors duration-300">excellence in policing</span>.
          </p>
        </Card>
      </div>
    </div>
  );
}
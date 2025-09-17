// ListOfOfficers.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users } from "lucide-react";
import { useNavigate } from "react-router";

export default function ListOfOfficers() {
        const navigate = useNavigate();
      const goBack = () => navigate(-1);
  const officerData = [
    { sr: 1, designation: "Addl. DGP & Director Police Communication, Information Technology & Transportation, M.S. Pune", posts: 1 },
    { sr: 2, designation: "Deputy Inspector General of Police Communication & Information Technology, M.S. Pune", posts: 1 },
    { sr: 3, designation: "Additional Commissioner of Police Communication & Information Technology, M.S. Mumbai", posts: 1 },
    { sr: 4, designation: "Supdt. Of Police Communication & Information Technology", posts: 5 },
    { sr: 5, designation: "Deputy Commissioner of Police Communication & Information Technology", posts: 2 },
    { sr: 6, designation: "Deputy Supdt. Of Police /Asst. Commissioner of Police", posts: 37 },
    { sr: 7, designation: "Police Inspector (PI)", posts: 179 },
    { sr: 8, designation: "Police Sub – Inspector (PSI)", posts: 426 },
    { sr: 9, designation: "ASI ( Senior Technical Officer)", posts: 874 },
    { sr: 10, designation: "HC ( Technical Officer)", posts: 1958 },
    { sr: 11, designation: "ASI ( Senior Technical Assistant)", posts: 8 },
    { sr: 12, designation: "HC ( Technical Assistant Grade II)", posts: 24 },
    { sr: 13, designation: "PN ( Technical Assistant Grade I)", posts: 73 },
    { sr: 14, designation: "PC ( Technical Assistant)", posts: 247 },
    { sr: 15, designation: "ASI (Driver)", posts: 1 },
    { sr: 16, designation: "HC (Driver)", posts: 4 },
    { sr: 17, designation: "PN (Driver)", posts: 10 },
    { sr: 18, designation: "PC (Driver)", posts: 18 },
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
            List of Officers
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-600">
            Comprehensive list of officers and employees with designations and sanctioned posts
          </h2>
        </div>

        {/* Officers Table */}
        <Card className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl overflow-hidden">
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse text-gray-900">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-4 py-3 border-b-2 border-gray-300 text-left">SR NO</th>
                    <th className="px-4 py-3 border-b-2 border-gray-300 text-left">DESIGNATION</th>
                    <th className="px-4 py-3 border-b-2 border-gray-300 text-left">SANCTION POSTS</th>
                  </tr>
                </thead>
                <tbody>
                  {officerData.map((officer) => (
                    <tr key={officer.sr} className="even:bg-white/20 hover:bg-blue-50 transition-colors">
                      <td className="px-4 py-3 font-semibold">{officer.sr}</td>
                      <td className="px-4 py-3">{officer.designation}</td>
                      <td className="px-4 py-3 font-semibold">{officer.posts}</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-200 font-bold">
                    <td className="px-4 py-3 text-center" colSpan={2}>
                      SUMMARY TOTAL
                    </td>
                    <td className="px-4 py-3 text-center">3888</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Highlight / Note Card */}
        <Card className="bg-gradient-to-r from-violet-400/20 via-blue-400/20 to-teal-400/20 p-6 rounded-3xl border border-white/20 shadow-inner text-center">
          <div className="flex items-center justify-center gap-3">
            <Users className="w-6 h-6 text-blue-500" />
            <p className="text-xl md:text-2xl font-bold text-gray-900">
              The above table represents the sanctioned strength and hierarchy of the Maharashtra Police Communication & IT Department. All data is updated as per latest official records.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

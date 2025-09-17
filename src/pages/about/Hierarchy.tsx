import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function Hierarchy() {
    const navigate = useNavigate();
    const onBack = () => navigate("/");
  const hierarchyData = [
    { sr: 1, designation: "Addl. DGP & Director Police Communication, Information Technology & Transportation, M.S. Pune", posts: 1, role: "Oversees the entire department, sets strategic direction, and ensures coordination across Maharashtra State Police IT and communication functions." },
    { sr: 2, designation: "Deputy Inspector General of Police Communication & Information Technology, M.S. Pune", posts: 1, role: "Assists the Director in managing statewide communication and IT initiatives, supervising technical and administrative operations." },
    { sr: 3, designation: "Additional Commissioner of Police Communication & Information Technology, M.S. Mumbai", posts: 1, role: "Leads Mumbai operations, ensures secure communication networks, and manages critical IT infrastructure." },
    { sr: 4, designation: "Supdt. Of Police Communication & Information Technology", posts: 5, role: "Supervises field units, monitors wireless systems, and coordinates departmental activities." },
    { sr: 5, designation: "Deputy Commissioner of Police Communication & Information Technology", posts: 2, role: "Oversees technical units and provides operational guidance on communications systems." },
    { sr: 6, designation: "Deputy Supdt. Of Police /Asst. Commissioner of Police", posts: 37, role: "Handles day-to-day technical operations, staff assignments, and troubleshooting." },
    { sr: 7, designation: "Police Inspector (PI)", posts: 179, role: "Supervises teams, monitors field communications, and ensures protocol compliance." },
    { sr: 8, designation: "Police Sub – Inspector (PSI)", posts: 426, role: "Maintains wireless networks, supports investigations, and reports technical issues." },
    { sr: 9, designation: "ASI ( Senior Technical Officer)", posts: 874, role: "Leads technical projects, performs system audits, and trains junior staff." },
    { sr: 10, designation: "HC ( Technical Officer)", posts: 1958, role: "Operates and maintains technical equipment, supports wireless and IT operations." },
    { sr: 11, designation: "ASI ( Senior Technical Assistant)", posts: 8, role: "Assists senior officers in technical tasks and system maintenance." },
    { sr: 12, designation: "HC ( Technical Assistant Grade II)", posts: 24, role: "Handles administrative support and technical documentation." },
    { sr: 13, designation: "PN ( Technical Assistant Grade I)", posts: 73, role: "Performs day-to-day technical assistance and monitoring duties." },
    { sr: 14, designation: "PC ( Technical Assistant)", posts: 247, role: "Supports operations under supervision, assists with communications tasks." },
    { sr: 15, designation: "ASI (Driver)", posts: 1, role: "Provides transportation support for high-ranking officers." },
    { sr: 16, designation: "HC ( Driver)", posts: 4, role: "Ensures reliable transport for staff and equipment." },
    { sr: 17, designation: "PN (Driver)", posts: 10, role: "Supports vehicle operations and logistical tasks." },
    { sr: 18, designation: "PC (Driver)", posts: 18, role: "Handles routine driving duties and transport coordination." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-violet-400/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center text-gray-700 hover:text-violet-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-md">
          Hierarchy
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-6">
          Maharashtra State Police Communication & Information Technology Strength Chart
        </h2>

        {/* Card */}
        <Card className="bg-white border border-gray-200 shadow-xl backdrop-blur-sm rounded-3xl overflow-x-auto hover:shadow-violet-200 transition-all duration-500">
          <CardContent className="p-10 space-y-10">
            <table className="w-full text-left table-auto border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-violet-200 via-blue-200 to-teal-200 text-gray-800">
                  <th className="py-3 px-4 font-semibold text-lg">SR NO</th>
                  <th className="py-3 px-4 font-semibold text-lg">Designation</th>
                  <th className="py-3 px-4 font-semibold text-lg">Sanction Posts</th>
                </tr>
              </thead>
              <tbody>
                {hierarchyData.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`transition-all duration-300 ${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                    } hover:bg-violet-50`}
                  >
                    <td className="py-3 px-4 font-medium text-gray-700">{item.sr}</td>
                    <td className="py-3 px-4">
                      <span className="font-semibold text-violet-600">{item.designation}</span>
                      <p className="text-gray-600 text-sm mt-1">{item.role}</p>
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-700">{item.posts}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Summary */}
            <div className="mt-6 text-center bg-gradient-to-r from-purple-100 via-blue-100 to-teal-100 p-6 rounded-2xl border border-gray-200 shadow-inner">
              <p className="text-xl font-bold text-gray-800">
                <span className="text-violet-600">Total Strength:</span> 3,888 sanctioned posts
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

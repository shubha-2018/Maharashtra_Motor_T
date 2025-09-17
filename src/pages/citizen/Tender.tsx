import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";

export default function Tenders() {
  const activeTenders = [
    {
      ref: "TDR-2025-001",
      title: "Procurement of Digital Mobile Radios",
      deadline: "30 September 2025",
      documentLink: "#",
      description: "Supply of high-performance digital mobile radios for state-wide police communication."
    },
    {
      ref: "TDR-2025-002",
      title: "Diesel Generators for Training Centres",
      deadline: "15 October 2025",
      documentLink: "#",
      description: "Procurement of diesel generators to ensure uninterrupted power supply at Training Centres."
    }
  ];

  const archivedTenders = [
    {
      ref: "TDR-2024-045",
      title: "Wireless Equipment Spares",
      closedOn: "10 August 2025",
      documentLink: "#"
    },
    {
      ref: "TDR-2024-046",
      title: "Computers & Networking Equipment",
      closedOn: "25 July 2025",
      documentLink: "#"
    }
  ];

  const procurementInfo = [
    {
      title: "General Procurement Details",
      description: "All procurement processes are handled by the 'D' Branch, including procurement of spares and accessories via the GEM portal."
    },
    {
      title: "Technical Specifications",
      description: "Specifications for equipment such as Digital Mobile Radios, Repeaters, Antennas, Computers, and Telephone Exchanges are prepared and evaluated by the R&D section."
    },
    {
      title: "Auction Notices",
      description: "Information on auctions of condemned or unserviceable equipment (wireless sets, batteries) conducted by the Central Store."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Back to Home Button */}
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
        className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
      </Button>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-6">
        Tenders & Procurement
      </h1>
      <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12">
        Official procurement notices and contract opportunities for the Maharashtra Police Wireless Department
      </h2>

      {/* Active Tenders */}
      <h3 className="text-3xl font-bold text-blue-500 mb-6">Active Tenders</h3>
      <div className="space-y-6 mb-12">
        {activeTenders.map((tender, idx) => (
          <Card
            key={idx}
            className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500"
          >
            <CardContent className="p-8 space-y-3">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <h4 className="text-2xl font-bold text-blue-500">{tender.title}</h4>
              </div>
              <p className="text-gray-800"><span className="font-semibold">Tender Ref:</span> {tender.ref}</p>
              <p className="text-gray-800"><span className="font-semibold">Deadline:</span> {tender.deadline}</p>
              <p className="text-gray-800">{tender.description}</p>
              <a
                href={tender.documentLink}
                className="text-blue-600 font-semibold underline hover:text-blue-400 transition-colors duration-300"
              >
                View Tender Document
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Archived Tenders */}
      <h3 className="text-3xl font-bold text-blue-500 mb-6">Archived / Completed Tenders</h3>
      <div className="space-y-6 mb-12">
        {archivedTenders.map((tender, idx) => (
          <Card
            key={idx}
            className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-gray-400/20 transition-all duration-500"
          >
            <CardContent className="p-6 space-y-2">
              <h4 className="text-xl font-semibold text-gray-800">{tender.title}</h4>
              <p className="text-gray-800"><span className="font-semibold">Tender Ref:</span> {tender.ref}</p>
              <p className="text-gray-800"><span className="font-semibold">Closed On:</span> {tender.closedOn}</p>
              <a
                href={tender.documentLink}
                className="text-blue-600 font-semibold underline hover:text-blue-400 transition-colors duration-300"
              >
                View Tender Document
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Procurement Info */}
      <h3 className="text-3xl font-bold text-blue-500 mb-6">Tender-Related Information</h3>
      <div className="space-y-6">
        {procurementInfo.map((item, idx) => (
          <Card
            key={idx}
            className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-green-400/20 transition-all duration-500"
          >
            <CardContent className="p-8 space-y-4">
              <h4 className="text-2xl font-bold text-green-500">{item.title}</h4>
              <p className="text-gray-800 text-lg leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

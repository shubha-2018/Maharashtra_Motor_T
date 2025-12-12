// import React from "react";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { Eye, Download } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const TrainingCalender: React.FC = () => {
//   const { language } = useLanguage();

//   const text = {
//     en: {
//       title: "Training Calendar - 2025",
//       srNo: "Sr. No.",
//       courseName: "Name of Course",
//       duration: "Duration",
//       dateFrom: "Date From",
//       dateTo: "Date To",
//       eligibility: "Eligibility Level",
//       coordinator: "Course Coordinator",
//       actions: "View / Download",          // ← यहीं पर साफ़-साफ़ लिखा है
//       view: "View",
//       download: "Download",
//       noData: "No training scheduled yet.",
//     },
//     mr: {
//       title: "प्रशिक्षण दिनदर्शिका - २०२५",
//       srNo: "अ. क्र.",
//       courseName: "अभ्यासक्रमाचे नाव",
//       duration: "कालावधी",
//       dateFrom: "प्रारंभ तारीख",
//       dateTo: "समाप्ती तारीख",
//       eligibility: "पात्रता स्तर",
//       coordinator: "समन्वयक",
//       actions: "पहा / डाउनलोड",            // ← मराठी में भी साफ़ लिखा है
//       view: "पहा",
//       download: "डाउनलोड",
//       noData: "अद्याप कोणतेही प्रशिक्षण निश्चित नाही.",
//     },
//   };

//   const t = text[language];

//   const trainings = [
//     {
//       id: 1,
//       name: "Cyber Security Basics",
//       duration: "3 Weeks",
//       from: "01-03-2025",
//       to: "22-03-2025",
//       eligibility: "All Police Officers",
//       coordinator: "Shri. ABC",
//       pdfUrl: "/pdfs/cyber-security-basics-2025.pdf",
//       fileSize: "1.8 MB",
//     },
//     {
//       id: 2,
//       name: "Communication & Soft Skills Training",
//       duration: "2 Weeks",
//       from: "10-04-2025",
//       to: "24-04-2025",
//       eligibility: "Technical Staff",
//       coordinator: "Smt. XYZ",
//       pdfUrl: "/pdfs/communication-training-2025.pdf",
//       fileSize: "2.1 MB",
//     },
//     {
//       id: 3,
//       name: "Advanced Forensics Workshop",
//       duration: "1 Week",
//       from: "05-06-2025",
//       to: "11-06-2025",
//       eligibility: "Investigating Officers",
//       coordinator: "Shri. PQR",
//       pdfUrl: "/pdfs/forensics-workshop-2025.pdf",
//       fileSize: "3.4 MB",
//     },
//   ];

//   const handleView = (url: string) => {
//     window.open(url, "_blank");
//   };

//   const handleDownload = (url: string, filename: string) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = filename;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="p-4 md:p-8">
//       <h2 className="text-3xl font-bold text-center mb-8 text-blue-900 dark:text-blue-300">
//         {t.title}
//       </h2>

//       <div className="overflow-x-auto shadow-2xl rounded-lg border border-gray-200 dark:border-gray-700">
//         <table className="w-full table-auto border-collapse bg-white dark:bg-gray-800">
//           <thead className="bg-gradient-to-r from-blue-800 to-blue-950 text-white">
//             <tr>
//               <th className="px-4 py-4 text-center text-sm font-bold">{t.srNo}</th>
//               <th className="px-4 py-4 text-left text-sm font-bold">{t.courseName}</th>
//               <th className="px-4 py-4 text-center text-sm font-bold">{t.duration}</th>
//               <th className="px-4 py-4 text-center text-sm font-bold">{t.dateFrom}</th>
//               <th className="px-4 py-4 text-center text-sm font-bold">{t.dateTo}</th>
//               <th className="px-4 py-4 text-center text-sm font-bold">{t.eligibility}</th>
//               <th className="px-4 py-4 text-center text-sm font-bold">{t.coordinator}</th>
//               <th className="px-4 py-4 text-center text-sm font-bold whitespace-nowrap">
//                 {t.actions}  {/* ← अब साफ़ दिख रहा है */}
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {trainings.length === 0 ? (
//               <tr>
//                 <td colSpan={8} className="text-center py-12 text-gray-500">
//                   {t.noData}
//                 </td>
//               </tr>
//             ) : (
//               trainings.map((course) => (
//                 <tr
//                   key={course.id}
//                   className="border-b dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200"
//                 >
//                   <td className="px-4 py-4 text-center font-medium">{course.id}</td>
//                   <td className="px-4 py-4 font-medium">{course.name}</td>
//                   <td className="px-4 py-4 text-center">{course.duration}</td>
//                   <td className="px-4 py-4 text-center">{course.from}</td>
//                   <td className="px-4 py-4 text-center">{course.to}</td>
//                   <td className="px-4 py-4 text-center text-sm">{course.eligibility}</td>
//                   <td className="px-4 py-4 text-center">{course.coordinator}</td>
//                   <td className="px-4 py-4 text-center">
//                     <div className="flex justify-center items-center gap-3">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center gap-1.5"
//                         onClick={() => handleView(course.pdfUrl)}
//                       >
//                         <Eye className="w-4 h-4" />
//                         <span className="hidden sm:inline">{t.view}</span>
//                       </Button>

//                       <Button
//                         size="sm"
//                         className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1.5"
//                         onClick={() =>
//                           handleDownload(course.pdfUrl, `${course.name.replace(/ /g, "_")}_2025.pdf`)
//                         }
//                       >
//                         <Download className="w-4 h-4" />
//                         <span className="hidden sm:inline">{t.download}</span>
//                       </Button>
//                     </div>
//                     <div className="text-xs text-gray-500 mt-2 sm:hidden">
//                       {course.fileSize}
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
//         <p>
//           {language === "en"
//             ? "All training brochures are available in PDF format."
//             : "सर्व प्रशिक्षण ब्रोशर PDF स्वरूपात उपलब्ध आहेत."}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TrainingCalender;


// import React from "react";
// import { Download } from "lucide-react";

// const TrainingCalendar: React.FC = () => {
//   // ----------------------------------------------
//   // TRAINING CALENDAR DATA
//   // ----------------------------------------------
//   const trainingCalendar = [
//     {
//       id: 1,
//       name: "Cyber Security Basics",
//       duration: "10 Days",
//       dateFrom: "2025-01-10",
//       dateTo: "2025-01-20",
//       eligibility: "All Officers",
//       coordinator: "",
//       file: "/pdfs/training calender 2025.pdf",
//     },
//     {
//       id: 2,
//       name: "Radio Communication Training",
//       duration: "12 Days",
//       dateFrom: "2026-02-05",
//       dateTo: "2026-02-17",
//       eligibility: "All Staff",
//       coordinator: "",
//       file: "/pdfs/training calender 2026.pdf",
//     },
//   ];

//   // ----------------------------------------------
//   // TRAINING SCHEDULES DATA
//   // ----------------------------------------------
//   const trainingSchedules = [
//     {
//       id: 1,
//       name: "Leadership Development Program",
//       duration: "5 Days",
//       dateFrom: "2025-03-01",
//       dateTo: "2025-03-05",
//       eligibility: "Senior Officers",
//       coordinator: "",
//       file: "/pdfs/leadership-training.pdf",
//     },
//     {
//       id: 2,
//       name: "Advanced Technical Training",
//       duration: "15 Days",
//       dateFrom: "2025-04-10",
//       dateTo: "2025-04-25",
//       eligibility: "Technical Staff",
//       coordinator: "",
//       file: "/pdfs/technical-training.pdf",
//     },
//   ];

//   // Fix for filenames with spaces
//   const getFileUrl = (path: string) => {
//     const parts = path.split("/");
//     const filename = encodeURIComponent(parts.pop() as string);
//     return `${parts.join("/")}/${filename}`;
//   };

//   const handleDownload = (url: string) => {
//     const encodedUrl = getFileUrl(url);
//     const a = document.createElement("a");
//     a.href = encodedUrl;
//     a.download = encodedUrl.split("/").pop() || "document.pdf";
//     a.click();
//   };

//   const renderTable = (data: any[], title: string) => (
//     <div className="mb-12">
//       {/* Header */}
//       <div className="text-center mb-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
//           {title}
//         </h2>
//         <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
//       </div>

//       {/* Table Container */}
//       <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white">
//                 <th className="px-6 py-4 text-center text-sm font-semibold tracking-wide">
//                   Sr. No.
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold tracking-wide">
//                   Name of Course
//                 </th>
//                 <th className="px-6 py-4 text-center text-sm font-semibold tracking-wide">
//                   Duration
//                 </th>
//                 <th className="px-6 py-4 text-center text-sm font-semibold tracking-wide">
//                   Date From
//                 </th>
//                 <th className="px-6 py-4 text-center text-sm font-semibold tracking-wide">
//                   Date To
//                 </th>
//                 <th className="px-6 py-4 text-center text-sm font-semibold tracking-wide">
//                   Eligibility Level
//                 </th>
//                 <th className="px-6 py-4 text-center text-sm font-semibold tracking-wide">
//                   Course Coordinator
//                 </th>
//                 <th className="px-6 py-4 text-center text-sm font-semibold tracking-wide">
//                   Download
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-100">
//               {data.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan={8}
//                     className="px-6 py-16 text-center text-gray-400 text-lg"
//                   >
//                     No Data Available
//                   </td>
//                 </tr>
//               ) : (
//                 data.map((row, index) => (
//                   <tr
//                     key={row.id}
//                     className="hover:bg-blue-50 transition-colors duration-150 group"
//                   >
//                     <td className="px-6 py-4 text-center text-gray-700 font-medium">
//                       {index + 1}
//                     </td>
//                     <td className="px-6 py-4 text-gray-800 font-medium">
//                       {row.name}
//                     </td>
//                     <td className="px-6 py-4 text-center text-gray-700">
//                       {row.duration}
//                     </td>
//                     <td className="px-6 py-4 text-center text-gray-700">
//                       {row.dateFrom}
//                     </td>
//                     <td className="px-6 py-4 text-center text-gray-700">
//                       {row.dateTo}
//                     </td>
//                     <td className="px-6 py-4 text-center text-gray-700">
//                       {row.eligibility}
//                     </td>
//                     <td className="px-6 py-4 text-center text-gray-700">
//                       {row.coordinator || "-"}
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex justify-center">
//                         <button
//                           onClick={() => handleDownload(row.file)}
//                           className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-110"
//                           title="Download"
//                         >
//                           <Download size={18} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Footer Info */}
//       <div className="mt-4 text-center text-sm text-gray-500">
//         Total Courses: <span className="font-semibold text-blue-700">{data.length}</span>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Training Calendar Table */}
//         {renderTable(trainingCalendar, "Training Calendar")}

//         {/* Training Schedules Table */}
//         {renderTable(trainingSchedules, "Training Schedules")}
//       </div>
//     </div>
//   );
// };

// export default TrainingCalendar;


import React from "react";
import { Download } from "lucide-react";

const TrainingCalendar: React.FC = () => {
  // ----------------------------------------------
  // TRAINING CALENDAR DATA
  // ----------------------------------------------
  const trainingCalendar = [
    {
      id: 1,
      year: "2025",
      file: "/pdfs/training calender 2025.pdf",
    },
    {
      id: 2,
      year: "2026",
      file: "/pdfs/Traing Centre Calender 2026 (1).pdf",
    },
  ];

  // ----------------------------------------------
  // TRAINING SCHEDULE TABLE DATA
  // ----------------------------------------------
  const trainingSchedules = [
    {
      id: 1,
      name: "Leadership Development Program",
      duration: "5 Days",
      dateFrom: "2025-03-01",
      dateTo: "2025-03-05",
      eligibility: "Senior Officers",
      coordinator: "",
      file: "/pdfs/leadership-training.pdf",
    },
    {
      id: 2,
      name: "Advanced Technical Training",
      duration: "15 Days",
      dateFrom: "2025-04-10",
      dateTo: "2025-04-25",
      eligibility: "Technical Staff",
      coordinator: "",
      file: "/pdfs/technical-training.pdf",
    },
  ];

  // ----------------------------------------------
  // Encode URLs properly to handle spaces and special characters
  // ----------------------------------------------
  const getFileUrl = (path: string) => {
    const parts = path.split("/");
    const filename = encodeURIComponent(parts.pop() as string);
    return `${parts.join("/")}/${filename}`;
  };

  // ----------------------------------------------
  // Download PDF
  // ----------------------------------------------
  const handleDownload = (url: string) => {
    const encodedUrl = getFileUrl(url);
    const link = document.createElement("a");
    link.href = encodedUrl;
    link.download = encodedUrl.split("/").pop() || "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ----------------------------------------------
  // Render Training Calendar Table
  // ----------------------------------------------
  const renderCalendarTable = () => (
    <div className="mb-12">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          Training Calendar
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white">
              <th className="px-6 py-4 text-center font-semibold">Sr. No.</th>
              <th className="px-6 py-4 text-center font-semibold">Year</th>
              <th className="px-6 py-4 text-center font-semibold">View</th>
              <th className="px-6 py-4 text-center font-semibold">Download</th>
            </tr>
          </thead>

          <tbody>
            {trainingCalendar.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-12 text-gray-400">
                  No Data Available
                </td>
              </tr>
            ) : (
              trainingCalendar.map((row, index) => (
                <tr
                  key={row.id}
                  className="hover:bg-blue-50 transition duration-150"
                >
                  <td className="px-6 py-4 text-center">{index + 1}</td>
                  <td className="px-6 py-4 text-center">{row.year}</td>

                  {/* View PDF */}
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() =>
                        window.open(
                          getFileUrl(row.file),
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white shadow hover:scale-110 transition"
                      title="View"
                    >
                      👁
                    </button>
                  </td>

                  {/* Download PDF */}
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleDownload(row.file)}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white shadow hover:scale-110 transition"
                    >
                      <Download size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        Total Records:{" "}
        <span className="font-semibold text-blue-700">
          {trainingCalendar.length}
        </span>
      </div>
    </div>
  );

  // ----------------------------------------------
  // Render Training Schedule Table
  // ----------------------------------------------
  const renderScheduleTable = () => (
    <div className="mb-12">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          Training Schedules
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-800 to-blue-950 text-white">
              <th className="px-6 py-4 text-center font-semibold">Sr. No.</th>
              <th className="px-6 py-4 font-semibold">Name of Course</th>
              <th className="px-6 py-4 text-center font-semibold">Duration</th>
              <th className="px-6 py-4 text-center font-semibold">Date From</th>
              <th className="px-6 py-4 text-center font-semibold">Date To</th>
              <th className="px-6 py-4 text-center font-semibold">Eligibility</th>
              <th className="px-6 py-4 text-center font-semibold">Coordinator</th>
              <th className="px-6 py-4 text-center font-semibold">Download</th>
            </tr>
          </thead>

          <tbody>
            {trainingSchedules.map((row, index) => (
              <tr key={row.id} className="hover:bg-blue-50">
                <td className="px-6 py-4 text-center">{index + 1}</td>
                <td className="px-6 py-4">{row.name}</td>
                <td className="px-6 py-4 text-center">{row.duration}</td>
                <td className="px-6 py-4 text-center">{row.dateFrom}</td>
                <td className="px-6 py-4 text-center">{row.dateTo}</td>
                <td className="px-6 py-4 text-center">{row.eligibility}</td>
                <td className="px-6 py-4 text-center">{row.coordinator || "-"}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleDownload(row.file)}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition"
                  >
                    <Download size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        Total Courses:{" "}
        <span className="font-semibold text-blue-700">
          {trainingSchedules.length}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {renderCalendarTable()}
        {renderScheduleTable()}
      </div>
    </div>
  );
};

export default TrainingCalendar;

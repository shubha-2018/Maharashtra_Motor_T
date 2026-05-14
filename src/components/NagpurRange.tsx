import React from "react";
// import { useLanguageContext } from "@/context/LanguageContext";
import { useLanguageContext } from "../contexts/LanguageContext";

const NagpurRange: React.FC = () => {
  const { language } = useLanguageContext();

  const data = [
    { sr: 1, commissionerate: { marathi: "पोलीस मध्यवर्ती मोटार परिवहन कर्मशाळा, नागपूर", english: "Police Central Motor Transport Workshop, Nagpur" }, officerName: { marathi: "-", english: "Vacant" }, designation: { marathi: "पोलीस उप-अधीक्षक", english: "Deputy Superintendent of Police" }, contact: "" },
    { sr: 2, commissionerate: { marathi: "मोटार परिवहन विभाग, नागपूर शहर", english: "Nagpur City" }, officerName: { marathi: "युवराजसिंह ठाकुर", english: "Yuvrajsingh Thakur" }, designation: { marathi: "सहाय्यक पोलीस आयुक्त", english: "Assistant Police Commissioner" }, contact: "9923047786" },
    { sr: 3, commissionerate: { marathi: "पूर्व परिमंडळ", english: "East Division" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस उप-अधीक्षक", english: "Deputy Superintendent of Police" }, contact: "" },
    { sr: 4, commissionerate: { marathi: "मोटार परिवहन विभाग, अमरावती शहर", english: "Amravati City" }, officerName: { marathi: "संजय बोरेकर", english: "Sanjay Borekar" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "9423913995" },
    { sr: 5, commissionerate: { marathi: "मोटार परिवहन विभाग, नागपूर ग्रामीण", english: "Nagpur Rural" }, officerName: { marathi: "महेश मुंढे", english: "Mahesh Mundhe" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "9923405464" },
    { sr: 6, commissionerate: { marathi: "मोटार परिवहन विभाग, अमरावती ग्रामीण", english: "Amravati Rural" }, officerName: { marathi: "संजय पवार", english: "Sanjay Pawar" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "9423913995" },
    { sr: 7, commissionerate: { marathi: "मोटार परिवहन विभाग, वर्धा", english: "Wardha" }, officerName: { marathi: "देवानंद पाटील", english: "Devanand Patil" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "9511898519" },
    { sr: 8, commissionerate: { marathi: "मोटार परिवहन विभाग, चंद्रपूर", english: "Chandrapur" }, officerName: { marathi: "सचिन पवार", english: "Sachin Pawar" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 9, commissionerate: { marathi: "मोटार परिवहन विभाग, गोंदिया", english: "Gondia" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 10, commissionerate: { marathi: "मोटार परिवहन विभाग, भंडारा", english: "Bhandara" }, officerName: { marathi: "राजेश लाबडे", english: "Rajesh Labde" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "7020698188" },
    { sr: 11, commissionerate: { marathi: "मोटार परिवहन विभाग, वाशिम", english: "Washim" }, officerName: { marathi: "", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 12, commissionerate: { marathi: "मोटार परिवहन विभाग, गडचिरोली", english: "Gadchiroli" }, officerName: { marathi: "विवेक पांडव", english: "Vivek Pandav" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "9881748264" },
    { sr: 13, commissionerate: { marathi: "मोटार परिवहन विभाग, यवतमाळ", english: "Yavatmal" }, officerName: { marathi: "राहुल ढवळे", english: "Rahul Dhavale" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "9421958318" },
    { sr: 14, commissionerate: { marathi: "मोटार परिवहन विभाग, अकोला", english: "Akola" }, officerName: { marathi: "", english: "Vacant" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 15, commissionerate: { marathi: "मोटार परिवहन विभाग, रेल्वे नागपूर", english: "Railway Nagpur" }, officerName: { marathi: "", english: "Vacant" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 16, commissionerate: { marathi: "स्पेशल अ‍ॅक्शन फोर्स, नागपूर", english: "Special Action Force, Nagpur" }, officerName: { marathi: "", english: "Vacant" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 17, commissionerate: { marathi: "SRPF ग्रुप 4, नागपूर", english: "SRPF Group 4, Nagpur" }, officerName: { marathi: "", english: "Vacant" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 18, commissionerate: { marathi: "SRPF ग्रुप 9, अमरावती", english: "SRPF Group 9, Amravati" }, officerName: { marathi: "", english: "Vacant" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 19, commissionerate: { marathi: "SRPF ग्रुप 13, गडचिरोली", english: "SRPF Group 13, Gadchiroli" }, officerName: { marathi: "", english: "Vacant" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 20, commissionerate: { marathi: "SRPF ग्रुप 15, गोंदिया", english: "SRPF Group 15, Gondia" }, officerName: { marathi: "", english: "Vacant" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 21, commissionerate: { marathi: "SRPF ग्रुप 17, चंद्रपूर", english: "SRPF Group 17, Chandrapur" }, officerName: { marathi: "", english: "Vacant" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 22, commissionerate: { marathi: "SRPF ग्रुप 18, काटोल", english: "SRPF Group 18, Katol" }, officerName: { marathi: "", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 23, commissionerate: { marathi: "SDRF महाराष्ट्र राज्य कार्यालय, नागपूर", english: "SDRF Maharashtra State Office, Nagpur" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 24, commissionerate: { marathi: "पोलीस प्रशिक्षण केंद्र, अकोला", english: "Police Training Centre, Akola" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 25, commissionerate: { marathi: "पोलीस प्रशिक्षण केंद्र, नागपूर", english: "Police Training Centre, Nagpur" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 26, commissionerate: { marathi: "पोलीस प्रशिक्षण केंद्र, सुराबर्डी, नागपूर", english: "Police Training Centre, Surabardi, Nagpur" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
  ];

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          {language === "marathi" ? "पोलीस मोटार परिवहन नागपूर परिक्षेत्र" : "POLICE MOTOR TRANSPORT NAGPUR RANGE"}
        </h1>

        <div className="overflow-x-auto shadow-md rounded-lg border border-gray-300">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-blue-600">
                <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500 w-16">{language === "marathi" ? "अ.क्र" : "Sr.No."}</th>
                <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">{language === "marathi" ? "मोटार परिवहन विभागाचे नाव" : "Commissionerate"}</th>
                <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">{language === "marathi" ? "प्रभारी अधिकारी पदनाम" : "Designation"}</th>
                <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">{language === "marathi" ? "प्रभारी अधिकाऱ्याचे नाव" : "Officer Name"}</th>
                <th className="px-4 py-3 text-white font-semibold text-left">{language === "marathi" ? "संपर्क क्रमांक" : "Contact Number"}</th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-blue-100" : "bg-white"} border-b border-gray-300`}>
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300 font-medium">{row.sr}</td>
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300">{language === "marathi" ? row.commissionerate.marathi : row.commissionerate.english}</td>
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300">{language === "marathi" ? row.designation.marathi : row.designation.english}</td>
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300">
                    {language === "marathi"
                      ? row.officerName.marathi || <span className="text-red-600 font-medium bg-red-100 px-2 py-1 rounded">-</span>
                      : row.officerName.english || <span className="text-red-600 font-medium bg-red-100 px-2 py-1 rounded">-</span>}
                  </td>
                  <td className="px-4 py-3 text-gray-900">{row.contact || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NagpurRange;

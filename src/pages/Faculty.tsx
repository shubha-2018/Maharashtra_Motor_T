import React from 'react';
import { FileText, Eye, Download } from 'lucide-react';

export default function Faculty() {
  const documents = []; // Empty table for now

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
          <div className="flex items-center gap-3 text-white">
            <FileText className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Faculty</h1>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-100 border-b-2 border-blue-200">
                <th className="px-6 py-4 text-left text-blue-900 font-semibold">Sr. No.</th>
                <th className="px-6 py-4 text-left text-blue-900 font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-blue-900 font-semibold">Date</th>
                <th className="px-6 py-4 text-left text-blue-900 font-semibold">View</th>
                <th className="px-6 py-4 text-left text-blue-900 font-semibold">Download</th>
              </tr>
            </thead>
            <tbody>
              {documents.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 py-6 italic">
                    No records available
                  </td>
                </tr>
              ) : (
                documents.map((doc, index) => (
                  <tr
                    key={doc.id}
                    className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-700 font-medium">{doc.id}</td>
                    <td className="px-6 py-4 text-gray-800">{doc.title}</td>
                    <td className="px-6 py-4 text-gray-700">{doc.date}</td>
                    <td className="px-6 py-4">
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        <Eye className="w-5 h-5" />
                        View
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        <Download className="w-5 h-5" />
                        Download ({doc.size})
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

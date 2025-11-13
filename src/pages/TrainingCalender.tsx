import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function TrainingCalendar() {
  const [entries, setEntries] = useState([
    {
      id: 1,
      srNo: "1",
      subject: "",
      duration: "",
      dateFrom: "",
      dateTo: "",
      rank: "",
    },
  ]);

  // Add new blank row
  const addEntry = () => {
    const newEntry = {
      id: Date.now(),
      srNo: (entries.length + 1).toString(),
      subject: "",
      duration: "",
      dateFrom: "",
      dateTo: "",
      rank: "",
    };
    setEntries([...entries, newEntry]);
  };

  // Delete a row
  const deleteEntry = (id: number) => {
    const filtered = entries.filter((entry) => entry.id !== id);
    const reindexed = filtered.map((entry, index) => ({
      ...entry,
      srNo: (index + 1).toString(),
    }));
    setEntries(reindexed);
  };

  // Update a field in a row
  const updateEntry = (id: number, field: string, value: string) => {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Training Calendar
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-md">
            <thead className="bg-blue-50 border-b border-gray-300">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Sr.No
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Subject of Training
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Duration
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Date From
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  To
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Rank of Trainee
                </th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {entry.srNo}
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={entry.subject}
                      onChange={(e) =>
                        updateEntry(entry.id, "subject", e.target.value)
                      }
                      placeholder="Enter subject"
                      className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={entry.duration}
                      onChange={(e) =>
                        updateEntry(entry.id, "duration", e.target.value)
                      }
                      placeholder="e.g. 3 weeks"
                      className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="date"
                      value={entry.dateFrom}
                      onChange={(e) =>
                        updateEntry(entry.id, "dateFrom", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="date"
                      value={entry.dateTo}
                      onChange={(e) =>
                        updateEntry(entry.id, "dateTo", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={entry.rank}
                      onChange={(e) =>
                        updateEntry(entry.id, "rank", e.target.value)
                      }
                      placeholder="Enter rank"
                      className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => deleteEntry(entry.id)}
                      disabled={entries.length === 1}
                      className="text-red-600 hover:text-red-800 disabled:opacity-50"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-right">
          <button
            onClick={addEntry}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <Plus size={18} /> Add Row
          </button>
        </div>
      </div>
    </div>
  );
}

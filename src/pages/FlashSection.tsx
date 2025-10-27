import React from "react";
import { useNavigate } from "react-router-dom";

export default function FlashSection() {
  const navigate = useNavigate();

  const links = [
    { label: "Gradation List", path: "/gradation-list" },
    { label: "Transfer Orders", path: "/transfer-orders" },
    { label: "Promotion Orders", path: "/promotion-orders" },
    { label: "Press Release", path: "/press-release" },
    { label: "Other Flash", path: "/other-flash" },
  ];

  return (
    <div className="p-10">
      <div className="mb-6">
        <h1 className="text-4xl font-semibold text-[#1A0066] relative inline-block">
          Flash
          <span className="block w-20 h-[2px] bg-yellow-500 mt-1"></span>
        </h1>
      </div>

      <div className="border border-gray-200 rounded-lg shadow-sm">
        <div className="bg-[#1A0066] text-white px-6 py-4 flex items-center justify-between rounded-t-lg">
          <span className="font-semibold text-xl">Flash</span>
          <span className="text-2xl leading-none">−</span>
        </div>

        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center bg-white rounded-b-lg">
          {links.map((item, i) => (
            <button
              key={i}
              onClick={() => navigate(item.path)}
              className="border border-gray-400 px-10 py-4 rounded-md text-gray-600 hover:bg-gray-100 transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

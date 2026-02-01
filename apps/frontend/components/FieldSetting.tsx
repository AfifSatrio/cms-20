"use client";

import { useState } from "react";
import { ChevronDown, Settings } from "lucide-react";

export default function FieldSettings() {
  const [basicOpen, setBasicOpen] = useState(true);
  const [advanceOpen, setAdvanceOpen] = useState(false);

  return (
    <div className="w-[360px] bg-gray-200 border-l p-4 h-screen">
      
      {/* HEADER */}
      <div className="flex items-center gap-2 mb-4">
        <Settings size={18} />
        <h2 className="font-semibold text-sm">
          Setting Configurations
        </h2>
      </div>

      {/* BASIC CONFIG */}
      <div className="bg-gray-300 rounded-md mb-3">
        <button
          onClick={() => setBasicOpen(!basicOpen)}
          className="w-full flex justify-between items-center px-3 py-2 font-medium text-sm"
        >
          Basic Configurations
          <ChevronDown
            size={16}
            className={`transition ${basicOpen ? "rotate-180" : ""}`}
          />
        </button>

        {basicOpen && (
          <div className="px-3 pb-3 space-y-3">
            {/* NAME */}
            <div>
              <label className="text-xs font-medium">Name</label>
              <input className="w-full h-8 rounded px-2 text-sm" />
            </div>

            {/* API ID */}
            <div>
              <label className="text-xs font-medium">API id</label>
              <input className="w-full h-8 rounded px-2 text-sm" />
              <p className="text-[10px] text-gray-600 mt-1">
                It's generated automatically and used to generate API routes
              </p>
            </div>

            {/* REQUIRED */}
            <label className="flex gap-2 text-xs">
              <input type="checkbox" />
              Required
            </label>

            {/* UNIQUE */}
            <label className="flex gap-2 text-xs">
              <input type="checkbox" />
              Unique
            </label>
          </div>
        )}
      </div>

      {/* ADVANCE CONFIG */}
      <div className="bg-gray-300 rounded-md">
        <button
          onClick={() => setAdvanceOpen(!advanceOpen)}
          className="w-full flex justify-between items-center px-3 py-2 font-medium text-sm"
        >
          Advance Configuration
          <ChevronDown
            size={16}
            className={`transition ${advanceOpen ? "rotate-180" : ""}`}
          />
        </button>

        {advanceOpen && (
          <div className="px-3 pb-3 text-xs text-gray-700">
            (Advance settings here)
          </div>
        )}
      </div>
    </div>
  );
}

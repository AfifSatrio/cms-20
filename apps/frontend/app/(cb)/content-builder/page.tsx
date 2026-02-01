"use client";

import { Trash2 } from "lucide-react";

export default function ContentBuilderHome() {
  return (
    <div className="w-full h-full flex flex-col">

      {/* HEADER */}
      <div className="w-full flex flex-col px-8 pt-6">
        <p className="text-xs text-gray-500">Pages / Content Builder / Home</p>

        <div className="flex items-center justify-between mt-2">
          <div>
            <h1 className="text-3xl font-semibold">Home</h1>
            <p className="text-sm text-gray-600">Build your content structure</p>
          </div>

          <div className="flex gap-3">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg">
              Create Field Group
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Add Field
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT FULL WIDTH */}
      <div className="w-full px-8 mt-10 pb-20">
        <div className="w-full space-y-6">

          {[
            { label: "Text Field", type: "Short Text", iconColor: "bg-blue-500" },
            { label: "Hero Title", type: "Short Text", iconColor: "bg-blue-500" },
            { label: "Hero Image", type: "Short Text", iconColor: "bg-yellow-500" },
            { label: "Hero Desc", type: "Short Text", iconColor: "bg-blue-500" },
            { label: "About Company", type: "Short Text", iconColor: "bg-blue-500" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full bg-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <div className="text-gray-600 cursor-move">≡</div>

                <span
                  className={`${item.iconColor} text-white px-4 py-2 rounded-md`}
                >
                  Icon
                </span>

                <div className="flex flex-col">
                  <span className="font-medium text-gray-800">
                    {item.label}
                  </span>
                  <span className="text-xs text-gray-500">{item.type}</span>
                </div>
              </div>

              {/* DELETE */}
              <button>
                <Trash2 size={22} className="text-red-500 hover:text-red-600" />
              </button>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

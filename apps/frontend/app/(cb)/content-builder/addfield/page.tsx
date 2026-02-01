"use client";

import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FIELD_TYPES = [
  {
    type: "text",
    title: "Text Field",
    desc: "Used for short or long texts, such as titles, names, rich texts, etc."
  },
  {
    type: "location",
    title: "Location",
    desc: "Used for geographic data via address inputs or map coordinates."
  },
  {
    type: "media",
    title: "Media Field",
    desc: "Used for uploading and managing files like images, videos, audios or documents."
  },
  {
    type: "multiple",
    title: "Multiple Content",
    desc: "Used for managing multiple content, allowing flexible combinations components."
  },
  {
    type: "number",
    title: "Number Field",
    desc: "Used for numeric values with options for integers and decimals."
  },
  {
    type: "relation",
    title: "Relation",
    desc: "Used for linking entries across content types with configurable cardinality."
  },
  {
    type: "datetime",
    title: "Date and Time",
    desc: "Used for temporal data with calendar inputs, time, and configurable formatting."
  }
];

export default function AddFieldTypePage() {
  return (
    <div className="w-full h-full bg-white">

      {/* HEADER */}
      <div className="px-8 pt-6">
        <p className="text-xs text-gray-500">
          Pages / Content Builder / Home
        </p>

        <div className="flex items-start justify-between mt-3">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🏡</div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-semibold">Home</h1>

                {/* 3 DOT MENU */}
                <div className="relative group">
                  <MoreVertical className="cursor-pointer text-gray-500" />
                  <div className="absolute left-0 top-6 hidden group-hover:block bg-gray-200 rounded-md shadow-md text-sm w-48 z-50">
                    <Link
                      href="/content-builder/content-management"
                      className="block px-4 py-2 hover:bg-gray-300"
                    >
                      📁 To Content Management
                    </Link>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-300">
                      ✏️ Edit Page
                    </button>
                    <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-300">
                      🗑 Delete Page
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                Build your content structure
              </p>
            </div>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex gap-3">
            <Link href="/content-builder/createcomponent">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
                📁 Create Field Group
              </Button>
            </Link>

            <Link href="/content-builder/addfield">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                ➕ Add Field
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full px-10 py-8">
        <h1 className="text-2xl font-semibold mb-6">Add Field Type</h1>

        <div className="bg-gray-200 rounded-xl p-8">
          <div className="grid grid-cols-2 gap-6">

            {FIELD_TYPES.map((item) => (
              <Link
                key={item.type}
                href={`/content-builder/createsingle?type=${item.type}`}
                className="bg-white rounded-lg p-4 flex gap-4 shadow-sm cursor-pointer hover:shadow-md transition"
              >
                <div className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md">
                  Img
                </div>

                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>

    </div>
  );
}

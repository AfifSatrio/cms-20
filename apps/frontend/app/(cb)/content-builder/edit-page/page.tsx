"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import FieldSettings from "@/components/FieldSetting";

/* =====================
   TYPE DEFINITION
===================== */
type FieldItem = {
  id: string;
  title: string;
  type: string;
  color: string;
};

export default function EditPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const fields: FieldItem[] = [
    { id: "1", title: "Hero Title", type: "Short Text", color: "bg-blue-500" },
    { id: "2", title: "Hero Image", type: "Media", color: "bg-yellow-400" },
    { id: "3", title: "Hero Desc", type: "Long Text", color: "bg-sky-400" },
  ];

  return (
    <div className="w-full h-full bg-white flex">

      {/* ================= HEADER + LEFT CONTENT ================= */}
      <div className="flex-1">

        {/* HEADER */}
        <div className="px-8 pt-6 border-b pb-6">
          <p className="text-xs text-gray-500">
            Pages / Content Builder / Home
          </p>

          <div className="flex items-start justify-between mt-3">
            <div className="flex gap-3">
              <div className="text-3xl">🏡</div>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-semibold">Home</h1>

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

            <div className="flex gap-3">
              <Link href="/content-builder/createcomponent">
                <Button className="bg-purple-600 text-white px-6 py-3 rounded-lg">
                  📁 Create Field Group
                </Button>
              </Link>

              <Link href="/content-builder/addfield">
                <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                  ➕ Add Field
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* ================= FIELD LIST ================= */}
        <div className="px-8 py-8 space-y-3 max-w-4xl">
          {fields.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelected(index)}
              className={`cursor-pointer bg-gray-200 rounded-lg px-5 py-4 flex justify-between items-center
                ${selected === index ? "ring-2 ring-blue-500" : ""}`}
            >
              <div className="flex gap-4 items-center">
                <div className={`${item.color} w-10 h-10 rounded-md`} />

                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.type}</p>
                </div>
              </div>

              <Trash2 className="text-red-500 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT SETTINGS ================= */}
      {selected !== null && (
        <div className="w-[380px] border-l bg-gray-100">
          <FieldSettings />
        </div>
      )}
    </div>
  );
}

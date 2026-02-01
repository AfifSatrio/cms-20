"use client";

import { useState } from "react";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContentBuilderHomePage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full h-full bg-white">

      {/* HEADER */}
      <div className="px-8 pt-6">
        <p className="text-xs text-gray-500">
          Pages / Content Builder / Home
        </p>

        <div className="flex items-start justify-between mt-3">
          {/* LEFT */}
          <div className="flex items-start gap-3">
            <div className="text-3xl">🏡</div>

            <div>
              <div className="flex items-center gap-2 relative">
                <h1 className="text-3xl font-semibold">Home</h1>

                {/* 3 DOT MENU */}
                <div className="relative">
                  <MoreVertical
                    className="cursor-pointer text-gray-500"
                    onClick={() => setOpenMenu(!openMenu)}
                  />

                  {/* DROPDOWN */}
                  {openMenu && (
                    <div className="absolute left-0 top-6 bg-gray-200 rounded-md shadow-md text-sm w-48 z-50 overflow-hidden">

                      <Link
                        href="/content-builder/content-management"
                        className="block px-4 py-2 hover:bg-gray-300"
                        onClick={() => setOpenMenu(false)}
                      >
                        📁 To Content Management
                      </Link>

                      <Link
                        href="/content-builder/edit-page"
                        className="block px-4 py-2 hover:bg-gray-300"
                        onClick={() => setOpenMenu(false)}
                      >
                        ✏️ Edit Page
                      </Link>

                      <button
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-300"
                        onClick={() => {
                          setOpenMenu(false);
                          if (confirm("Are you sure you want to delete this page?")) {
                            console.log("DELETE PAGE");
                          }
                        }}
                      >
                        🗑 Delete Page
                      </button>

                    </div>
                  )}
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
      <div className="px-8 mt-10 pb-20">
        <div className="bg-gray-200 rounded-xl p-10 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-2">
            Create Component
          </h2>

        </div>
      </div>

    </div>
  );
}

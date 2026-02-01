"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

/* =========================
   BASIC CONFIG COMPONENT
========================= */
function BasicConfig() {
  return (
    <div className="space-y-4">

      {/* Page Name */}
      <div>
        <label className="font-semibold text-sm">Page Name</label>
        <div className="mt-1 flex gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded" />
          <input
            className="flex-1 h-10 bg-gray-300 rounded px-3"
            placeholder="Enter page name"
          />
        </div>
      </div>

      {/* API */}
      <div>
        <label className="font-semibold text-sm">API</label>
        <input
          className="w-full h-10 bg-gray-300 rounded px-3 mt-1"
        />
        <p className="text-xs text-gray-600 mt-1">
          It's generated automatically and used to generate API routes
        </p>
      </div>

    </div>
  );
}

/* =========================
   ADVANCED CONFIG COMPONENT
========================= */
function AdvancedConfig() {
  return (
    <div className="space-y-6">

      {/* Multi Language */}
      <div>
        <p className="text-sm font-semibold mb-2">Multi Language</p>
        <div className="flex items-start gap-3">
          <Switch />
          <p className="text-xs text-gray-600 leading-relaxed">
            Enable this feature to make this page support multiple languages.
            When activated, the page content can be displayed in different
            languages based on user preference.
          </p>
        </div>
      </div>

      {/* SEO */}
      <div>
        <p className="text-sm font-semibold mb-2">SEO</p>
        <div className="flex items-start gap-3">
          <Switch />
          <p className="text-xs text-gray-600 leading-relaxed">
            Enable this feature to activate SEO settings for this page.
            When turned on, you can optimize the page content for search engines
            and customize metadata to improve visibility in search results.
          </p>
        </div>
      </div>

      {/* Workflow */}
      <div>
        <p className="text-sm font-semibold mb-2">Workflow</p>
        <div className="flex items-start gap-3">
          <Switch />
          <p className="text-xs text-gray-600 leading-relaxed">
            Enable this feature to activate automated workflows for user
            interactions. When turned on, the system will automatically
            implement a structured approval request.
          </p>
        </div>
      </div>

    </div>
  );
}

/* =========================
   MAIN PAGE
========================= */
export default function CreateSinglePage() {
  const [tab, setTab] = useState<"basic" | "advanced">("basic");

  return (
    <div className="p-10 w-full max-w-4xl">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6">Create Single Page</h1>

      {/* TABS */}
      <div className="flex gap-6 mb-6 border-b pb-2">
        <button
          onClick={() => setTab("basic")}
          className={`font-medium pb-2 ${
            tab === "basic"
              ? "border-b-2 border-black"
              : "text-gray-500"
          }`}
        >
          Basic Configuration
        </button>

        <button
          onClick={() => setTab("advanced")}
          className={`font-medium pb-2 ${
            tab === "advanced"
              ? "border-b-2 border-black"
              : "text-gray-500"
          }`}
        >
          Advanced Configuration
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="bg-gray-100 p-6 rounded-lg">
        {tab === "basic" ? <BasicConfig /> : <AdvancedConfig />}
      </div>

      {/* SUBMIT BUTTON */}
      <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
        Create Page
      </button>

    </div>
  );
}

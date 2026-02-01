"use client";

import { Sidebar, SidebarContent } from "./ui/sidebar";
import Link from "next/link";
import { Home, Plus, Folder, Layers, ArrowLeft } from "lucide-react";

export default function ContentBuilderSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="p-4 space-y-4">

        {/* Header Logo + Title (Clickable to Dashboard) */}
        <Link
          href="/dashboard"
          className="p-3 flex items-center gap-3 rounded-xl hover:bg-blue-800/40 transition cursor-pointer"
        >
          <div className="bg-white p-3 w-fit text-black rounded-2xl">
            Logo
          </div>

          <div className="font-semibold text-white">
            <h1>CMS Project #20</h1>
          </div>
        </Link>

        {/* Title */}
        <div>
          <p className="text-sm font-semibold text-white/90 tracking-wide">
            Content Builder
          </p>
        </div>

        {/* Menu List */}
        <div className="space-y-3 text-white/90">

          <Link
            href="/content-builder/home"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>

          <Link
            href="/content-builder/createsingle"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            <Plus size={18} />
            <span>Create Single Page</span>
          </Link>

          <Link
            href="/content-builder/createmultiple"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            <Layers size={18} />
            <span>Create Multiple Page</span>
          </Link>

          <Link
            href="/content-builder/createfolder"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            <Folder size={18} />
            <span>Create Folder</span>
          </Link>

          <Link
            href="/content-builder/createcomponent"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            <Layers size={18} />
            <span>Create Component</span>
          </Link>
        </div>

      </SidebarContent>
    </Sidebar>
  );
}
"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";

import Link from "next/link";
import { Home, Plus, Files, Folder, Shapes } from "lucide-react";

export default function NavContentBuilder() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-semibold">
        Content Builder
      </SidebarGroupLabel>

      <SidebarMenu>

        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/content-builder">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/content-builder/singlepage">
              <Plus className="mr-2 h-4 w-4" />
              Create Single Page
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/content-builder/multipage">
              <Files className="mr-2 h-4 w-4" />
              Create Multiple Page
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/content-builder/createfolder">
              <Folder className="mr-2 h-4 w-4" />
              Create Folder
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/content-builder/createcomponent">
              <Shapes className="mr-2 h-4 w-4" />
              Create Component
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

      </SidebarMenu>
    </SidebarGroup>
  );
}

"use client";

import { PageProvider } from "./PageContext";
import { FieldProvider } from "./FieldContext";
import { SidebarProvider } from "@/components/ui/sidebar";
import ContentBuilderSidebar from "@/components/ContentBuilderSidebar";
import { ThemeProvider } from "next-themes";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <PageProvider>
        <FieldProvider>
          <ContentBuilderSidebar />
          <ThemeProvider attribute="class">
            {children}
          </ThemeProvider>
        </FieldProvider>
      </PageProvider>
    </SidebarProvider>
  );
}

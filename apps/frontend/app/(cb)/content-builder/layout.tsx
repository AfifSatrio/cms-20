"use client";

import { ThemeProvider } from "next-themes";
import ContentBuilderSidebar from "@/components/ContentBuilderSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PageProvider } from "./PageContext";

export default function ContentBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <PageProvider>
        <ContentBuilderSidebar />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1 bg-white min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </PageProvider>
    </SidebarProvider>
  );
}

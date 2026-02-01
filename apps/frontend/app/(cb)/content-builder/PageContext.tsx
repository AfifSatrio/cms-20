"use client";

import { createContext, useContext, useState } from "react";

export type Page = {
  id: string;
  name: string;
  apiId: string;
};

type PageContextType = {
  pages: Page[];
  addPage: (page: Page) => void;
};

const PageContext = createContext<PageContextType | null>(null);

export function PageProvider({ children }: { children: React.ReactNode }) {
  const [pages, setPages] = useState<Page[]>([]);

  const addPage = (page: Page) => {
    setPages((prev) => [...prev, page]);
  };

  return (
    <PageContext.Provider value={{ pages, addPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePages() {
  const ctx = useContext(PageContext);
  if (!ctx) throw new Error("usePages must be used inside PageProvider");
  return ctx;
}

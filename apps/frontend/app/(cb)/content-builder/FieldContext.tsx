"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

/* ================= TYPES ================= */

export type FieldType =
  | "text"
  | "number"
  | "media"
  | "relation"
  | "date"
  | "location"
  | "multiple";

export interface Field {
  id: string;
  name: string;
  type: FieldType;
  required: boolean;
  description?: string;

  /* ADVANCED SETTINGS */
  unique?: boolean;
  min?: number;
  max?: number;
}

/* ================= CONTEXT ================= */

interface FieldContextType {
  fields: Field[];
  addField: (field: Field) => void;
  deleteField: (id: string) => void;
}

const FieldContext = createContext<FieldContextType | undefined>(
  undefined
);

/* ================= PROVIDER ================= */

export function FieldProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [fields, setFields] = useState<Field[]>([]);

  const addField = (field: Field) => {
    setFields((prev) => [...prev, field]);
  };

  const deleteField = (id: string) => {
    setFields((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <FieldContext.Provider
      value={{ fields, addField, deleteField }}
    >
      {children}
    </FieldContext.Provider>
  );
}

/* ================= HOOK ================= */

export function useFields() {
  const context = useContext(FieldContext);
  if (!context) {
    throw new Error(
      "useFields must be used inside FieldProvider"
    );
  }
  return context;
}

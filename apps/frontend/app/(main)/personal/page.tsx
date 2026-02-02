import { Suspense } from "react";
import PersonalClient from "./personal-client";

export default function PersonalProjectPage() {
  return (
    <Suspense fallback={<div className="p-4">Loading projects...</div>}>
      <PersonalClient />
    </Suspense>
  );
}

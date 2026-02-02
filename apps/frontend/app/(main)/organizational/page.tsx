import { Suspense } from "react";
import OrganizationalClient from "./organizational-client";

export default function OrganizationalPage() {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <OrganizationalClient />
    </Suspense>
  );
}

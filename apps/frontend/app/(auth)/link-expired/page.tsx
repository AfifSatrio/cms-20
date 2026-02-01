import React from 'react';
import { AlertTriangle } from "lucide-react"; 

export default function LinkExpiredPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg dark:bg-zinc-800">
        
        
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
           
            <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>
        </div>

        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Link Expired
        </h1>
        
        <p className="mb-8 mt-4 text-sm text-gray-600 dark:text-gray-300">
          The password reset link has expired.
          Please request a new link to reset your password.
        </p>

       
        <a
          href="/login" 
          className="mt-6 flex w-full items-center justify-center rounded-lg bg-green-700 py-3 font-semibold text-white transition-colors hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Back to login
        </a>

      </div>
    </div>
  );
}

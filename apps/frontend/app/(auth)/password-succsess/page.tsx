import React from 'react';
import { ArrowLeft, Check } from "lucide-react"; 

export default function PasswordSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg dark:bg-zinc-800">
        
      
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          
            <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
        </div>

       
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Your password has been successfully reset
        </h1>
        
        <p className="mb-8 mt-4 text-sm text-gray-600 dark:text-gray-300">
          You can log in with your new password. If you encounter any issues,
          please contact support!
        </p>

       
        <a
          href="/login" 
          className="mt-6 flex w-full items-center justify-center rounded-lg bg-green-700 py-3 font-semibold text-white transition-colors hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Login Now
        </a>

       
        <a 
          href="/login" 
          className="mt-8 inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to log in
        </a>

      </div>
    </div>
  );
}

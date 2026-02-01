"use client"; 

import React, { useState } from 'react';
import { ArrowLeft } from "lucide-react";


const ForgotPasswordPage = () => {
  const [email, setEmail] = useState(''); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mengirim email reset password ke:", email);
    
   
    window.location.href = `/check-email?email=${encodeURIComponent(email)}`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-800">
        
      
        <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
          Forgot Password
        </h1>
        
        <p className="mb-8 mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          No worries! Enter your email address bellow, and we'll
          send your a link to reset your password.
        </p>

       
        <form onSubmit={handleSubmit}>
          
          {/* --- Email --- */}
          <div className="mb-4">
            <label 
              htmlFor="email" 
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Enter your Email Address"
                required
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-zinc-700 dark:text-white dark:placeholder-gray-400"
              />
            </div>
          </div>

          
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition-colors hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Reset Password
          </button>
        </form>

        
        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          Don't receive the email?{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            Click here to resend!
          </a>
        </p>

        <a 
          href="/login" 
          className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to log in
        </a>

      </div>
    </div>
  );
}

export default ForgotPasswordPage;

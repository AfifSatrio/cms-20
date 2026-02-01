"use client"; 

import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const SetNewPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); 

    
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    
    console.log("Password baru telah di-set:", newPassword);
    
   
    window.location.href = '/password-success'; 
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-800">
        
        
        <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
          Set new password
        </h1>
        
        <p className="mb-8 mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          Enter your new password below to complete the reset process.
          Ensure it's strong and secure
        </p>

        
        <form onSubmit={handleSubmit}>
          
          
          <div className="mb-4">
            <label 
              htmlFor="new-password" 
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="new-password"
                placeholder="Enter your password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pr-10 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-zinc-700 dark:text-white dark:placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Must be at least 8 character
            </p>
          </div>

        
          <div className="mb-4">
            <label 
              htmlFor="confirm-password" 
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                placeholder="Enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pr-10 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-zinc-700 dark:text-white dark:placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          
          {error && (
            <p className="mb-4 text-center text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          )}

        
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition-colors hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Reset password
          </button>
        </form>

       
        <a 
          href="/login" 
          className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to log in
        </a>

      </div>
    </div>
  );
}

export default SetNewPasswordPage;

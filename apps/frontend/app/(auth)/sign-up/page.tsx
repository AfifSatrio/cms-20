"use client"; 

import { useState } from 'react';
import { Mail, Eye, EyeOff, User } from "lucide-react"; 
import { DarkModeButton } from '@/components/DarkModeButton';


const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-800">
        
       
        <div className='flex items-center justify-end gap-25 mb-3'>
          <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Sign Up
          </h1>
          <DarkModeButton />
        </div>
        
        <p className="mb-6 text-center text-sm text-gray-600 dark:text-gray-300">
          Create an account to get started
        </p>

       
        <form onSubmit={(e) => e.preventDefault()}>
          
        
          <div className="mb-4">
            <label 
              htmlFor="name" 
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pr-10 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-zinc-700 dark:text-white dark:placeholder-gray-400"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <User className="h-5 w-5" />
              </span>
            </div>
          </div>

          
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
                placeholder="example@email.com"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pr-10 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-zinc-700 dark:text-white dark:placeholder-gray-400"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail className="h-5 w-5" />
              </span>
            </div>
          </div>

          
          <div className="mb-4">
            <label 
              htmlFor="password" 
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} 
                id="password"
                placeholder="Password"
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
                placeholder="Confirm Password"
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

         
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition-colors hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Create Account
          </button>
        </form>

       
        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
         
          <a href="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}

export default SignUpPage;

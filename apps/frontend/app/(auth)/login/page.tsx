"use client"; 

import React, { useState } from 'react'; 
import { Mail, Lock, Eye, EyeOff, Sun, Moon } from "lucide-react"; 
import { DarkModeButton } from '@/components/DarkModeButton';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
   
    setIsLoading(true);

    
    console.log(`Mencoba login dengan Email: ${email}`);
    
    
    setTimeout(() => {
      const loginSuccessful = true; 
      if (loginSuccessful) {
        console.log("Login sukses. Mengalihkan ke Dashboard.");
        
       
        window.location.href = '/dashboard'; 
      } else {
        // Jika gagal
        setIsLoading(false);
        console.error("Login gagal. Cek kembali email dan password Anda.");
      }
    }, 1500); 
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-800">
        <div className='flex items-center justify-end gap-30 mb-5'>
          <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Login
          </h1>
          <DarkModeButton />
        </div>
        
        <p className="mb-6 text-center text-sm text-gray-600 dark:text-gray-300">
          Enter your email and password to access account
        </p>

        <form onSubmit={handleLoginSubmit}>
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600 dark:text-gray-300">
                Remember Me
              </label>
            </div>
            <a href="/forgot-password" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
              Forgot Password?
            </a>
          </div>

         
          <button
            type="submit"
            disabled={isLoading} 
            className={`mt-6 w-full rounded-lg py-3 font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isLoading
                ? 'cursor-not-allowed bg-green-500' 
                : 'bg-green-700 hover:bg-green-800 focus:ring-green-500' 
            }`}
          >
            {isLoading ? 'Logging In...' : 'Login'}
          </button>

          
          <button
            type="button"
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 dark:border-gray-600 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600"
            disabled={isLoading}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.8 0-5.18-1.89-6.03-4.43H2.39v2.84C4.21 20.29 7.86 23 12 23z"/>
              <path fill="#FBBC05" d="M5.97 14.25c-.21-.66-.33-1.35-.33-2.06s.12-1.4.33-2.06V7.29H2.39C1.47 9.12 1 10.99 1 12.2s.47 3.08 1.39 4.91l3.58-2.86z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.86 1 4.21 3.71 2.39 7.29l3.58 2.86c.85-2.54 3.23-4.43 6.03-4.43z"/>
              <path fill="none" d="M0 0h24v24H0z"/>
            </svg>
            Continue with Google
          </button>
        </form>

        
        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          Haven't joined yet?{" "}
          <a href="/sign-up" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            SignUp today
          </a>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
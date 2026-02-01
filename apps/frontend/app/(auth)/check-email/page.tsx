import { ArrowLeft, Mail } from "lucide-react";


export default function CheckEmailPage({ 
  searchParams = {} 
}: { 
  searchParams?: { email?: string } 
}) {
  

  const email = searchParams.email || 'uremail@gmail.com';

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg dark:bg-zinc-800">
        
        
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-700">
            <Mail className="h-10 w-10 text-gray-600 dark:text-gray-400" />
          </div>
        </div>

       
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Check your email
        </h1>
        
        <p className="mb-8 mt-4 text-sm text-gray-600 dark:text-gray-300">
          We sent a password reset link to your email ({' '}
          <span className="font-medium text-gray-900 dark:text-white">{email}</span>
          ) which valid 24 hours after receives the email. Please check your inbox!
        </p>

      
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center rounded-lg bg-green-700 py-3 font-semibold text-white transition-colors hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Open Gmail
        </a>

     
        <p className="mt-8 text-sm text-gray-600 dark:text-gray-300">
          Don't receive the email?{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            Click here to resend!
          </a>
        </p>

        <a 
          href="/login" 
          className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to log in
        </a>

      </div>
    </div>
  );
}

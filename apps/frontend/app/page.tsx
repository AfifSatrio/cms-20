"use client"

import { DarkModeButton } from "@/components/DarkModeButton"
import { DollarSign, Gauge, Rocket, Shield } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const page = () => {
  const [scroll, setScroll] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-screen bg-black">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-center bg-cover bg-no-repeat"
          style={{ opacity: 0.3 }}
        ></div>
      </div>

      <div className="relative z-10">
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scroll ? "bg-white dark:bg-black backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}>
          <div className="container mx-auto flex items-center justify-between py-5 px-10">
            <div className="title">
              <span className={`font-semibold dark:text-white ${scroll ? "text-black" : "text-white"}`}>CMS CMLABS</span>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <DarkModeButton />
              <Link href={"/plan-and-bill"}>
                <span className={`font-semibold dark:text-white hover:underline hover:text-blueAzure transition-all ${scroll ? "text-black" : "text-white"}`}>Pricing</span>
              </Link>
              <Link href={"/login"}>
                <button className="bg-blueAzure px-6 py-2 rounded-2xl cursor-pointer hover:bg-blue-950 hover:scale-95 transition-all">
                  <span className="text-white">Get Started</span>
                </button>
              </Link>
            </div>
          </div>
        </nav>

        <div className="px-10 min-h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-black text-center text-white">
              Build An Awesome Apps With <br/>CMS CMLABS
            </h1>
            <Link href={"/login"} className="mt-5">
              <button className="bg-blueAzure px-10 py-2 rounded-2xl cursor-pointer hover:bg-blue-950 hover:scale-95 transition-all">
                <span className="text-white">Get Started</span>
              </button>
            </Link>
          </div>
        </div>
        <footer className="px-10 pt-5  h-[20vh] bg-black">
          <span className="text-xl font-bold text-white">CMS CMLABS</span>
          <p className="text-white font-semibold opacity-50">Build Some Awesome Apps</p>
          <div className="flex justify-center pt-15">
            <span className="text-white text-sm">Copyright © 2025. Made by Team 20 CMLabs</span>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default page
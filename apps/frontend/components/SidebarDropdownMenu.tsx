"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react"
import Link from "next/link"

const SidebarDropdownMenu = () => {
  const handleLogout = () => {
    // Logika logout di sini
    console.log("Logout clicked")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="w-full justify-start h-12 px-3 hover:bg-white/10 cursor-pointer"
        >
          <div className="flex items-center gap-3 w-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback className="bg-blue-600 text-white">U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start flex-1 overflow-hidden">
              <span className="text-sm font-medium text-white truncate">John Doe</span>
              <span className="text-xs text-gray-300 truncate">Admin</span>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-56 ml-6 mb-2" 
        align="start" 
        side="top"
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <Link href={"/plan"}>
            <DropdownMenuItem className="cursor-pointer">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Plan & Billing</span>
                <span className="ml-auto text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                Pro
                </span>
            </DropdownMenuItem>
          </Link>  
          
          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
        
        <Link href={"/"}>
            <DropdownMenuItem 
            className="cursor-pointer text-red-600 focus:text-red-600"
            onClick={handleLogout}
            >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
            </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SidebarDropdownMenu
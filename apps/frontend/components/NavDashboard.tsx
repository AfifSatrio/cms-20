import React from 'react'
import { 
    SidebarContent, 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarGroupLabel, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem 
} from './ui/sidebar'
import Link from 'next/link'
import { LayoutDashboard } from 'lucide-react'

const NavDashboard = () => {
  return (
    <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel className='text-white'>
                Dashboard
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <LayoutDashboard className='fill-white'/>
                            <Link href={'/dashboard'}>
                                Dashboard
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    </SidebarContent>
  )
}

export default NavDashboard
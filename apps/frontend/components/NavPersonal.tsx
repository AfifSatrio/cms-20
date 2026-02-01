import React from 'react'
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import { sidebarPersonalData } from '@/constants'
import Link from 'next/link'

const NavPersonal = () => {
  return (
    <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='font-semibold'>
            Personal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarPersonalData.map((items) => (
                <SidebarMenuItem key={items.title}>
                  <SidebarMenuButton>
                    <items.icon className='fill-white'/>
                    <Link href={items.href}>
                      {items.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
    </SidebarContent>
  )
}

export default NavPersonal
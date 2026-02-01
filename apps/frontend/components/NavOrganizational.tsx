'use client'

import React, { useEffect, useState } from 'react'
import { SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from './ui/sidebar'
import { Folder, FolderOpen, Users, Settings } from 'lucide-react'
import { Collapsible, CollapsibleContent } from './ui/collapsible'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { listOrganizationData } from '@/constants'

const NavOrganizational = () => {
  const pathname = usePathname()
  
  const organizationMatch = pathname.match(/\/organizational\/(\d+)/)
  const organizationId = organizationMatch ? parseInt(organizationMatch[1]) : null
  const organization = organizationId ? listOrganizationData.find(org => org.id === organizationId) ?? null : null

  const isProjectsActive = pathname.includes('/projects')
  const isCollaboratorsActive = pathname.includes('/collaborator')
  const isSettingsActive = pathname.includes('/setting')

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (organizationId) {
      setIsOpen(true)
    }
  }, [organizationId])

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel className='font-semibold'>
          Organizational
        </SidebarGroupLabel>
        <SidebarMenu>
          <Collapsible 
            open={isOpen}
            onOpenChange={setIsOpen}
            asChild 
            className='group/collapsible'
          >
            <SidebarMenuItem>
                <Link href={'/organizational'}>  
                    <SidebarMenuButton tooltip="Organizational">
                        <Folder className='fill-white'/>
                        <span className='cursor-pointer'>Organizational</span>
                    </SidebarMenuButton>
                </Link>
              
              {/* Tampilkan sub-menu hanya jika ada organizationId */}
              {organizationId && organization && (
                <CollapsibleContent>
                  <SidebarMenuSub>

                    {/* Menu Projects */}
                    <SidebarMenuSubItem>
                      <SidebarMenuButton 
                        asChild 
                        tooltip="Projects"
                        className="transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                      >
                        <Link href={`/organizational/${organizationId}/projects`}>
                          {isProjectsActive && (
                            <div className="w-0.5 h-4 rounded-full bg-white" />
                          )}
                          <FolderOpen size={16} />
                          <span>Projects</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>

                    {/* Menu Collaborators */}
                    <SidebarMenuSubItem>
                      <SidebarMenuButton 
                        asChild 
                        tooltip="Collaborators"
                        className="transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                      >
                        <Link href={`/organizational/${organizationId}/collaborator`}>
                        {isCollaboratorsActive && (
                            <div className="w-0.5 h-4 rounded-full bg-white" />
                          )}
                          <Users size={16} />
                          <span>Collaborator</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>

                    {/* Menu Settings */}
                    <SidebarMenuSubItem>
                      <SidebarMenuButton 
                        asChild 
                        tooltip="Settings"
                        className="transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                      >
                        <Link href={`/organizational/${organizationId}/setting`}>
                        {isSettingsActive && (
                            <div className="w-0.5 h-4 rounded-full bg-white" />
                          )}
                          <Settings size={16} />
                          <span>Setting</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              )}
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroup>   
    </SidebarContent>
  )
}

export default NavOrganizational
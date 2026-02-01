// components/AppSidebar.jsx
"use client"

import { Sidebar, SidebarGroup, SidebarFooter } from './ui/sidebar'
import NavDashboard from './NavDashboard'
import NavOrganizational from './NavOrganizational'
import NavPersonal from './NavPersonal'
import SidebarDropdownMenu from './SidebarDropdownMenu'

const AppSidebar = () => {
  return (
    <Sidebar className="flex flex-col h-full">
      {/* Header Section */}
      <div className='p-4 flex items-center gap-4 border-b border-white/10'>
        <div className='bg-white p-4 w-fit text-black rounded-2xl'>
          Logo
        </div>
        <div className='font-semibold text-white'>
          <h1 className="text-lg">CMS Project #20</h1>
        </div>
      </div>
      
      {/* Navigation Content */}
      <div className="flex-1 overflow-y-auto py-4">
        <SidebarGroup>
          <NavDashboard />
          <NavOrganizational />
          <NavPersonal />
        </SidebarGroup>
      </div>
      
      {/* Footer with Dropdown Menu */}
      <SidebarFooter className="border-t border-white/10 p-2">
        <SidebarDropdownMenu />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
"use client"

import { SiteHeader } from '@/components/SiteHeader'
import { Button } from '@/components/ui/button'
import { listOrganizationData } from '@/constants'
import { usePathname } from 'next/navigation'
import React from 'react'
import ProjectInfo from '@/components/ProjectInfo'
import CustomDomainCard from '@/components/CustomDomainCard'
import DangerZoneCard from '@/components/DangerZoneCard'

const Page = () => {
    const pathname = usePathname()
  
    const pathMatch = pathname.match(/\/organizational\/(\d+)\/projects\/(\d+)/)
    const organizationId = pathMatch ? parseInt(pathMatch[1]) : null
    const projectId = pathMatch ? parseInt(pathMatch[2]) : null
    const organization = organizationId ? 
        listOrganizationData.find(org => org.id === organizationId) ?? null : null

    const projects = organization?.orgProject || organization?.orgProjects || []
    const project = projectId ? 
        projects.find(proj => proj.id === projectId) ?? null : null

    return (
        <div className='w-full'>
            <SiteHeader />
            <div className='p-4 flex justify-between'>
                <h2 className='font-semibold'>
                    {project ? project.name : "Project not found"}
                </h2>
                <Button variant="outline" className='cursor-pointer'>
                    Enter Project
                </Button>
            </div>
            <div className='px-4'>
                <ProjectInfo />
                <CustomDomainCard />
                <DangerZoneCard />
            </div>
        </div>
  )
}

export default Page
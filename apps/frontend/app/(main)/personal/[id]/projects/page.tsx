"use client"

import { SiteHeader } from '@/components/SiteHeader'
import { Button } from '@/components/ui/button'
import { personalProjectsData } from '@/constants'
import { useParams } from 'next/navigation'
import React from 'react'
import CustomDomainCard from '@/components/CustomDomainCard'
import DangerZoneCard from '@/components/DangerZoneCard'
import PersonalProjectInfo from '@/components/PersonalProjectInfo'

const PersonalProjectPage = () => {
    const params = useParams()
    const projectId = params.id as string 

    const project = personalProjectsData.find(proj => proj.id === projectId) ?? null

    return (
        <div className='w-full'>
            <SiteHeader />
            <div className='p-4 flex justify-between items-center'>
                <h2 className='font-semibold'>
                    {project ? project.title : "Project not found"}
                </h2>
                <Button variant="outline" className='cursor-pointer'>
                    Enter Project
                </Button>
            </div>
            <div className='px-4 space-y-6'>
                <PersonalProjectInfo project={project} />
                <CustomDomainCard />
                <DangerZoneCard />
            </div>
        </div>
    )
}

export default PersonalProjectPage
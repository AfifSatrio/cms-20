"use client"

import OrgProjects from '@/components/OrgProjectsTable'
import Searchbar from '@/components/Searchbar'
import { SiteHeader } from '@/components/SiteHeader'
import { Button } from '@/components/ui/button'
import { listOrganizationData } from '@/constants'
import { useParams } from 'next/navigation'
import React from 'react'

const ProjectsPage = () => {
  const params = useParams()
  const organizationId = params.id ? parseInt(params.id as string) : null
  
  const organization = organizationId 
    ? listOrganizationData.find(org => org.id === organizationId) 
    : null

  return (
    <div className='w-full'>
      <SiteHeader /> 
        {organization ? (
          <div className='p-4'>
            <h2 className='font-semibold mb-4'>
              {organization.name}
            </h2>
            <div className='flex items-center p-4 gap-4'>
              <Searchbar />
              <Button variant="outline" className='cursor-pointer'>
                  Create Project
              </Button>
            </div>
            <OrgProjects organizationId={organizationId} />
          </div>
        ) : (
          <div className="p-4 text-center text-gray-500">
            Organization not found
          </div>
        )}
    </div>
  )
}

export default ProjectsPage
"use client"

import React from 'react'
import { TableHeader, TableRow, TableHead, TableBody, Table, TableCell } from './ui/table'
import { listOrganizationData } from '@/constants'
import { usePathname } from 'next/navigation'

const ProjectInfo = () => {

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
    <Table className='mb-10'>
        <TableHeader>
            <TableRow>
                <TableHead className='font-semibold p-4 w-1/2'>Information</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
             {project && (
              <>
              <TableRow key={project.id}>
                <TableCell className='p-4'>Project ID</TableCell>
                <TableCell>{project.id}</TableCell>
              </TableRow>
              <TableRow key={project.name}>
                <TableCell className='p-4'>Project Name</TableCell>
                <TableCell>
                  <div className='flex items-center justify-between mr-10'>
                    {project.name}
                    <span className='text-md text-blueAzure cursor-pointer'>Change Status</span>
                  </div>
                </TableCell> 
              </TableRow>
              <TableRow key={project.lastUpdate}>
                <TableCell className='p-4'>Last Update</TableCell>
                <TableCell>{project.lastUpdate}</TableCell>
              </TableRow>
              <TableRow key={project.status.id}>
                <TableCell className='p-4'>Status Project</TableCell>
                <TableCell>
                  <div className='flex items-center justify-between mr-10'>
                    <span className='p-1 px-4 rounded-2xl text-sm font-medium w-30 text-center'
                      style={{
                        backgroundColor: `${project.status.color}`,
                        color: 'white'
                      }}
                    >
                      {project.status.name}
                    </span>
                    <span className='text-md text-blueAzure cursor-pointer'>Change Status</span>
                  </div>
                </TableCell>
              </TableRow>
              </>
             )}
        </TableBody>
    </Table>
  )
}

export default ProjectInfo
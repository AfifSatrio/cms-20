import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { listOrganizationData } from '@/constants'
import { ArrowRight, Trash2, Users } from 'lucide-react'
import Link from 'next/link'

interface OrgProjectsProps {
  organizationId?: number | null;
}

const OrgProjects = ({ organizationId }: OrgProjectsProps) => {
  const organization = organizationId 
    ? listOrganizationData.find(org => org.id === organizationId)
    : null

  const projects = organization?.orgProject || []

  if (!organization) {
    return (
      <div className="text-center py-8 text-gray-500">
        Organization not found
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No projects found for {organization.name}
      </div>
    )
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-left'>Project Name</TableHead>
          <TableHead className='text-center'>Last Update</TableHead>
          <TableHead className='text-center'>Collaborator</TableHead>
          <TableHead className='text-center'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((items) => (
          <TableRow key={items.id}>
            <TableCell className='flex items-center gap-2 justify-between'>
              {items.name}
              <span 
                className='p-1 px-4 rounded-2xl text-sm font-medium w-30 text-center'
                style={{
                  backgroundColor: `${items.role.color}`,
                  color: 'white'
                }}  
              >
                {items.role.name}
              </span>
            </TableCell>
            <TableCell className='text-center'>{items.lastUpdate}</TableCell>
            <TableCell className='text-center'>
              <div className='flex items-center justify-center gap-1'>
                <Users size={16} className='text-gray-500' />
                <span>{items.collaborator}</span>
              </div>
            </TableCell>
            <TableCell className='flex justify-center items-center gap-4'>
              <div className='flex items-center gap-4 cursor-pointer'>
                <button 
                    className='hover:opacity-70 transition-opacity cursor-pointer'
                    aria-label='Delete organization'
                  >
                    <Trash2 className='text-vermilion' size={20}/>
                  </button>
                
                <Link href={`projects/${items.id}`} >
                  <ArrowRight size={20}/>
                </Link>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default OrgProjects
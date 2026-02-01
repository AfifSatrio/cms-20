"use client"

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { listOrganizationData } from '@/constants'
import { Mail, Trash2 } from 'lucide-react'
import { useParams } from 'next/navigation'

interface CollaboratorTableProps {
  organizationId?: number;
}

const CollaboratorTable = ({ organizationId }: CollaboratorTableProps) => {
  const params = useParams()
  const urlOrganizationId = params.id ? parseInt(params.id as string) : null
  
  const finalOrganizationId = organizationId || urlOrganizationId
  
  const organization = finalOrganizationId 
    ? listOrganizationData.find(org => org.id === finalOrganizationId)
    : listOrganizationData[0] 

  const collaborators = organization?.collaborator || []

  if (!organization) {
    return <div>Organization not found</div>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-left'>Collaborator Name</TableHead>
          <TableHead className='text-center'>Status</TableHead>
          <TableHead className='text-center'>Role</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {collaborators.length > 0 ? (
          collaborators.map((collaborator) => (
            <TableRow key={collaborator.id}>
              <TableCell className="font-medium">
                {collaborator.name}
              </TableCell>
              <TableCell className='text-center'>
                <span 
                  className={`inline-flex justify-center rounded-full text-sm px-4 p-1 w-30 ${
                    collaborator.status === 'Active' 
                      ? 'bg-verdigris text-white' 
                      : 'bg-topaz text-white'
                  }`}
                >
                  {collaborator.status}
                </span>
              </TableCell>
              <TableCell className='text-center'>
                <span 
                  className="inline-flex justify-center rounded-full text-sm px-4 p-1 w-30"
                  style={{
                    backgroundColor: collaborator.role.color,
                    color: 'white'
                  }}
                >
                  {collaborator.role.name}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-4">
                  {collaborator.status === 'Pending' && (
                    <button className="hover:opacity-70 transition-opacity">
                      <Mail className='text-blueAzure size-6'/>
                    </button>
                  )}
                  <button className="hover:opacity-70 transition-opacity">
                    <Trash2 className='text-vermilion size-6'/>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-center py-8 text-gray-500">
              No collaborators found for {organization.name}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default CollaboratorTable
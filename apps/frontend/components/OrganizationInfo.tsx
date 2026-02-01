"use client"

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { listOrganizationData } from '@/constants'
import { usePathname } from 'next/navigation'

const OrganizationInfo = () => {
  const pathname = usePathname()
  
  // Ekstrak organizationId dari pathname
  // Contoh: /organizational/2/setting → organizationId = 2
  const match = pathname.match(/\/organizational\/(\d+)\/setting/)
  const organizationId = match ? parseInt(match[1]) : null

  const organization = organizationId 
    ? listOrganizationData.find(org => org.id === organizationId)
    : null

  if (!organization) {
    return (
      <div className="text-center py-8 text-gray-500">
        Organization not found
      </div>
    )
  }

  return (
    <Table className='mb-10'>
      <TableHeader>
        <TableRow>
          <TableHead className='font-semibold p-4'>Information</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="p-4">Organization ID</TableCell>
          <TableCell>{organization.id}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="p-4">Organization Name</TableCell>
          <TableCell>
            <div className='items-center flex justify-between mr-10'>
              {organization.name}
              <span className='text-blueAzure'>Change Name</span>
            </div>
            </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default OrganizationInfo
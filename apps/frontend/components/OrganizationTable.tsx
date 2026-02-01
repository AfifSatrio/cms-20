"use client"

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { listOrganizationData } from '@/constants'
import { ArrowRight, Trash2, Users, Plus } from 'lucide-react'
import Link from 'next/link'

const OrganizationTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-left'>Organizational Name</TableHead>
          <TableHead className='text-center'>Collaborator</TableHead>
          <TableHead className='text-center'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className='text-center'>
        {listOrganizationData.map((items) => {
          return (
            <TableRow key={items.id}>
              <TableCell className='flex items-center gap-2 justify-between'>
                {items.name}
                <span 
                  className='p-1 px-4 rounded-2xl text-sm font-medium w-30'
                  style={{
                    backgroundColor: `${items.role.color}`,
                    color: 'white'
                  }}  
                >
                  {items.role.name}
                </span>
              </TableCell>
              <TableCell>
                <div className='flex items-center justify-center gap-1'>
                  <Users size={16} className='text-gray-500' />
                  <span>{items.members}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex gap-4 justify-center items-center'>
                  <button 
                    className='hover:opacity-70 transition-opacity cursor-pointer'
                    aria-label='Delete organization'
                  >
                    <Trash2 className='text-vermilion' size={20}/>
                  </button>
                    <Link
                      href={`/organizational/${items.id}/projects`}
                      className='hover:opacity-70 transition-opacity'
                      aria-label='View organization projects'
                    >
                      <ArrowRight size={20}/>
                    </Link>
                </div>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default OrganizationTable
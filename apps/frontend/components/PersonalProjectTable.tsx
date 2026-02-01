import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { personalProjectsData } from '@/constants'
import { ArrowLeftRight, Copy, ExternalLink, Trash2 } from 'lucide-react'
import Link from 'next/link'

const PersonalProjectTable = () => {
  return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead className='text-left'>Project Name</TableHead>
                <TableHead className='text-center'>Last Update</TableHead>
                <TableHead className='text-center'>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {personalProjectsData.map((items) => (
                <TableRow key={items.id}>
                    <TableCell className='text-left'>{items.title}</TableCell>
                    <TableCell className='text-center'>{items.lastUpdate}</TableCell>
                    <TableCell className='flex justify-center gap-6'>
                        <div className='p-1.5 bg-red-100 rounded-full cursor-pointer hover:bg-red-200 transition-colors'>
                            <Trash2 className='text-vermilion' size={16}/>
                        </div>
                        <div className='p-1.5 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200 transition-colors'>
                            <ExternalLink className='text-blueAzure' size={16}/>
                        </div>
                        <div className='p-1.5 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200 transition-colors'>
                            <Copy className='text-blueAzure' size={16}/>
                        </div>
                        <Link 
                            href={`/personal/${items.id}/projects`}
                            className='p-1.5 rounded-full cursor-pointer bg-purple-100 hover:bg-purple-200 transition-colors'
                            aria-label='View organization projects'
                        >
                            <ArrowLeftRight className='text-cyberGrape' size={16}/>
                        </Link>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  )
}

export default PersonalProjectTable
// components/ProjectInfo.tsx
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from './ui/table';

interface ProjectInfoProps {
  project?: {
    id: string;
    title: string;
    lastUpdate: string;
    status: {
      status: string;
      color: string;
    };
  } | null;
}

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  if (!project) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Project Information</CardTitle>
          <CardDescription>No project data available</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Table>
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
              <TableRow key={project.title}>
                <TableCell className='p-4'>Project Name</TableCell>
                <TableCell>
                  <div className='flex items-center justify-between mr-10'>
                    {project.title}
                    <span className='text-md text-blueAzure cursor-pointer'>Change Status</span>
                  </div>
                </TableCell> 
              </TableRow>
              <TableRow key={project.lastUpdate}>
                <TableCell className='p-4'>Last Update</TableCell>
                <TableCell>{project.lastUpdate}</TableCell>
              </TableRow>
              <TableRow key={project.status.status}>
                <TableCell className='p-4'>Status Project</TableCell>
                <TableCell>
                  <div className='flex items-center justify-between mr-10'>
                    <span className='p-1 px-4 rounded-2xl text-sm font-medium w-30 text-center'
                      style={{
                        backgroundColor: `${project.status.color}`,
                        color: 'white'
                      }}
                    >
                      {project.status.status}
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
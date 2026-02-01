import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { projectDetailData } from '@/constants'

const ProjectDetail = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 ">
      {projectDetailData.map((items) => (
        <Card key={items.title}>
          <CardHeader className='text-center font-semibold'>
            {items.title}
          </CardHeader>
          <CardContent className='text-center'>
            {items.enum}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ProjectDetail
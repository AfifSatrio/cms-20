import React from 'react'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './ui/empty'
import { FolderCode } from 'lucide-react'
import { Button } from './ui/button'

const EmptyPersonalProjectsPage= () => {
  return (
    <Empty className='mt-40'>
      <EmptyHeader>
        <EmptyMedia variant="icon" className='bg-blueAzure dark:bg-zinc-800'>
          <FolderCode className='text-white'/>
        </EmptyMedia>
        <EmptyTitle>
          No Project.
        </EmptyTitle>
        <EmptyDescription>
          No project appear in here. Create some new project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
            Create Project
        </Button>        
      </EmptyContent>
    </Empty>
  )
}

export default EmptyPersonalProjectsPage
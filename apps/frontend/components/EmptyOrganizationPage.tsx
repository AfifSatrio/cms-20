import React from 'react'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './ui/empty'
import { FolderCode } from 'lucide-react'
import { Button } from './ui/button'

const EmptyOrganizationPage= () => {
  return (
    <Empty className='mt-40'>
      <EmptyHeader>
        <EmptyMedia variant="icon" className='bg-blueAzure dark:bg-zinc-800'>
          <FolderCode className='text-white'/>
        </EmptyMedia>
        <EmptyTitle>
          No Organization Yet.
        </EmptyTitle>
        <EmptyDescription>
          No organization appear in here. Create some new organization.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
            Create Organization
        </Button>        
      </EmptyContent>
    </Empty>
  )
}

export default EmptyOrganizationPage
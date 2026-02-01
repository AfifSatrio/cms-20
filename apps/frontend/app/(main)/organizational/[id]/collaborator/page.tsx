import CollaboratorTable from '@/components/CollaboratorTable'
import Searchbar from '@/components/Searchbar'
import { SiteHeader } from '@/components/SiteHeader'
import { Button } from '@/components/ui/button'
import React from 'react'

const CollaboratorPage = () => {
  return (
    <div className='w-full'>
      <SiteHeader />
      <div className='p-4'>
        <h2 className='font-semibold'>Collaborator</h2>
          <div className='flex items-center p-4 gap-4'>
            <Searchbar />
              <Button variant="outline">
                Add Collaborator
              </Button>
          </div>
        <CollaboratorTable />
      </div>
    </div>
  )
}

export default CollaboratorPage
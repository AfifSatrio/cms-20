import PersonalProjectTable from '@/components/PersonalProjectTable'
import Searchbar from '@/components/Searchbar'
import { SiteHeader } from '@/components/SiteHeader'
import { Button } from '@/components/ui/button'
import React from 'react'

const PersonalProjectPage = () => {
  return (
    <div className='w-full'>
      <SiteHeader />
      <div>
          <div className='p-4'>
            <h2 className='font-semibold'>Projects</h2>
            <div className='flex items-center gap-4 p-4'>
              <Searchbar />
              <Button variant="outline">
                  Create Project
              </Button>
            </div>
            <PersonalProjectTable />
          </div>
      </div>
    </div>
  )
}

export default PersonalProjectPage
import Link from "next/link";
import EmptyOrganizationPage from '@/components/EmptyOrganizationPage'
import OrganizationTable from '@/components/OrganizationTable'
import Searchbar from '@/components/Searchbar'
import { SiteHeader } from '@/components/SiteHeader'
import { Button } from '@/components/ui/button'
import { listOrganizationData } from '@/constants'
import React from 'react'

const organizationData = listOrganizationData || []

const OrganizationalPage = () => {
  return (
    <div className='w-full'>
      <SiteHeader />

      {organizationData.length ? (
        <div className='p-4'>
          <h2 className='font-semibold'>Organizational Projects</h2>

          <div className='flex items-center p-4 gap-4'>
            <Searchbar />

            <Link href="/content-builder/home">
              <Button variant="outline" className="cursor-pointer">
                Create Organization
              </Button>
            </Link>
          </div>

          <OrganizationTable />
        </div>
      ) : (
        <div className='p-4'>
          <EmptyOrganizationPage />
        </div>
      )}
    </div>
  )
}

export default OrganizationalPage

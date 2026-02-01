import DangerZoneOrg from '@/components/DangerZoneOrg'
import OrganizationInfo from '@/components/OrganizationInfo'
import { SiteHeader } from '@/components/SiteHeader'
import React from 'react'

const SettingPage = () => {
  return (
    <div className='w-full'>
      <SiteHeader />
      <div className='p-4'>
        <h2 className='font-semibold'>Setting</h2>
      </div>
      <div className='px-4'>
        <OrganizationInfo />
        <DangerZoneOrg />
      </div>
    </div>
  )
}

export default SettingPage
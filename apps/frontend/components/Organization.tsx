import { listOrganizationData } from '@/constants'
import React from 'react'

const organizationData = listOrganizationData || []

const Organization = () => {
  return (
    <div>
        {organizationData?.length ? (
          <div>
            {organizationData.map((org) => (
        <div 
        key={org.id}
        className="flex items-start space-x-3 p-3 rounded-lg"
        >
            <div className='flex-1 items-center'>
                <div className='flex justify-between'>
                    <h4 className='font-medium'>{org.name}</h4>
                    <p className='text-sm'>{org.members} members • {org.project} projects</p>
                </div>
                <span className='text-xs text-gray-500'></span>
            </div>
        </div>
        ))}
          </div>
        ) : (
          <div className='text-center mt-12'>
            No Organization List
          </div>
        )}
    </div>
  )
}

export default Organization
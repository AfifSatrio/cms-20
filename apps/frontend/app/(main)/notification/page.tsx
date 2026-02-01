import NoNotification from '@/components/NoNotification'
import { SiteHeader } from '@/components/SiteHeader'
import { notifications } from '@/constants'
import React from 'react'

const importedNotifications = notifications || []

const NotificationPage = () => {
  return (
    <div className='w-full'>
        <div>
          <SiteHeader />  
        </div>
        <div>
          {importedNotifications?.length ? (
            <div>
              NotificationPage
            </div>
          ):(
            <div>
              <NoNotification />
            </div>
          )}
        </div>
    </div>
  )
}

export default NotificationPage
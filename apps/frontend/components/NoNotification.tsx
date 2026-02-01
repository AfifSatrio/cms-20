import React from 'react'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './ui/empty'
import { Bell, RefreshCcw } from 'lucide-react'
import { Button } from './ui/button'

const NoNotification = () => {
  return (
    <Empty>
        <EmptyHeader>
            <EmptyMedia variant="icon" className='bg-blueAzure dark:bg-zinc-800 mt-50'>
                <Bell className='text-white'/>
            </EmptyMedia>
            <EmptyTitle>
                No Notifications Yet.
            </EmptyTitle>
            <EmptyDescription>
                You&apos;re all caught up. New notifications will appear here.
            </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
            <Button variant="outline" size="sm">
                <RefreshCcw />
            </Button>
        </EmptyContent>
    </Empty>
  )
}

export default NoNotification
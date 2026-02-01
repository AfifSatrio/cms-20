import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ScrollArea } from './ui/scroll-area'
import UserActivities from './UserActivities'

const RecentlyActivity = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Recently Activity</CardTitle>            
            <CardDescription>See your activities here</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[150px] rounded-md border p-4">
                <UserActivities />
            </ScrollArea>
        </CardContent>
    </Card>
  )
}

export default RecentlyActivity
import { ScrollArea } from './ui/scroll-area'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import Organization from './Organization'

const ListOrganization = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>List Organization</CardTitle>            
            <CardDescription>See all organization here</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[150px] rounded-md border p-4">
                <Organization />
            </ScrollArea>
        </CardContent>
    </Card>
  )
}

export default ListOrganization
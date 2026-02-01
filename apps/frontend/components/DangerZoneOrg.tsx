import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Trash2 } from 'lucide-react'

const DangerZoneOrg = () => {
  return (
    <Card className='border-vermilion'>
        <CardHeader>
            <CardTitle className='text-vermilion font-bold'>Danger Zone</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='flex items-center justify-between'>
                <div>
                    <span className='font-bold text-vermilion'>Delete Organization</span>
                    <p className='text-sm'>If you delete the organization, it will be permanently and you cannot recover it.</p>
                </div>
                <Trash2 className='text-vermilion'/>
            </div>
        </CardContent>
    </Card>
  )
}

export default DangerZoneOrg
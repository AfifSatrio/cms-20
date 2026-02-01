import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Trash2 } from 'lucide-react'

const DangerZoneCard = () => {
  return (
    <Card className='mb-10 border-vermilion'>
        <CardHeader>
            <CardTitle className='text-vermilion font-bold'>
                Danger Zone
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className='flex items-center justify-between mb-5'>
                <div>
                    <span className='font-bold text-vermilion'>Duplicate Project</span>
                    <p className='text-sm'>You are about to duplicate this project. A new copy will be created with the same content and settings.</p>
                </div>
                <Trash2 className='text-vermilion'/>
            </div>
            <div className='flex items-center justify-between mb-5'>
                <div>
                    <span className='font-bold text-vermilion'>Duplicate to Personal</span>
                    <p className='text-sm'>You are about to transfer this project to another section. The original project will remain unchanged, while a duplicate will be created in the selected section.</p>
                </div>
                <Trash2 className='text-vermilion'/>
            </div>
            <div className='flex items-center justify-between mb-5'>
                <div>
                    <span className='text-vermilion font-bold'>Delete Project</span>
                    <p className='text-sm'>If you delete the organization, it will be permanently deleted and you cannot recover it.</p>
                </div>
                <Trash2 className='text-vermilion'/>
            </div>
        </CardContent>
    </Card>
  )
}

export default DangerZoneCard
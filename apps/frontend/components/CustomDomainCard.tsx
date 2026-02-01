"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

const CustomDomainCard = () => {
  const pathname = usePathname()

  return (
    <Card className='mb-10 border-topaz'>
        <CardHeader>
            <CardTitle className='text-topaz font-bold'>Custom Domain</CardTitle>
            <CardDescription>
                By default, your site on CMS cmlabs can be reached through a subdomain based on your project name.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="font-semibold">cms-cmlabs-{pathname}.com</span>
                </div>
                <Button variant="outline" className='cursor-pointer'>
                    Custom Domain
                </Button>
            </div>
        </CardContent>
    </Card>
  )
}

export default CustomDomainCard
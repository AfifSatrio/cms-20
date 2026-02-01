"use client"

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'
import { dropdownData } from '@/constants'

const FilterDataButton = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild className='cursor-pointer'>
            <Button variant="outline" className='group'>
                <span>Filter Data</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]:rotate-90"/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        {dropdownData.map((items) => (
            <DropdownMenuItem key={items.title} className='cursor-pointer'>
                {items.title}
            </DropdownMenuItem>
        ))}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default FilterDataButton
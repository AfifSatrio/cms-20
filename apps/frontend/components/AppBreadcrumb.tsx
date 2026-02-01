'use client';

import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from './ui/breadcrumb'
import { usePathname } from 'next/navigation'

export function AppBreadcrumb() {
  const pathname = usePathname();

  const currentItem  =  pathname ? pathname
    .split('/')
    .filter(segment => segment.length > 0)
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' / ') : null;

  return (
    <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                Pages
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          <BreadcrumbItem>
            {currentItem ? currentItem : 'unknown page'}
          </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
  )
}
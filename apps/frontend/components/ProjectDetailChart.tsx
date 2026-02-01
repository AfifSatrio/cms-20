"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { barChartData } from '@/constants'

const chartConfig = {
  organizational: {
    label: "Organizational",
    color: "var(--chart-1)",
  },
  personal: {
    label: "Personal",
    color: "var(--chart-2)",
  }, 
} satisfies ChartConfig

const BarChartData = barChartData || []

const ProjectDetailChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Project Detail
        </CardTitle>
        <CardDescription>
          See your project detail here
        </CardDescription>
      </CardHeader>
      <CardContent>
        {BarChartData?.length ? (
          <ChartContainer config={chartConfig} >
          <BarChart accessibilityLayer data={barChartData}>
            <CartesianGrid vertical={false} />
            <XAxis 
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0.3)}
            />
            <ChartTooltip 
              cursor={false}
              content={<ChartTooltipContent indicator='dashed'/>}
            />
            <Bar dataKey="organizational" fill="var(--color-organizational)" radius={4} />
            <Bar dataKey="personal" fill="var(--color-personal)" radius={4} />
          </BarChart>
        </ChartContainer>
        ) : (
          <div className='text-center'>
            No Data Available.
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default ProjectDetailChart
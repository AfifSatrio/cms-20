"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from './ui/chart'

import { pieChartData } from '@/constants'
import { Pie, PieChart } from 'recharts'

const chartConfig = {
  completed: {
    label: "Completed",
    color: "var(--chart-1)",
  },
  overdue: {
    label: "Overdue",
    color: "var(--chart-2)",
  },
  pending: {
    label: "Pending",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const PieChartData = pieChartData || []

const DeadlineChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Deadlines</CardTitle>
        <CardDescription>See your project deadlines percentage here</CardDescription>
      </CardHeader>
      <CardContent>
        {PieChartData?.length ? (
          <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip 
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={pieChartData} dataKey="value" nameKey="title"></Pie>
            <ChartLegend 
              content={<ChartLegendContent nameKey='title'/>}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
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

export default DeadlineChart
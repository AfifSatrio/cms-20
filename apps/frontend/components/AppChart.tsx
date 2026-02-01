import React from 'react'
import DeadlineChart from './DeadlineChart'
import ProjectDetailChart from './ProjectDetailChart'

const AppChart = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
        <DeadlineChart />
        <ProjectDetailChart />
    </div>
  )
}

export default AppChart
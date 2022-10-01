import React from 'react'
import WorkExperienceCard from './WorkExperienceCard'

import { WorkExperienceData } from 'utils/data'

const WorkExperience = () => {
  return (
    <div className='flex mt-4 flex-col space-y-4' id='work-experience' >
       <h3 className='text-start font-bold text-3xl' >Work Experience </h3>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {WorkExperienceData.map((work) => (
            <WorkExperienceCard key={work.id} work={work} />
          ))}
        </div>
    </div>
  )
}

export default WorkExperience
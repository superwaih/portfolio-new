import React from 'react'

const WorkExperienceCard = ({work}) => {
  return (
    <div className='border rounded-lg p-4 space-y-2 bg-black text-white'>
        <div className="company-logo flex items-center gap-4">
            <img className='h-20 w-32' src={work.company_logo} alt="Company logo" />
        <p className="lg:text-3xl text-xl font-bold">{work.company_name}</p>

        </div>
        <p className='text-amber-600 font-bold text-xl'>{work.job_title}</p>
        <div className='flex justify-between'>
        <p>{work.location}</p>
        </div>
        <p><span className='font-bold'>Responsibility:</span> {work.tasks}</p>
        <p>{work.date}</p>
    </div>
  )
}

export default WorkExperienceCard

import React from 'react'

const WorkExperienceCard = ({work}) => {
  return (
    <div className='border rounded-lg p-4 space-y-2 hover:scale-105 transition-all duration-300 cursor-pointer hover:rotate-360 hover:bg-cyan-400 hover:text-red-800   bg-black text-white'>
       <a href={work.website}>
       <div className="company-logo flex flex-row md:flex-col xl:flex-row items-center gap-4">
            <img className='h-20 w-32' src={work.company_logo} alt="Company logo" />
        <p className="lg:text-3xl text-xl font-bold">{work.company_name}</p>

        </div>
       </a>
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

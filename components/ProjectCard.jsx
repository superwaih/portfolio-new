import React from 'react'
import Image from 'next/image'


const ProjectCard = ({project_image, projectname, projectsummary, stacks_used, live_url, repo_url}) => {
  return (
    
    <div className="project-card justify-center  card items-center h-[39rem] lg:h-[35rem] w-full md:w-96    rounded transform hover:scale-105 duration-500 shadow dark:bg-DarkModeElement">
    <div className="card-img card-img object-contain  w-full  h-2/5">
     
      <img className='rounded-t-md w-full h-full object-cover' src={project_image} alt="project image" />
    </div>
    <div className="project-details p-3 md:p-8 space-y-4 ">
      <h4 className='font-bold' >{projectname}</h4>
      <p className='project-summary leading-6'>
        {projectsummary} 
      </p>
      <div className="stack grid grid-cols-2 gap-4 font-[12px]  justify-between">
          {stacks_used.map((stack, i) =>{
              return(
                <span key={i} className='bg-[#ccc] text-[#282c34]  rounded p-2'>{stack}</span>
              )
          })}
      </div>
      <div className="button flex font-bold justify-between">
        <a href={live_url}>Live Site</a>
        <a href={repo_url}>Source code </a>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard;
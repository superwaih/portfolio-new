import React from 'react'
import Image from 'next/image'
import {GoLinkExternal} from "react-icons/go"


const ProjectCard = ({project_image, projectname, projectsummary, stacks_used, live_url, repo_url}) => {
  return (
    
    <div className="project-card justify-center bg-black text-white  card items-center h-[39rem] lg:h-[37rem] w-full md:w-[400px]    rounded transform hover:scale-105 duration-500 shadow dark:bg-DarkModeElement">
    <div className="card-img card-img object-contain  w-full  h-2/5">
     
      <img className='rounded-t-md w-full h-full object-cover' src={project_image} alt="project image" />
    </div>
    <div className="project-details p-5 md:p-10 space-y-4 ">
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
        <a target="_blank" className='flex gap-4 items-center border p-2' href={live_url}>Live Site <GoLinkExternal /></a>
        <a target="_blank" className='border p-2 flex gap-4 items-center' href={repo_url}>Source code  <GoLinkExternal /></a>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard;

import React from 'react'
import Image from 'next/image'
import {GoLinkExternal} from "react-icons/go"


const ProjectCard = ({project_image, projectname, projectsummary, stacks_used, live_url, repo_url}) => {
  return (
    
    <div className="project-card gap-4 min-h-[630px]  bg-black text-white  card items-center flex flex-col w-full max-w-[380px]    rounded-[1.2rem] transform hover:scale-105 duration-500 shadow dark:bg-DarkModeElement">
    <div className="card-img card-img object-contain  w-full h-full">
     
      <img className='rounded-t-md w-full h-[300px] object-cover' src={project_image} alt="project image" />
    </div>
    <div className="project-details flex flex-col justify-between p-5 h-full w-full ">
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
      <div className="button flex font-bold py-3 gap-2 justify-between">
        <a target="_blank" rel="noreferrer" className='flex gap-4 text-[14px] items-center border p-2' href={live_url}>Live Site <GoLinkExternal /></a>
        <a target="_blank" rel="noreferrer" className='border p-2 flex gap-4 text-[14px] items-center' href={repo_url}>Source code  <GoLinkExternal /></a>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard;

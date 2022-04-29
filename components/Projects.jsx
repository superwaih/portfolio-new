import React from 'react'
import { projectsAll } from '../utils/data';
import ProjectCard from './ProjectCard'

const Projects = () => {
  // console.log(projectsAll)
  return (
    <div id='projects' className='p-8 md:p-10 space-x-5 space-y-10 mb-5' >
      <h3 className='text-center font-bold text-2xl md:text-5xl'>RECENT PROJECTS </h3>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 gap-x-12">
        {projectsAll.map((data) => {
          return(
            <ProjectCard key={data.id} project_image={data.project_image} live_url={data.live_url} projectsummary={data.project_summary} repo_url={data.repo_url} projectname={data.name} stacks_used={data.stacks_used}  />
                      
            
        )})}

      </div>
    </div>
  )
}

export default Projects
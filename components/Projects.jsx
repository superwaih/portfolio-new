import React from 'react'
import { useState } from 'react';
import { BsArrow90DegDown, BsArrow90DegUp, BsArrowBarUp, BsArrowDown } from 'react-icons/bs';
import { projectsAll } from '../utils/data';
import ProjectCard from './ProjectCard'

const Projects = () => {

  const[pageData, setPageData] = useState(false)

  const filterData = () => {
    let filterData = projectsAll;
    if (pageData) {
      filterData = filterData.slice(0, 6)
    } else {
      filterData = filterData.slice(0, 3)
    }
    return filterData
  }

  return (
    <div
    data-aos='fade-up'
     data-aos-duration='1000'
     data-aos-delay='300'
    id='projects' className='w-full mt-8 overflow-hidden space-y-10 mb-5' >
      <h3 className='text-start mt-12  font-bold text-3xl md:text-6xl italic'>RECENT PROJECTS </h3>
      <div
      data-aos='fade-down'
      data-aos-duration='1000'
      data-aos-delay='300'
      
      className="cards grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-20 gap-16 gap-x-12">
        {filterData().map((data) => {
          return(
            <ProjectCard key={data.id} project_image={data.project_image} live_url={data.live_url} projectsummary={data.project_summary} repo_url={data.repo_url} projectname={data.name} stacks_used={data.stacks_used}  />
                      
            
        )})}

      </div>

      {/* <a href="https://github.com/superwaih"> */}
        <div className='flex items-center py-8 justify-center'>
          <button
          onClick={() => setPageData(!pageData)}

           className='hover:bg-white hover:text-red-800 flex duration-300  bg-cyan-300 text-amber-900 font-semibold hover:scale-105 rounded-md transform text-xl outline-dotted px-4 md:px-20 py-4'>
            {pageData ? 
            <span className='flex items-center gap-5'>See Less Projects <BsArrowBarUp /> </span> : 
            <span className='flex items-center gap-5'>See More Projects <BsArrowDown /> </span>
            }
            
            </button>

        </div>
      {/* </a> */}
    </div>
  )
}

export default Projects
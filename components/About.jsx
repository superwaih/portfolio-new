import React from 'react';
import {
  SiSolidity, SiReact,
  SiNextdotjs,
  SiCss3, SiPython, SiLeaflet, SiGit, SiGeocaching, SiTailwindcss, SiEthereum, SiJavascript, SiHtml5,
} from "react-icons/si";

const About = () => {
  return (
    <div
      data-aos='fade-left'
      data-aos-duration='1000'
      data-aos-delay='300'

      id='about' className='flex flex-col justify-evenly items-center lg:flex-row w-full'>
      <div className="about-text w-full  space-y-5 p-4">
        <h2 className='text-4xl font-bold w-full' >Hello, I&apos;m Adewale Shittu</h2>
        <p className='leading-8 whitespace-normal text-left' >
          I&apos;m a frontend-developer with some experience in web3 development. In solving problems, my strategy is to break difficulties down into manageable chunks and then continue the process until the problem is solved. When I&apos;m not slapping my keyboards till something magical happens, I binge watch comedy sitcoms and solve crimes lol.

        </p>

        <button className='rounded shadow hover:bg-white hover:text-red-800  bg-cyan-300 text-amber-900 p-4 font-semibold' >
          <a href="https://drive.google.com/file/d/1WLhnDivt2eGnhERRYtjJtqJ1n8vEs_2s/view?usp=sharing">Download</a>
        </button>
      </div>

      <div className='tech-stacks flex flex-col items-center justify-center w-full'>
        <h3 className='py-4 my-4 px-2 font-bold text-2xl text-center' >Technologies I&apos;ve worked with and work with...</h3>
        <div className="flex  flex-col space-y-6 ">
          <div className='flex gap-8 space-x-20'>
            <SiCss3 className="border text-6xl border-orange-600 shadow-md cursor-pointer  p-2" />
            <SiEthereum size={32} />
            <SiGeocaching size={32} />
          </div>
          <div className='flex gap-8 space-x-20'>
            <SiGit size={32} />
            <SiJavascript size={32} />
            <SiNextdotjs size={32} />
          </div>
          <div className='flex gap-8 space-x-20'>
            <SiLeaflet size={32} />
            <SiReact className='animate-spin hover:mix-blend-overlay' size={32} />
            <SiPython size={32} />
          </div>

          <div className='flex gap-8 space-x-20' >
          <SiSolidity size={32} />
          <SiTailwindcss size={32} />

          <SiHtml5 size={32} />



        </div>

        </div>

      
      </div>
    </div>
  )
}

export default About

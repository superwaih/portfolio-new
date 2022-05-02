import React from 'react';
import { SiSolidity, SiReact,
  SiNextdotjs,
  SiCss3, SiPython, SiLeaflet,   SiGit, SiGeocaching, SiTailwindcss, SiEthereum, SiJavascript,SiHtml5,   } from "react-icons/si";

const About = () => {
  return (
    <div id='about' className='p-8 flex flex-col lg:flex-row'>
      <div className="about-text w-full lg-w-1/2 space-y-5 p-4">
        <h2 className='text-4xl font-bold w-full' >Hello, I&apos;m Shittu Adewale</h2>
        <p className='leading-8 whitespace-normal text-left' >
        I&apos;m a self-taught front-end developer, with special interest in web3 development I build website with a focus on simplicity, responsiveness, accessibility and pleasing aesthetics. As a solution oriented person, my approach is always focused on breaking down problems into small pieces and repeating the loop until the end.

      I also write articles to share knowledge about technologies i work with.
        </p>

        <button className='rounded shadow hover:bg-white hover:text-red-800  bg-cyan-300 text-amber-900 p-4 font-semibold' >Download Resume</button>
      </div>

      <div className='tech-stacks w-full lg-w-1/2 p-4'>
        <h3 className='py-2 px-2 font-bold text-xl' >Technologies I&apos;ve worked with and work with...</h3>
      <div className="grid grid-cols-3 gap-8  ">
      <SiCss3 size={32} />
      <SiEthereum size={32} />
      <SiGeocaching size={32} />
      <SiGit size={32} />
      <SiHtml5 size={32} />
      <SiJavascript size={32} />
      <SiNextdotjs size={32} />
      <SiLeaflet size={32} />
      <SiReact className='animate-spin hover:mix-blend-overlay' size={32} />
      <SiTailwindcss size={32} />
      <SiPython size={32} />
      <SiSolidity size={32} />    

      </div>
      </div>
    </div>
  )
}

export default About
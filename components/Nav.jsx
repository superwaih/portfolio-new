
import React, { useState } from 'react'
import { Link } from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

export default function Nav({theme, setTheme, burger, setBurger}) {
    
    const handleClick = () => {
        setBurger(!burger)
    }
    return(
     <nav 
     data-aos='fade-down'
     data-aos-duration='1000'
     data-aos-delay='300'
     className='shadow text-xl bg-white dark:bg-[#282c34] mb-12 opacity-80  fixed top-0 left-0 right-0 z-10 h-[100px]   p-8'>

   <div className="m-auto w-[90%] z-50 flex justify-between items-center">
   <div className="logo w-1/4 font-bold">
        <a>Adewale Shittu</a>
    </div>
  
    <div className="navlinks md:w-2/5 lg:w-2/4 md:flex hidden lg:block">
        <a className='p-4' href='#about' > About</a>
        <a href='#projects' className='p-4'>Project</a>
        <a href='#work-experience' className='p-4'>Experience</a>        
        <a href='#contact' className='hidden lg:inline-block p-4'>Contacts</a>
        
    </div>

    

    <div className="toggle-theme ">
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='cursor-pointer' >
       {theme === 'dark' ? <BsFillSunFill className='hover:animate-spin' /> :
        <BsMoonFill className='hover:animate-spin' /> }</button>
    </div>
    {/* <div onClick={() => setBurger(!burger)} className="burger-menu lg:hidden">
       {burger ? <AiOutlineClose className='text-4xl text-red-500 z-50'   /> 
       : <AiOutlineMenu className='text-4xl' />}

        
    </div> */}
   </div>

    
</nav>
    )}
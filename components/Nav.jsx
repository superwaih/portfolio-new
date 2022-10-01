
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
     className='shadow relative text-xl flex justify-between p-8'>

    <div className="logo w-1/4">
        <a>Adewale Shittu</a>
    </div>
  
    <div className="navlinks w-2/4 md:flex hidden lg:block">
        <a className='p-4' href='#about' > About</a>
        <a href='#projects' className='p-4'>Project</a>
        <a href='#work-experience' className='p-4'>Experience</a>        
        <a href='#contact' className='p-4'>Contact Me</a>
        
    </div>

    

    <div className="toggle-theme ">
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='cursor-pointer' >
       {theme === 'dark' ? <BsFillSunFill className='hover:animate-spin' /> :
        <BsMoonFill className='hover:animate-spin' /> }</button>
    </div>
    <div onClick={() => handleClick()} className="burger-menu z-50 lg:hidden">
       {burger ? <AiOutlineClose   /> 
       : <AiOutlineMenu  />}

        
    </div>

    
</nav>
    )}
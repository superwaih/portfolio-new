
import React, { useState } from 'react'
import { Link } from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

export default function Nav({theme, setTheme, burger, setBurger}) {
    
    const handleClick = () => {
        setBurger(!burger)
    }
    return(
     <nav className='shadow relative text-xl flex m-auto justify-between p-6'>
    
    <div className="logo w-1/4">
        <a>Shittu Adewale</a>
    </div>
  
    <div className="navlinks w-2/4 flex hidden lg:block">
        <a className='p-4' href='#about' > About</a>
        <a href='#projects' className='p-4'>Project</a>        
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
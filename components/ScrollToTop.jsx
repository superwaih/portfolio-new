import React, {useState, useEffect} from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = ({theme}) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () =>{
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])
  return (
    <div className='scroll-to-top'>
        {isVisible && (
            <div className={`${theme} === 'dark ? 'back-top-container bg-white' : 'back-top-container bg-white' `} onClick={scrollToTop}> 
            <BsFillArrowUpCircleFill size={48} />
            </div>
        )}
    </div>
  )
}

export default ScrollToTop;
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Head';
import Nav from '../components/Nav';
import Projects from '../components/Projects';
import ScrollToTop from '../components/ScrollToTop';
import SideNav from '../components/SideNav';




export default function Home() {
  const {theme, setTheme} = useTheme();
  const[burger, setBurger] = useState(false)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), [])
  if(!mounted){
    return null
  }
  return (
    <div className='App'>
      
      <Header />
      <ScrollToTop theme={theme} />
      <Nav burger={burger} setBurger={setBurger} theme={theme} setTheme={setTheme} />
     <SideNav burger={burger} setBurger={setBurger}/>
      <About />
      <Projects />
      <Footer />



     
    </div>
  )
}

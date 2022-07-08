import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Head';
import Nav from '../components/Nav';
import Projects from '../components/Projects';
import ScrollToTop from '../components/ScrollToTop';
import SideNav from '../components/SideNav';
import Head from 'next/head';


export default function Home() {
  const {theme, setTheme} = useTheme();
  const[burger, setBurger] = useState(false)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), [])
  if(!mounted){
    return null
  }
  return (
    <>
     <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width viewport-fit=cover"
      />
      <meta name="author" content="Shittu Adewale" />
      
      <meta name="description" content="Official Portfolio for Shittu Adewale" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Wale" />
      <meta property="og:description" content="Official Portfolio for Shittu Adewale, A student of the federal university of technology, akure, Self-taught full stack developer" />
      <meta property="og:title" content="Frontend Developer" />
      <meta name="twitter:creator" content="@adewaleszn" />
      <meta name="twitter:site" content="@adewaleszn" />
      <meta name="twitter:title" content="Official Portfolio for Shittu Adewale" />
      <meta name="twitter:description" content="official twitter account for Shittu Adewale" />
      <meta
        property="og:url"
        content={`wale.vercel.app`}
      />
     
      <title>Shittu Adewale Portfolio</title>
    </Head>

    <main className='App'>
      
      
      <Header />
      <ScrollToTop theme={theme} />
      <Nav burger={burger} setBurger={setBurger} theme={theme} setTheme={setTheme} />
     <SideNav burger={burger} setBurger={setBurger}/>
      <About />
      <Projects />
      <Footer />



     
    </main>
    
    </>
  
  )
}

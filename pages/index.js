import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react';
import About from 'components/About';
import Footer from 'components/Footer';
import Header from 'components/Head';
import Nav from 'components/Nav';
import Projects from 'components/Projects';
import ScrollToTop from 'components/ScrollToTop';
import SideNav from 'components/SideNav';
import Head from 'next/head';
import WorkExperience from 'components/WorkExperience';

// import aos (animate on scroll)
import Aos from 'aos';
import 'aos/dist/aos.css';
import Loader from '@/components/Loader';


export default function Home() {
  const { theme, setTheme } = useTheme();
  const [loading, setLoading] = useState(true)
  const [burger, setBurger] = useState(false)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {

  })
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  useEffect(() => setMounted(true), [])
  if (!mounted) {
    return null
  }
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width viewport-fit=cover"
        />
        <meta name="author" content="Adewale Shittu" />

        <meta name="description" content="Official Portfolio for Adewale Shittu" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wale" />
        <meta property="og:description" content="Official Portfolio for Adewale Shittu, A student of the federal university of technology, akure, Self-taught full stack developer" />
        <meta property="og:title" content="Frontend Developer" />
        <meta name="twitter:creator" content="@adewaleszn" />
        <meta name="twitter:site" content="@adewaleszn" />
        <meta name="twitter:title" content="Official Portfolio for Adewale Shittu" />
        <meta name="twitter:description" content="official twitter account for Adewale Shittu" />
        <meta
          property="og:url"
          content={`wale.vercel.app`}
        />

        <title>Adewale Shittu Portfolio</title>
      </Head>
      {/* {loading ? <Loader loading={loading} setLoading={setLoading} /> : */}

        <main className='App max-w-8xl'>
          <Header />
          <ScrollToTop theme={theme} />
          <Nav burger={burger} setBurger={setBurger} theme={theme} setTheme={setTheme} />
          <SideNav burger={burger} setBurger={setBurger} />
          <div className='py-8 w-[90%] m-auto px-6  ' >
            <About />
            <Projects />
            <WorkExperience />
            <Footer />

          </div>



        </main>

      {/* } */}


    </>

  )
}

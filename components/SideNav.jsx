export default function SideNav({burger}) {
  return (
    <div className={burger ? "absolute navlinks z-40 top-0 right-0 text-red-500 left-0 flex bg-rose-400 flex-col font-bold p-20 h-screen" : 'hidden'}>
    <a className='p-4' href='#about' > About</a>
    <a href='#projects' className='p-4'>Project</a>        
    <a href='#contact' className='p-4'>Contact Me</a>
  </div>
  );
}
export default function SideNav({burger}) {
  return (
    <div className={burger ? "absolute navlinks z-40 top-0 right-0 w-[20rem] text-red-500 flex bg-DarkModeElement flex-col font-bold p-20 h-[40rem]" : 'hidden'}>
    <a className='p-4' href='#about' > About</a>
    <a href='#projects' className='p-4'>Project</a>        
    <a href='#contact' className='p-4'>Contact Me</a>
  </div>
  );
}
import OutsideClickHandler from 'react-outside-click-handler';
export default function SideNav({burger, setBurger}) {
  return (
    <OutsideClickHandler
    onOutsideClick={() => {
     setBurger(false)
    }}
    >
      <div className={burger ? "absolute duration-400 ease-in-out transition navlinks z-40 top-0 right-0 w-[20rem] text-red-500 flex bg-white dark:bg-DarkModeElement flex-col font-bold p-20 h-[40rem]" : 'hidden'}>
    <a className='p-4 hover:text-purple-800' href='#about' > About</a>
    <a className='p-4 hover:text-purple-800' href='#projects' >Project</a>        
    <a  className='p-4 hover:text-purple-800' href='#contact' >Contact Me</a>
  </div>

    </OutsideClickHandler>
    
  );
}
import { AiFillCloseSquare } from 'react-icons/ai';
import OutsideClickHandler from 'react-outside-click-handler';
export default function SideNav({ burger, setBurger }) {
  return (
    <>
   
    <OutsideClickHandler
      onOutsideClick={() => {
        setBurger(false)
      }}
    >
      <div className={burger ? "absolute duration-400 h-screen justify-center ease-in-out items-center z-10 transition navlinks top-0 left-0 bottom-0 right-0 text-red-500 flex bg-white dark:bg-DarkModeElement flex-col font-bold p-20" : 'hidden'}>
        <AiFillCloseSquare className='top-0 text-6xl right-0 absolute' />
        
          <a className='p-4 hover:text-purple-800' href='#about' > About</a>
          <a className='p-4 hover:text-purple-800' href='#projects' >Project</a>
          <a className='p-4 hover:text-purple-800' href='#contact' >Contact Me</a>
        
      </div>

    </OutsideClickHandler>
    </>

  );
}
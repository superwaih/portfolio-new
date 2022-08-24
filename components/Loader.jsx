import React from 'react'
import CircleLoader from "react-spinners/CircleLoader";

const Loader = ({loading, setLoading}) => {
  return (
    <div className='flex loader justify-center text-center gap-4 h-screen items-center flex-col'>
       <h2 className='text-3xl uppercase text-white'> welcome to this universe 
</h2>
        <CircleLoader

            color={"#7ED321"} loading={loading}  size={150} />

        <button
              onClick={() => setLoading(!loading)}
        className='rounded shadow hover:bg-white hover:text-red-800  bg-cyan-300 text-amber-900 p-4 font-semibold'
        >Enter WaleVerse</button>


    </div>
  )
}

export default Loader
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full flex bg-black transperen bg-opacity-50 text-white justify-between p-6 z-40'>
        <div className='flex gap-5 cursor-pointer'>
            <span className='flex'>
              <Link to="/"><img src="https://movieoapp.vercel.app/static/media/logo.5f76119f8f1f473eea2f.png" className='w-24' alt="Home" /></Link>
             </span>
            <p><Link to="/tvshows">TV Show</Link></p>
            <p><Link to="/movies">Movies</Link></p>
           
            
        </div>
        <div className='flex gap-5'>
            <input placeholder='search here...' className='bg-transparent border-none'/>
            <button className="">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M338.29 338.29 448 448"
              ></path>
            </svg>
          </button>
            <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 16c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08C16.71 18.72 14.5 20 12 20z" />
            </svg>
          </button>
        </div>
         

    
    </div>
  )
}

export default Navbar

// import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-800 px-5 py-3 flex justify-between items-center sticky top-0 z-50'>
      <p className='text-white'>
        Coffeefy
      </p>
      <div className='space-x-3 flex'>
        <button className='rounded-full border border-yellow-500 px-4 py-[7px] text-white hover:bg-yellow-500 hover:text-black transition-all'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
        <button className='rounded-full border border-yellow-500 px-4 py-[7px] text-white hover:bg-yellow-500 hover:text-black transition-all'>
          Sign in
        </button>
        <button className='rounded-full text-black border-yellow-500 bg-yellow-500 px-4 py-[7px] hover:bg-yellow-600 transition-all'>
          Sign up
        </button>
      </div>

    </div>
  )
}

export default Navbar
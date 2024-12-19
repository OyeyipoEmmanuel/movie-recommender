import React from 'react'
import { BiSolidCameraMovie } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';




const Nav = () => {
  const location = useLocation()
  const isMoviesListPage = location.pathname === '/movies-list'

  return (
    <div className='fixed w-full top-0 justify-between items-center bg-black text-white px-3 flex space-x-3 md:px-12 lg:px-16 h-20'>
      <div className='flex items-center justify-center'>
      <BiSolidCameraMovie className='text-4xl text-red-600'/>
      <h1 className='text-2xl md:text-3xl'>Mr. Recommender</h1>
      </div>
        {isMoviesListPage && <Link to="/" className='text-xl text-gray-400'>Home</Link>}
    </div>
  )
}

export default Nav
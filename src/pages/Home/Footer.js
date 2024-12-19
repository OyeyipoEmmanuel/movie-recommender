import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-500 text-center pt-2 pb-6">
    <h1 className='italic'>...Reach out to me...</h1>
    <div className="flex items-center justify-center space-x-12 mt-1 text-3xl">
      <FaSquareXTwitter className="hover:text-red-500 hover:transition-all cursor-pointer duration-300 hover:animate-ping" />
      <FaWhatsappSquare className="hover:text-red-500 hover:transition-all cursor-pointer duration-300 hover:animate-ping" />
      <FaGithubSquare className="hover:text-red-500 hover:transition-all cursor-pointer duration-300 hover:animate-ping" />
    </div>
  </footer>
  
  )
}

export default Footer
import React from 'react'
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex py-4 px-4 justify-between items-center'>
        <div className='text-xl font-medium   font-bold'> Haziq </div>
        <div className='  p-[5px] font-bold' style={{color:'green'}}> . </div>
        <ul className='gap-10 lg:gap-16 hidden md:flex ml-auto'>
          <li className='menuLink'><a href='#hero'>Home</a></li>
          <li className='menuLink'><a href='#about'>About</a></li>
          <li className='menuLink'><a href='#projects'>Projects</a></li>
          <li className='menuLink'><a href='#skills'>Skills</a></li>
          <li className='menuLink'><a href='#contact'>Contact</a></li>
        </ul>
        <CgMenuRight className='md:hidden block' size={30} />
      </div>
    </div>
  )
}

export default Navbar

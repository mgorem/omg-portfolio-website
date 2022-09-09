import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    
    const handleNav = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo" style={{width: "100px"}}/>
      </div>
      {/* menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

      {/* hamburger */}
      <div onClick={handleNav} className='md:hidden z-10' style={{cursor: 'pointer'}}>
        { !nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile-menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-2xl'>Home</li>
        <li className='py-6 text-2xl'>About</li>
        <li className='py-6 text-2xl'>Skills</li>
        <li className='py-6 text-2xl'>Experience</li>
        <li className='py-6 text-2xl'>Projects</li>
        <li className='py-6 text-2xl'>Contact</li>
      </ul>

      {/* social-icons */}
      <div className='hidden'></div>
    </div>
  )
}

export default Navbar

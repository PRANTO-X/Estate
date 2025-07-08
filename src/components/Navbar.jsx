import React,{useState,useEffect} from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu,setShowMobileMenu] = useState(false);

  const handleMobileMenu=()=>{
      setShowMobileMenu(prev=>!prev);
  }

useEffect(() => {
  if (showMobileMenu) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }

  
  return () => {
    document.body.classList.remove('overflow-hidden');
  };
}, [showMobileMenu]);


  return (
    <div className='absolute top-0 left-0 right-0 w-full z-10 container 
                    mx-auto flex flex-row justify-between items-center
                    py-6 px-6 md:px-15 lg:px-32 bg-transparent'>

        <img src={assets.logo} alt="" />

        <ul className='hidden md:flex gap-7 text-white'>
            <a href="#Hero" className='cursor-pointer hover:text-gray-400 transition duration-300 text-xl'>Home</a>
            <a href="#About" className='cursor-pointer hover:text-gray-400 transition duration-300 text-xl'>About</a>
            <a href="#Projects" className='cursor-pointer hover:text-gray-400 transition duration-300 text-xl'>Projects</a>
            <a href="#Testimonial" className='cursor-pointer hover:text-gray-400 transition duration-300 text-xl'>Testimonial</a>
        </ul>

        <button className='hidden md:block cursor-pointer  bg-white px-8 py-2 rounded-full'>Sign Up</button>

        <img src={showMobileMenu ? assets.cross_icon : assets.menu_icon } id='menuBtn' onClick={handleMobileMenu} alt="" loading='lazy' className='md:hidden w-7 z-100' />

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 bottom-0 right-0 w-full z-50 overflow-hidden
              backdrop-blur-sm bg-white/10 transition-transform duration-500 ease-in-out
              ${showMobileMenu ? '-translate-y-0' : '-translate-y-full'}`}>

          <ul className='flex flex-col items-center gap-8 mt-25 px-5 text-lg font-medium text-white'>
            <a onClick={handleMobileMenu} href="#Hero" className='px-4 py-2 rounded-full'>Home</a>
            <a onClick={handleMobileMenu} href="#About" className='px-4 py-2 rounded-full'>About</a>
            <a onClick={handleMobileMenu} href="#Projects" className='px-4 py-2 rounded-full'>Projects</a>
            <a onClick={handleMobileMenu} href="#Testimonial" className='px-4 py-2 rounded-full'>Testimonial</a>
          </ul>
          
        </div>

    </div>
    
  )
}

export default Navbar
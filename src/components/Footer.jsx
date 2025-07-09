import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div id='Footer' className='py-7 px-6 md:px-15 lg:px-32 w-full overflow-hidden bg-gray-900'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>   

            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="logo dark" loading='lazy'/>
                <p className='text-gray-400 mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, illum nam. 
                    Praesentium ipsam iure quam deleniti qui, ipsa veniam voluptas!
                </p>
            </div>

            <div className='w-full md:w-1/5  mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-3'>
                    <a href="#Hero" className='hover:text-white text-gray-400 transition duration-300'>Home</a>
                    <a href="#About" className='hover:text-white text-gray-400 transition duration-300'>About Us</a>
                    <a href="#Contact" className='hover:text-white text-gray-400 transition duration-300'>Contact Us</a>
                    <a href="#" className='hover:text-white text-gray-400 transition duration-300'>Privacy Policy</a>
                </ul>
            </div>

            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                <p className='text-gray-400 mb-4 max-w-80'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui officiis ipsam velit accusamus ea ratione!</p>

                <div className='flex gap-2 items-center'>
                    <input type="email" placeholder='Enter your email'
                    className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-1/2 md:w-auto' />
                    <button className='bg-blue-500 px-4 py-2 rounded text-white'>Subscribe</button>
                </div>
            </div>

        </div>

        <p className='border-t border-gray-700 pt-4 mt-10 text-center text-gray-500'>
            Copyright 2024 &copy GreatStack.All Rights Reserved
        </p>
    </div>
  )
}

export default Footer
import React from 'react'
import Navbar from './Navbar'
import headerImg from '../assets/header_img.png'

const Hero = () => {
  return (
    <div id='Hero' className='min-h-screen mb-4 bg-cover bg-center 
                    flex items-center w-full overflow-hidden'
                    style={{backgroundImage: `url(${headerImg})`}}>
        
        <Navbar/>

        <div className='container mx-auto text-center text-white  py-4 px-6 md:px-15 lg:px-32'>
            <h1 className='text-4xl md:text-7xl font-semibold  max-w-3xl inline-block leading-tight md:leading-none'>Explore homes that fit your dreams</h1>
            <div className='space-x-6 mt-16'>
                <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
                <a href="#Contact" className='bg-blue-500  px-8 py-3 rounded'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div id='About' className='section-container flex flex-col items-center justify-center'>
        <h2 className='heading'>About  <span className='sub-heading'>Our Brand</span></h2>
        <p className='title'>Passionate about properties,Dedicated to your vision</p>

        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
            <div className="md:max-w-1/2">
                <img src={assets.brand_img} className='w-1/2 md:w-full mx-auto max-w-lg' loading='lazy' alt="brand img" />
            </div>

            <div className="md:max-w-1/2 flex flex-col items-center md:items-start mt-10 text-gray-600">
                <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                    <div>
                        <p className="text-3xl md:text-4xl font-medium text-gray-800">10+</p>
                        <p>Years of Experience</p>
                    </div>

                    <div>
                        <p className="text-3xl md:text-4xl font-medium text-gray-800">12+</p>
                        <p>Projects Complete</p>
                    </div>

                    <div>
                        <p className="text-3xl md:text-4xl font-medium text-gray-800">20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>

                    <div>
                        <p className="text-3xl md:text-4xl font-medium text-gray-800">25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className="my-10 max-w-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, rerum. 
                        Tempore, animi? Quasi, magni dolorem. Quaerat vero possimus in, doloremque 
                        quam facilis quod cumque! Deleniti pariatur repellat illum nihil vero.
                </p>

                <button className='bg-blue-500  px-8 py-3 rounded text-white self-start'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonial = () => {
  return (
    <div id='Testimonial' className='section-container'>
        <h2 className='heading'>Customer <span className='sub-heading'>Testimonials</span></h2>
        <p className='title'>Real stories from those who found home with us</p>

        <div className="flex flex-wrap justify-center gap-8">
            {testimonialsData.map((testimonial,index)=>(
               <div key={index} className=" lg:max-w-[340px] border shadow-lg rounded px-8 py-12 text-center">
                    <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4' loading='lazy'/>
                    <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>

                    <div className='flex justify-center gap-1 mb-4'>
                        {Array.from({length: testimonial.rating},(item,index)=>(
                            <img key={index} src={assets.star_icon} alt="" />
                        ))}
                    </div>

                    <p className='text-gray-600'>{testimonial.text}</p>
               </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonial
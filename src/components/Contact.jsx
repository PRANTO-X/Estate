import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='section-container overflow-hidden'>
        <h2 className='heading'>Contact  <span className='sub-heading'>With Us</span></h2>
        <p className='title'>Ready to make a move?Let's build your future together</p>

        <form className="max-w-4xl mx-auto pt-5 text-gray-600 flex flex-col justify-center">
            <div className='flex flex-wrap mb-3'>
                <div className="w-full md:w-1/2 text-left">
                    <p className='font-semibold'>Your Name</p>
                    <input type="text" placeholder='Your name' name='name' 
                    className='w-full border border-gray-300 rounded py-3 px-4 mt-2' required/>
                </div>

                <div className="w-full md:w-1/2 text-left md:pl-4 mt-3 md:mt-0  ">
                    <p className='font-semibold'>Your Email</p>
                    <input type="email" placeholder='your email' name='email' 
                    className='w-full border border-gray-300 rounded py-3 px-4 mt-2' required/>
                </div>
            </div>

            <div>
                <p className="font-semibold">Message</p>
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 '
                 name="message" placeholder='message' required></textarea>
            </div>

            <button className='bg-blue-500 mt-3 px-12 py-3 rounded text-white self-center'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact
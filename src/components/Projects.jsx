import React,{useRef} from 'react'
import { assets, projectsData } from '../assets/assets'
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const Projects = () => {

  const swiperRef = useRef(null)

  return (
    <div id="Projects" className='section-container'>
        <h2 className='heading'>Projects  <span className='sub-heading'>Completed</span></h2>
        <p className='title'>Crafting Spaces,Building Legacies-Explore Our Portfolio</p>

        {/* Slider Btn */}
        <div className='flex justify-end items-center mb-8'>
          <button   onClick={() => swiperRef.current?.slidePrev()} className='p-3 bg-gray-200 hover:bg-gray-100 transition duration-300 rounded mr-2 cursor-pointer'>
            <img src={assets.left_arrow} loading='lazy' alt="" />
          </button>

          <button   onClick={() => swiperRef.current?.slideNext()} className='p-3 bg-gray-200 hover:bg-gray-100 transition duration-300 rounded mr-2 cursor-pointer'>
            <img src={assets.right_arrow} loading='lazy' alt="" />
          </button>
        </div>

        <Swiper
            modules={[Navigation,Pagination]}
            spaceBetween={50}
            slidesPerView={4}
            pagination={{ clickable: true }}
            loop={true}
            onSwiper={(swiper) => swiperRef.current = swiper}
            breakpoints={{
              0: { slidesPerView: 1 },
              565: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1275: {slidesPerView: 4},
            }}
          >
            {projectsData.map((projects,index)=>(
              <SwiperSlide key={index} className='relative w-full'>
                <img src={projects.image} alt={projects.title} loading='lazy' className='mb-14' />
                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                    <div className='bg-white shadow-md w-3/4 px-4 py-2 inline-block text-center'>
                        <h2 className='text-xl font-semibold text-gray-800'>{projects.title}</h2>
                        <p className='text-gray-500 text-sm'>{projects.price} <span className='px-1'>|</span> {projects.location}</p>
                    </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

export default Projects
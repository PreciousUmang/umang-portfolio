import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { services } from '../utils/Services'
import { IoArrowForwardOutline } from 'react-icons/io5'

const Services = () => {
  return (
    <div className='my-12 px-12'>
      <div className='flex justify-between items-center'>
        <div className='bg-green-600 rounded-full w-[20px] h-[7px]'></div>
        <div className='border-[1px] mt-[-2px] mr-4 w-full'></div>
        <h2 className='font-bold text-[24px]'>SERVICES</h2>
        <div className='border-[1px] mt-[-2px] ml-4 w-full'></div>
        <div className='bg-green-600 rounded-full w-[20px] h-[7px]'></div>
      </div>
      <div className='flex justify-around mt-16'>
        {services.map(service => {
          const ref = useRef(null)
          const inView = useInView(ref, { once: true })

          return (
            <motion.div 
              className='flex flex-col items-center gap-6 px-1 text-center'
              key={service.id}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: service.id * 0.2 }}
            >
              <div className='bg-gray-200 rounded-full w-[80px] h-[80px]'>
                <motion.img
                  src={service.logo}
                  alt=''
                  className='p-5 w-[80px] h-[80px] text-gray-400 hover:scale-110 transition-all duration-300 cursor-pointer'
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <h2 className='mt-5 font-bold'>{service.title}</h2>
              <h2 className='text-gray-400'>{service.desc}</h2>
              <IoArrowForwardOutline className='bg-green-500 p-2 rounded-full text-[35px] text-white cursor-pointer hover:scale-110 transition-all'/>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
export default Services

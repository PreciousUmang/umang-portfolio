import { motion } from 'framer-motion'
import profileImage from '../../public/profilepic.jpg'

function Introduction() {
  return (
    <>
      <div className='flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 text-center'>
        <div className='mt-[70px] border-r-[1px] h-[90px]' />
        <div className='bg-green-500 rounded-full w-[5px] h-[5px]' />
        <motion.h2
          className='mt-5 font-medium text-[13px] text-black tracking-widest'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          HELLO! I AM
        </motion.h2>
        <motion.h2
          className='my-5 font-bold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] tracking-widest'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
         PRECIOUS,
        </motion.h2>
        <motion.img
          src={profileImage}
          alt=''
          className='bg-gray-200 p-7 rounded-full w-[120px] sm:w-[140px] md:w-[160px] h-[120px] sm:h-[140px] md:h-[160px]'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
    </>
  )
}

export default Introduction

import { motion } from 'framer-motion'
import profileImage from '/public/profilePic.jpg'

function Introduction () {
  return (
    <>
      <div className='flex flex-col justify-center items-center text-center'>
        <div className='mt-[70px] border-r-[1px] h-[90px]' />
        <div className='bg-green-500 rounded-full w-[5px] h-[5px]' />
        <motion.h2 
          className='mt-5 font-medium text-[13px] text-black tracking-widest'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          HELLO! MY NAME IS
        </motion.h2>
        <motion.h2 
          className='mt-5 font-bold text-[70px] tracking-widest px]'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          UMANG
          <br />
          RATHOUR
        </motion.h2>
        <motion.img 
          src={profileImage} 
          alt='' 
          className='bg-gray-200 p-7 rounded-full w-[160px] h-[160px]'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
    </>
  )
}
export default Introduction

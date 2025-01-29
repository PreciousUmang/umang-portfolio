import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import aboutMe from '../utils/aboutMe'
import { motion } from 'framer-motion'

function About () {

  return (
    <div className='flex flex-col items-center mt-12 px-4 sm:px-8 md:px-44 text-center'>
      <motion.h2
        className='font-bold text-2xl md:text-[40px]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {aboutMe.HEADING}
      </motion.h2>
      <BiSolidQuoteAltLeft className='bg-green-500 my-5 p-3 rounded-full text-[44px] text-white' />
      <h2 className='my-5 text-[14px] text-gray-400'> {aboutMe.CONTENT}</h2>
      <BiSolidQuoteAltRight className='bg-green-500 my-5 p-3 rounded-full text-[44px] text-white' />
    </div>
  )
}

export default About

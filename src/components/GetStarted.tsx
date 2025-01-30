import { motion } from 'framer-motion'
import useInViewAnimation from '../hooks/useInViewAnimation'
import MotionButton from './MotionButton'
function GetStarted () {
  const animationProps = useInViewAnimation(
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0 },
    { duration: 0.5 }
  )

  return (
    <motion.div
      {...animationProps}
     
    >
      <div className='flex justify-between items-center'>
        <div className='bg-green-600 rounded-full w-[7px] h-[7px]'></div>
        <div className='mt-[-2px] mr-4 border-b-[1px] w-1/2'></div>
        <div className='mt-[-2px] ml-4 border-b-[1px] w-1/2'></div>
        <div className='bg-green-600 rounded-full w-[7px] h-[7px]'></div>
      </div>
      <div  className='my-5 font-semibold text-center text-wrap sm:text-[40px] md:text-[60px] lg:text-[70px]'>Ready to get started in building something exceptional?</div>
      <MotionButton/>
    </motion.div>
  )
}

export default GetStarted

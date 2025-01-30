import { useState, useEffect } from 'react'
import { reviews } from '../utils/reviews'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from 'react-icons/fa'
import useInViewAnimation from '../hooks/useInViewAnimation'

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const animationProps = useInViewAnimation(
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0 },
    { duration: 0.5 }
  )

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    )
  }

  return (
    <motion.div
      {...animationProps}
      className='my-8 px-8 overflow-hidden'
    >
      <div className='flex justify-between items-center'>
        <div className='bg-green-600 rounded-full w-[20px] h-[7px]'></div>
        <div className='border-[1px] mt-[-2px] mr-4 w-full'></div>
        <h2 className='font-bold text-[24px]'>Reviews</h2>
        <div className='border-[1px] mt-[-2px] ml-4 w-full'></div>
        <div className='bg-green-600 rounded-full w-[20px] h-[7px]'></div>
      </div>

      <div className='relative shadow-green-500 mt-8'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className='flex justify-center items-center shadow-lg rounded-lg h-[420px] sm:h-64 md:h-52 lg:h-48'>
              <CardContent className='text-center'>
                <p className='my-4 font-bold'>{reviews[currentIndex].author}</p>
                <FaQuoteLeft className='mx-auto text-green-500' />
                <p className='mt-4 text-gray-800 text-sm italic'>{reviews[currentIndex].text}</p>{' '}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='flex justify-center mt-4'>
        <button className='mx-8 prev-btn' onClick={handlePrev}>
          <FaChevronLeft className='text-green-500'/>
        </button>
        <button className='mx-8 next-btn' onClick={handleNext}>
          <FaChevronRight className='text-green-500'/>
        </button>
      </div>
    </motion.div>
  )
}

export default Reviews

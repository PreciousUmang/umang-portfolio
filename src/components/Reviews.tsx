import { useState, useEffect } from 'react';
import { reviews } from '../utils/reviews';
import { motion, AnimatePresence } from 'framer-motion';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='my-12 p-12 h-fit'>
      <div className='flex justify-between items-center'>
        <div className='bg-green-600 rounded-full w-[20px] h-[7px]'></div>
        <div className='border-[1px] mt-[-2px] mr-4 w-full'></div>
        <h2 className='font-bold text-[24px]'>Reviews</h2>
        <div className='border-[1px] mt-[-2px] ml-4 w-full'></div>
        <div className='bg-green-600 rounded-full w-[20px] h-[7px]'></div>
      </div>

      <div className='relative mt-8'>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='text-center'
          >
            <p className='mt-4 font-bold'>{reviews[currentIndex].author}</p>
            <p className='mt-4'>{reviews[currentIndex].text}</p>
          </motion.div>
        </AnimatePresence>
        
        <div className='right-0 bottom--8 left-0 absolute flex justify-center mt-4'>
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${index === currentIndex ? 'bg-green-600' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

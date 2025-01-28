import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function ProgressBar () {
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return ()=> {window.removeEventListener('scroll', onScroll)}
  }, [])

  function onScroll() {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  }
  const [scrollTop, setScrollTop] = useState(0)
  return (
    <motion.div 
      className='fixed bg-gray-200 mt-[90px] mb-4 ml-[-5px] w-1.5 h-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.div 

        className='bg-green-600 transition-all duration-1000 ease-out' 
        style={{height: `${scrollTop}%`}}
        initial={{ height: 0 }}
        animate={{ height: `${scrollTop}%` }}
        transition={{ duration: 1 }}
      ></motion.div>
    </motion.div>
  )
}

export default ProgressBar

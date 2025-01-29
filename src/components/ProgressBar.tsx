import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
function ProgressBar () {
  const [scrollTop, setScrollTop] = useState<any>()
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100

    setScrollTop(scrolled)
  }
  return (
    <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
      className='fixed bg-gray-200 mt-[90px] mb-4 ml-[-5px] w-1.5 h-full'
    >
      <div
        className='bg-green-600 transition-all duration-1000 ease-out'
        style={{ height: `${scrollTop}%` }}
      ></div>
    </motion.div>
  )
}

export default ProgressBar

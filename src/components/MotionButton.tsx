import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiUpwork, SiFreelancer } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

const MotionButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className='relative flex justify-center items-center my-8' style={{ height: '60px' }}>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 50, backgroundColor: '#38a169' }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
            whileHover={{ scale: 1.1, backgroundColor: '#38a169' }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePopup}
            className='bg-green-500 shadow-lg px-4 py-2 rounded-full text-white'
          >
            Contact Me
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
            className='absolute flex gap-4'
          >
            <a href='mailto:umang@technologist.com' target='_blank'>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  color: '#1e90ff',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px rgba(30, 144, 255, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className='border-2 p-2 border-transparent text-gray-500'
              >
                <MdEmail className='text-2xl cursor-pointer' />
              </motion.div>
            </a>
            <a
              href='https://www.upwork.com/freelancers/~0102c9a268bbd107bb'
              target='_blank'
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  color: '#6fda44',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px rgba(111, 218, 68, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className='border-2 p-2 border-transparent text-gray-500'
              >
                <SiUpwork className='text-2xl cursor-pointer' />
              </motion.div>
            </a>
            <a
              href='https://www.freelancer.com/u/PreciousUmang'
              target='_blank'
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  color: '#29b2fe',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px rgba(41, 178, 254, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className='border-2 p-2 border-transparent text-gray-500'
              >
                <SiFreelancer className='text-2xl cursor-pointer' />
              </motion.div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MotionButton

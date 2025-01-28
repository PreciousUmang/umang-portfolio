import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import profilePic from '/myProfilePic.jpg'

function ProfilePic () {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div 
      className='fixed mt-[90px]'
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={profilePic}
        alt='Profile Picture'
        className='h-screen object-cover'
        initial={{ scale: 0.8 }}
        animate={inView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  )
}
export default ProfilePic

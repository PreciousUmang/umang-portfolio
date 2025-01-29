import { motion } from 'framer-motion'
import profilePic from '/myProfilePic.jpg'
import useInViewAnimation from '../hooks/useInViewAnimation';

function ProfilePic () {
  const animationProps = useInViewAnimation(
    { opacity: 0 },
    { opacity: 1 },
    { duration: 1 }
  );

  return (
    <motion.div 
      className='fixed mt-[90px]'
      {...animationProps}
    >
      <motion.img
        src={profilePic}
        alt='Profile Picture'
        className='h-screen object-cover'
        initial={{ scale: 0.8 }}
        animate={{scale: 1}}
        transition={{ duration: 1 }}
      />
    </motion.div>
  )
}
export default ProfilePic

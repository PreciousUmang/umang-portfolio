import { FaEnvelope } from 'react-icons/fa';
import { SiLinkedin, SiUpwork, SiFreelancer } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import useInViewAnimation from '../hooks/useInViewAnimation';

const Contact = () => {
  const iconVariants = (color: string) => ({
    initial:{
      border: '2px solid inherit',
    },
    animate: {
      scale: [1, 1.2, 1],
      padding: '0.75rem',
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'mirror' as 'mirror' | 'loop' | 'reverse'
      }
    },
    hover: {
      scale: 1.2,
      border: `2px solid ${color}`,
      borderRadius: '50%',
      boxShadow: `0 0 10px ${color}`,
      color: color,
      padding: '0.75rem',
      rotate: 45,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  });

  useEffect(() => {
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.height = '';
      document.body.style.height = '';
      document.body.style.margin = '';
      document.body.style.overflow = 'auto';
    };
  }, []);

  const animationProps = useInViewAnimation(
    { opacity: 0, y: 0 },
    { opacity: 1, y: 0 },
    { duration: 1, delay: 0.5}
  );

  return (
    <motion.div {...animationProps} className='relative flex flex-col justify-center items-center px-4 md:px-8 pt-[90px] w-full md:w-[calc(100vw-var(--sidebar-width))] min-h-[calc(100vh-var(--header-height)-var(--footer-height))] overflow-hidden overflow-x-hidden'>
      <div className='relative flex justify-center items-center w-[200px] sm:w-[300px] h-[200px] sm:h-[300px]'>
        <motion.div
          className='absolute text-gray-500'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 sm:w-12 h-8 sm:h-12">
            <path fillRule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM6 8c.552 0 1-.672 1-1.5S6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8Zm5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5Zm.005 4.245a.75.75 0 0 0-1.06 0 2.75 2.75 0 0 1-3.89 0 .75.75 0 0 0-1.06 1.06 4.25 4.25 0 0 0 6.01 0 .75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
          </svg>
        </motion.div>
        <motion.a
          href='mailto:umang@technologist.com'
          className='top-0 left-1/2 absolute transform -translate-x-1/2'
          variants={iconVariants('#EA4335')}
          animate="animate"
          whileHover="hover"
        >
          <FaEnvelope className='text-[#EA4335] text-3xl sm:text-4xl' />
        </motion.a>
        <motion.a
          href='https://www.linkedin.com/in/PreciousUmang'
          target='_blank'
          rel='noopener noreferrer'
          className='top-1/2 left-0 absolute transform -translate-y-1/2'
          variants={iconVariants('#0077b5')}
          animate="animate"
          whileHover="hover"
        >
          <SiLinkedin className='text-3xl text-blue-700 sm:text-4xl' />
        </motion.a>
        <motion.a
          href='https://www.freelancer.com/u/PreciousUmang'
          target='_blank'
          rel='noopener noreferrer'
          className='bottom-0 left-1/2 absolute transform -translate-x-1/2'
          variants={iconVariants('#29B2FE')}
          animate="animate"
          whileHover="hover"
        >
          <SiFreelancer className='text-[#29B2FE] text-3xl sm:text-4xl' />
        </motion.a>
        <motion.a
          href='https://www.upwork.com/freelancers/~0102c9a268bbd107bb'
          target='_blank'
          rel='noopener noreferrer'
          className='top-1/2 right-0 absolute transform -translate-y-1/2'
          variants={iconVariants('#6fda44')}
          animate="animate"
          whileHover="hover"
        >
          <SiUpwork className='text-3xl text-green-500 sm:text-4xl' />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;

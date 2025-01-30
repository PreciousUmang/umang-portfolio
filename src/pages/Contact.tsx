import { FaEnvelope } from 'react-icons/fa';
import { SiLinkedin, SiUpwork, SiFreelancer } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Contact = () => {
  const iconVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'mirror' as 'mirror' | 'loop' | 'reverse'
      }
    },
    hover: {
      scale: 1.1,
      border: '2px solid currentColor',
      borderRadius: '50%',
      rotate: 45,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  };

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

  return (
    <div className='relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-[90px] w-[calc(100vw-var(--sidebar-width))] min-h-[calc(100vh-var(--header-height)-var(--footer-height))] overflow-hidden overflow-x-hidden'>
      <div className='relative flex justify-center items-center w-[300px] h-[300px]'>
        <motion.div
          className='absolute font-semibold text-2xl text-green-500'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Get in Touch
        </motion.div>
        <motion.a
          href='mailto:your-email@example.com'
          className='top-0 left-1/2 absolute transform -translate-x-1/2'
          variants={iconVariants}
          animate="animate"
          whileHover="hover"
        >
          <FaEnvelope className='text-4xl text-blue-500' />
        </motion.a>
        <motion.a
          href='https://www.linkedin.com/in/PreciousUmang'
          target='_blank'
          rel='noopener noreferrer'
          className='top-1/2 left-0 absolute transform -translate-y-1/2'
          variants={iconVariants}
          animate="animate"
          whileHover="hover"
        >
          <SiLinkedin className='text-4xl text-blue-700' />
        </motion.a>
        <motion.a
          href='https://www.freelancer.com/u/PreciousUmang'
          target='_blank'
          rel='noopener noreferrer'
          className='bottom-0 left-1/2 absolute transform -translate-x-1/2'
          variants={iconVariants}
          animate="animate"
          whileHover="hover"
        >
          <SiFreelancer className='text-4xl text-orange-500' />
        </motion.a>
        <motion.a
          href='https://www.upwork.com/freelancers/~0102c9a268bbd107bb'
          target='_blank'
          rel='noopener noreferrer'
          className='top-1/2 right-0 absolute transform -translate-y-1/2'
          variants={iconVariants}
          animate="animate"
          whileHover="hover"
        >
          <SiUpwork className='text-4xl text-green-500' />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;

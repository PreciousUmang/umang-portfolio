import {
  FaNodeJs,
  FaReact,
  FaPhp,
  FaWordpress,
  FaShopify,
  FaFigma
} from 'react-icons/fa'
import {
  SiMongodb,
  SiExpress,
  SiAngular,
  SiMysql,
  SiLaravel,
  SiAdobe,
  SiWoocommerce,
  SiDrupal,
  SiJoomla,
  SiInvision
} from 'react-icons/si'
import { motion } from 'framer-motion'
import useIconAnimation from '../hooks/useIconAnimation'
import useInViewAnimation from '../hooks/useInViewAnimation'

function Services () {
  const iconVariants1 = useIconAnimation(1)
  const iconVariants2 = useIconAnimation(2)
  const iconVariants3 = useIconAnimation(3)
  const iconVariants4 = useIconAnimation(4)
  const iconVariants5 = useIconAnimation(5)
  const iconVariants6 = useIconAnimation(6)
  const iconVariants7 = useIconAnimation(7)
  const iconVariants8 = useIconAnimation(8)
  const iconVariants9 = useIconAnimation(9)
  const iconVariants10 = useIconAnimation(10)

  const inViewAnimation1 = useInViewAnimation(
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0 },
    { duration: 1, delay: 0.3 }
  );

  const inViewAnimation2 = useInViewAnimation(
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0 },
    { duration: 1, delay: 0.6 }
  );

  const inViewAnimation3 = useInViewAnimation(
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0 },
    { duration: 1, delay: 0.9 }
  );

  return (
    <div className='relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-[90px] w-[calc(100vw-var(--sidebar-width))] min-h-[calc(100vh-var(--header-height)-var(--footer-height))] overflow-hidden overflow-x-hidden'>
      <h1 className='my-8 font-bold text-4xl'>Services I Offer</h1>
      <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8'>
        <motion.div
          ref={inViewAnimation1.ref}
          initial={inViewAnimation1.initial}
          animate={inViewAnimation1.animate}
          transition={inViewAnimation1.transition}
          className='relative border-gray-300 shadow-lg p-6 border rounded-lg overflow-hidden'
        >
          <h2 className='mb-2 font-semibold text-2xl text-green-500'>
            Web Development
          </h2>

          <div className='flex items-center w-full'>
            <div className='bg-green-500 rounded-full w-[7px] h-[7px]'/> 
            <div className='my-2 border-t-1 w-full h-0.5' />
            <div className='bg-green-500 rounded-full w-[7px] h-[7px]'/>
          </div>

          <p>
            We provide modern web development services using the latest
            technologies.
          </p>
          <ul className='list-disc list-inside'>
            <li>MEAN Stack (MongoDB, Express, Angular, Node.js)</li>
            <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
            <li>LAMP Stack (Linux, Apache, MySQL, PHP)</li>
          </ul>
          <div className='top-0 left-0 absolute w-full h-full'>
            <motion.div
              className='top-4 left-4 absolute opacity-15 text-green-500'
              variants={iconVariants1}
              animate='animate'
            >
              <FaNodeJs size={24} />
            </motion.div>
            <motion.div
              className='top-4 right-4 absolute opacity-15 text-blue-500'
              variants={iconVariants2}
              animate='animate'
            >
              <FaReact size={24} />
            </motion.div>
            <motion.div
              className='bottom-4 left-4 absolute opacity-15 text-red-500'
              variants={iconVariants3}
              animate='animate'
            >
              <FaPhp size={24} />
            </motion.div>
            <motion.div
              className='right-4 bottom-4 absolute opacity-15 text-green-500'
              variants={iconVariants4}
              animate='animate'
            >
              <SiMongodb size={24} />
            </motion.div>
            <motion.div
              className='top-1/2 left-1/2 absolute opacity-15 text-gray-500 transform -translate-x-1/2 -translate-y-1/2'
              variants={iconVariants5}
              animate='animate'
            >
              <SiExpress size={24} />
            </motion.div>
            <motion.div
              className='top-1/4 left-1/4 absolute opacity-15 text-red-500'
              variants={iconVariants6}
              animate='animate'
            >
              <SiAngular size={24} />
            </motion.div>
            <motion.div
              className='right-1/4 bottom-1/4 absolute opacity-15 text-blue-500'
              variants={iconVariants7}
              animate='animate'
            >
              <SiMysql size={24} />
            </motion.div>
            <motion.div
              className='top-1/4 right-1/4 absolute opacity-15 text-red-500'
              variants={iconVariants8}
              animate='animate'
            >
              <SiLaravel size={24} />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          ref={inViewAnimation2.ref}
          initial={inViewAnimation2.initial}
          animate={inViewAnimation2.animate}
          transition={inViewAnimation2.transition}
          className='relative border-gray-300 shadow-lg p-6 border rounded-lg overflow-hidden'
        >
          <h2 className='mb-2 font-semibold text-2xl text-green-500'>
            CMS Based Development
          </h2>
          <div className='flex items-center w-full'>
            <div className='bg-green-500 rounded-full w-[7px] h-[7px]'/> 
            <div className='my-2 border-t-1 w-full h-0.5' />
            <div className='bg-green-500 rounded-full w-[7px] h-[7px]'/>
          </div>

          <p>
            We specialize in CMS-based development to provide flexible and
            scalable solutions.
          </p>
          <ul className='list-disc list-inside'>
            <li>WordPress</li>
            <li>Shopify</li>
            <li>WooCommerce</li>
            <li>Drupal</li>
            <li>Joomla</li>
          </ul>
          <div className='top-0 left-0 absolute w-full h-full'>
            <motion.div
              className='top-4 left-4 absolute opacity-15 text-blue-500'
              variants={iconVariants10}
              animate='animate'
            >
              <FaWordpress size={24} />
            </motion.div>
            <motion.div
              className='top-4 right-4 absolute opacity-15 text-green-500'
              variants={iconVariants9}
              animate='animate'
            >
              <FaShopify size={24} />
            </motion.div>
            <motion.div
              className='bottom-4 left-4 absolute opacity-15 text-purple-500'
              variants={iconVariants1}
              animate='animate'
            >
              <SiWoocommerce size={24} />
            </motion.div>
            <motion.div
              className='right-4 bottom-4 absolute opacity-15 text-blue-500'
              variants={iconVariants2}
              animate='animate'
            >
              <SiDrupal size={24} />
            </motion.div>
            <motion.div
              className='top-1/2 left-1/2 absolute opacity-15 text-orange-500 transform -translate-x-1/2 -translate-y-1/2'
              variants={iconVariants3}
              animate='animate'
            >
              <SiJoomla size={24} />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          ref={inViewAnimation3.ref}
          initial={inViewAnimation3.initial}
          animate={inViewAnimation3.animate}
          transition={inViewAnimation3.transition}
          className='relative border-gray-300 shadow-lg p-6 border rounded-lg overflow-hidden'
        >
          <h2 className='mb-2 font-semibold text-2xl text-green-500'>
            UI/UX Design
          </h2>
          <div className='flex items-center w-full'>
            <div className='bg-green-500 rounded-full w-[7px] h-[7px]'/> 
            <div className='my-2 border-t-1 w-full h-0.5' />
            <div className='bg-green-500 rounded-full w-[7px] h-[7px]'/>
          </div>

          <p>
            We design intuitive and engaging user interfaces for your
            applications.
          </p>
          <ul className='list-disc list-inside'>
            <li>Brand Identity</li>
            <li>Mockups</li>
            <li>Prototypes</li>
            <li>Wireframing</li>
            <li>Web and Mobile App Design</li>
          </ul>
          <div className='top-0 left-0 absolute w-full h-full'>
            <motion.div
              className='top-4 left-4 absolute opacity-15 text-pink-500'
              variants={iconVariants4}
              animate='animate'
            >
              <FaFigma size={24} />
            </motion.div>
            <motion.div
              className='top-4 right-4 absolute opacity-15 text-red-500'
              variants={iconVariants5}
              animate='animate'
            >
              <SiAdobe size={24} />
            </motion.div>
            <motion.div
              className='bottom-4 left-4 absolute opacity-15 text-pink-500'
              variants={iconVariants6}
              animate='animate'
            >
              <SiInvision size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services

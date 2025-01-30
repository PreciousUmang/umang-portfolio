import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiUpwork, SiFreelancer } from 'react-icons/si'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Sidebar () {
  const location = useLocation()

  const getPageName = () => {
    switch (location.pathname) {
      case '/':
        return 'HOMEPAGE'
      case '/projects':
        return 'PROJECTS'
      case '/contact':
        return 'CONTACT'
      case '/services':
        return 'SERVICES'
      default:
        return 'PAGE'
    }
  }

  return (
    <div className='fixed flex flex-col justify-around items-center mt-[90px] border-r-[1px] w-[90px] h-screen'>
      <h2 className='tracking-widest -rotate-90'>{getPageName()}</h2>
      <div className='flex flex-col gap-7 mb-10 text-[20px]'>
        <a href='https://www.github.com/PreciousUmang' target='_blank'>
          <motion.div
            whileHover={{ scale: 1.1, color: '#000', borderRadius: '50%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
            transition={{ duration: 0.3 }}
            className='border-2 p-2 border-transparent text-gray-500'
          >
            <IoLogoGithub className='cursor-pointer' />
          </motion.div>
        </a>
        <a href='https://www.linkedin.com/u/PreciousUmang' target='_blank'>
          <motion.div
            whileHover={{ scale: 1.1, color: '#0077b5', borderRadius: '50%', boxShadow: '0 0 10px rgba(0, 119, 181, 0.5)' }}
            transition={{ duration: 0.3 }}
            className='border-2 p-2 border-transparent text-gray-500'
          >
            <IoLogoLinkedin className='cursor-pointer' />
          </motion.div>
        </a>
        <a
          href='https://www.upwork.com/freelancers/~0102c9a268bbd107bb'
          target='_blank'
        >
          <motion.div
            whileHover={{ scale: 1.1, color: '#6fda44', borderRadius: '50%', boxShadow: '0 0 10px rgba(111, 218, 68, 0.5)' }}
            transition={{ duration: 0.3 }}
            className='border-2 p-2 border-transparent text-gray-500'
          >
            <SiUpwork className='cursor-pointer' />
          </motion.div>
        </a>
        <a href='https://www.freelancer.com/u/PreciousUmang' target='_blank'>
          <motion.div
            whileHover={{ scale: 1.1, color: '#29b2fe', borderRadius: '50%', boxShadow: '0 0 10px rgba(41, 178, 254, 0.5)' }}
            transition={{ duration: 0.3 }}
            className='border-2 p-2 border-transparent text-gray-500'
          >
            <SiFreelancer className='cursor-pointer' />
          </motion.div>
        </a>
      </div>
    </div>
  )
}

export default Sidebar

import { motion } from 'framer-motion'
import logo from '../../public/logo.png'
import { navItems } from '../utils/items'
import { Link, useLocation } from 'react-router-dom'
import MobileNav from './MobileNav'

const Header = () => {
  const location = useLocation()

  return (
    <motion.div
      className='z-50 fixed flex justify-between items-center bg-white border-b-[1px] w-full'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='bg-black w-[90px] h-[90px]'>
        <motion.img
          src={logo}
          alt=''
          className='p-3'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className='md:flex gap-14 hidden'>
        {navItems.map(item => (
          <motion.div
            className={`relative font-medium text-gray-800 cursor-pointer ${
              location.pathname === item.link
                ? 'text-green-500'
                : 'hover:text-green-500'
            }`}
            key={item.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.id * 0.1 }}
          >
            <Link to={item.link} className='text-gray-800'>
              <h2>{item.name}</h2>
              {location.pathname === item.link && (
                <>
                  <motion.div
                    className='top-1/2 -left-5 absolute bg-green-500 rounded-full w-2 h-2 transform -translate-y-1/2'
                    layoutId='activeIndicator'
                  />
                  <motion.div
                    className='right-0 -bottom-2 left-0 absolute bg-green-500 h-0.5'
                    layoutId='activeBorder'
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
      <motion.div
        whileHover={{
          backgroundColor: '#10B981',
          borderRadius: '50%'
        }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.9 }}
        className='flex justify-center items-center bg-red-500 w-[90px] h-[90px]'
      >
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='text-white size-10'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
          />
        </motion.svg>
      </motion.div>
      <MobileNav />
    </motion.div>
  )
}

export default Header

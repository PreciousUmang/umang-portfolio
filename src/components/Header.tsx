import { motion } from 'framer-motion'
import logo from '../../public/logo.png'
import { navItems } from '../utils/items'

function Header () {
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
            className='font-medium hover:underline hover:underline-offset-8 cursor-pointer'
            key={item.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.id * 0.1 }}
          >
            <h2>{item.name}</h2>
          </motion.div>
        ))}
      </div>
      <div className='flex justify-center items-center bg-red-500 w-[90px] h-[90px]'>
        <svg
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
        </svg>
      </div>
    </motion.div>
  )
}

export default Header

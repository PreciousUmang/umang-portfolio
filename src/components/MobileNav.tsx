import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../utils/items';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <motion.div
        className='right-10 bottom-10 z-20 fixed flex justify-center items-center md:hidden bg-green-500 rounded-full w-16 h-16 cursor-pointer'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 text-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.75 6.75h14.5m-14.5 5.5h14.5m-14.5 5.5h14.5'
          />
        </motion.svg>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='z-10 fixed inset-0 flex flex-col justify-center items-center bg-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map(item => (
              <motion.div
                className={`relative font-medium text-gray-800 cursor-pointer mb-4 ${location.pathname === item.link ? 'text-green-500' : 'hover:text-green-500'}`}
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                onClick={() => setIsOpen(false)}
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
                        initial={{ width: '50%' }}
                        animate={{ width: '50%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;

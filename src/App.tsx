import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'

function App () {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div 
      className='w-100vw'
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Sidebar/>
      <div className='grid grid-cols-1 md:grid-cols-3 ml-[90px]'>
        <HomePage/>
      </div>
    </motion.div>
  )
}

export default App

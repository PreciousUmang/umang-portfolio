import { motion } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import useInViewAnimation from './hooks/useInViewAnimation'
import { Outlet } from 'react-router-dom'
import ProgressBar from './components/ProgressBar'
import MobileNav from './components/MobileNav'

function App () {
  const animationProps = useInViewAnimation(
    { opacity: 0 },
    { opacity: 1 },
    { duration: 1 }
  )

  return (
    <motion.div {...animationProps} className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <ProgressBar />
        <Sidebar />

      <main className='flex-grow ml-[90px] w-[calc(100vw-90px)]'>
        <Outlet />
        <MobileNav />
      </main>
      <Footer />
      
    </motion.div>
  )
}

export default App

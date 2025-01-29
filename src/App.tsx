import { motion } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import useInViewAnimation from './hooks/useInViewAnimation'

function App () {
  const animationProps = useInViewAnimation(
    { opacity: 0 },
    { opacity: 1 },
    { duration: 1 }
  )

  return (
    <motion.div className='w-100vw' {...animationProps}>
      <Header />
      <Sidebar />
      <HomePage />
      <Footer />
    </motion.div>
  )
}

export default App

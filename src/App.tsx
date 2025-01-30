import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Footer from './components/Footer';
import useInViewAnimation from './hooks/useInViewAnimation';
import { Route, Routes, Outlet } from 'react-router-dom';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Services from './pages/Services';
import ProgressBar from './components/ProgressBar';
import MobileNav from './components/MobileNav';

function App() {
  const animationProps = useInViewAnimation(
    { opacity: 0 },
    { opacity: 1 },
    { duration: 1 }
  );

  return (
    <motion.div className='w-100vw' {...animationProps}>
      <Header />
      <ProgressBar />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
    </motion.div>
  );
}

export default App;

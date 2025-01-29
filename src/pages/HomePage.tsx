import ProfilePic from '../components/ProfilePic'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Services from '../components/Services'
import ProgressBar from '../components/ProgressBar'
import Languages from '../components/Languages'
import Skills from '../components/Skills'
import Reviews from '../components/Reviews'
import GetStarted from '../components/GetStarted'

function HomePage () {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 ml-[90px]'>
      <div className='col-span-2 p-5'>
        <Introduction />
        <About />
        <Services />
        <Skills />
        <Languages />
        <Reviews />
        <GetStarted />
      </div>
      <div className='md:block hidden'>
        <ProgressBar />
        <ProfilePic />
      </div>
    </div>
  )
}

export default HomePage

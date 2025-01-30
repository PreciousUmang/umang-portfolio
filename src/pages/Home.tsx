import ProfilePic from '../components/ProfilePic'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Services from '../components/Services'
import ProgressBar from '../components/ProgressBar'
import Certificates from '../components/Certificates'
import Skills from '../components/Skills'
import Reviews from '../components/Reviews'
import GetStarted from '../components/GetStarted'

function Home () {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2 p-5'>
          <Introduction />
          <About />
          <Services />
          <Skills />
          <Certificates/>
          <Reviews />
          <GetStarted />
        </div>
        <div className='md:block hidden'>
          <ProgressBar />
          <ProfilePic />
        </div>
      </div>
    </div>
  )
}

export default Home;

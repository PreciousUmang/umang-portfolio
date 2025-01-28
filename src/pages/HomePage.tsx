import ProfilePic from '../components/ProfilePic'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Services from '../components/Services'
import ProgressBar from '../components/ProgressBar'
import Languages from '../components/Languages'
import Skills from '../components/Skills'

function HomePage () {
  return (
    <>
      <div className='col-span-2 p-5'>
        <Introduction />
        <About />
        <Services/>
        <Skills/>
        <Languages/>
      </div>
      <div className='md:block hidden'>
        <ProgressBar/>
        <ProfilePic />
      </div>
    </>
  )
}

export default HomePage

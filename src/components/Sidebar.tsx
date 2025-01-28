import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiUpwork, SiFreelancer } from 'react-icons/si'

function Sidebar () {
  return (
    <div className='fixed flex flex-col justify-around items-center mt-[90px] border-r-[1px] w-[90px] h-screen'>
      <h2 className='tracking-widest -rotate-90'>HOMEPAGE</h2>
      <div className='flex flex-col gap-7 mb-10 text-[20px]'>
        <IoLogoGithub className='transition-all cursor-pointer ease-in-out hover:scale-110' />
        <IoLogoLinkedin className='transition-all cursor-pointer ease-in-out hover:scale-110' />
        <SiUpwork className='transition-all cursor-pointer ease-in-out hover:scale-110' />
        <SiFreelancer className='transition-all cursor-pointer ease-in-out hover:scale-110' />
      </div>
    </div>
  )
}
export default Sidebar

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { SiUpwork, SiFreelancer } from 'react-icons/si';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  
  const getPageName = () => {
    switch (location.pathname) {
      case '/':
        return 'HOMEPAGE';
      case '/projects':
        return 'PROJECTS';
      case '/contact':
        return 'CONTACT';
      default:
        return 'PAGE';
    }
  };

  return (
    <div className='fixed flex flex-col justify-around items-center mt-[90px] border-r-[1px] w-[90px] h-screen'>
      <h2 className='tracking-widest -rotate-90'>{getPageName()}</h2>
      <div className='flex flex-col gap-7 mb-10 text-[20px]'>
        <IoLogoGithub className='transition-all cursor-pointer ease-in-out hover:scale-110' />
        <IoLogoLinkedin className='transition-all cursor-pointer ease-in-out hover:scale-110' />
        <SiUpwork className='transition-all cursor-pointer ease-in-out hover:scale-110' />
        <SiFreelancer className='transition-all cursor-pointer ease-in-out hover:scale-110' />
      </div>
    </div>
  );
}

export default Sidebar;

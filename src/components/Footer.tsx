import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className={`bg-gray-800 py-8 text-white ${isHomePage ? 'ml-[90px] md:w-2/3 overflow-hidden' : 'ml-[90px] w-[calc(100vw-90px)]'}`}>
      <div className="mx-auto text-center container">
        <p>&copy; {new Date().getFullYear()} Precious Umang. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className={`bg-gray-800 py-8 text-white ${isHomePage ? 'ml-[90px] md:w-2/3' : ' ml-[90px] w-[100vw]'}`}>
      <div className="mx-auto text-center container">
        <p>&copy; {new Date().getFullYear()} Precious Umang. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

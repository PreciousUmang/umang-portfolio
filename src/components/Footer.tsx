const Footer = () => {
  return (
    <footer className="bg-gray-800 ml-[90px] py-8 w-2/3 text-white">
      <div className="mx-auto text-center container">
        <p>&copy; {new Date().getFullYear()} Precious Umang. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

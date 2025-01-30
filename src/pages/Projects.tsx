const Projects = () => {
  return (
    <div className='relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 w-[calc(100vw-var(--sidebar-width))] min-h-[calc(100vh-var(--header-height)-var(--footer-height))] overflow-hidden overflow-x-hidden'>
         <h1 className='mb-4 font-bold text-4xl text-gray-800'>Projects</h1>
      <p className='text-gray-800 text-lg'>Here are some of my projects:</p>
      {/* Add your project components or content here */}
    </div>
  );
};

export default Projects;

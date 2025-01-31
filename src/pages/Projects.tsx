import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/projects';

const Projects = () => {
  return (
    <div className='relative flex flex-col justify-center items-center mt-[90px] px-4 sm:px-8 md:px-12 lg:px-16 w-[calc(100vw-var(--sidebar-width))] min-h-[calc(100vh-var(--header-height)-var(--footer-height))]'>
      <h1 className='mb-4 font-bold text-4xl text-gray-800'>Projects</h1>
      <p className='text-gray-800 text-lg'>Here are some of my projects:</p>
      <div className='flex flex-wrap justify-center'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

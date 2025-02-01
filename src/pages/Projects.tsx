import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/projects';
import ProjectCarousel from '../components/ProjectCarousel';

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[90px] px-4 sm:px-8 md:px-12 lg:px-16 w-[calc(100vw-var(--sidebar-width))] min-h-[calc(100vh-var(--header-height)-var(--footer-height))]'>
      <h1 className='my-8 font-bold text-4xl text-gray-800'>Projects</h1>
 
      <ProjectCarousel/>
      <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

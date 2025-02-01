import ProjectCard from '../components/ProjectCard'
import { projects } from '../utils/projects'
import ProjectCarousel from '../components/ProjectCarousel'
const Projects = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <section className='flex flex-col md:col-span-2 p-4 md:p-8 md:pr-16 w-full'>
          <h1 className='my-8 mt-[110px] font-bold text-4xl text-center text-gray-800'>Projects</h1>
          <div className='gap-4 grid grid-cols-1 sm:grid-cols-2'>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <section className='md:block hidden'>
          <ProjectCarousel />
        </section>
      </div>
    </div>
  )
}

export default Projects

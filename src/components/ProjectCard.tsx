const ProjectCard = ({
  project
}: {
  project: {
    id: number
    title: string
    description: string
    link: string
    livePreview: string
    image: string
    tags: string[]
    previewStatus: boolean
  }
}) => {
  return (
    <div className='flex justify-center items-center shadow-green-500 shadow-md m-4 rounded w-full overflow-hidden'>
      <div className='px-16 w-1/3'>
        <img className='w-full' src={project.image} alt={project.title} />
        
      </div>
      <div className="w-2/3">
        <div className='px-6'>
          <div className='mb-2 font-bold text-xl'>{project.title}</div>
          <p className='text-base text-gray-700'>{project.description}</p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className='inline-block bg-gray-200 mr-2 mb-2 px-3 py-1 rounded-full font-semibold text-gray-700 text-sm'
            >
              {tag}
            </span>
          ))}
        </div>
        <div className='flex px-6'>
          <button 
            onClick={() => window.location.href = project.link} 
            className='text-green-500 hover:text-green-700 cursor-pointer'
          >
            View Project
          </button>
          <button
            onClick={() => window.location.href = project.livePreview}
            className={`ml-4 cursor-pointer text-green-500 hover:text-green-700 ${!project.previewStatus ? 'pointer-events-none opacity-50' : ''}`}
            disabled={!project.previewStatus}
          >
            Live Preview
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

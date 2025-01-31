import { motion } from 'framer-motion'
import { FaEye, FaCode } from 'react-icons/fa'
import useInViewAnimation from '../hooks/useInViewAnimation'

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
    sourceCode?: string
  }
}) => {
  const animationProps = useInViewAnimation(
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0 },
    { duration: 0.5 }
  )

  return (
    <motion.div
      {...animationProps}
      className='flex flex-col justify-between items-center gap-4 rounded w-full transform transition-transform overflow-hidden shrink'
    >
      <div className='w-full'>
        <img src={project.image} alt={project.title} />
        <div className='mb-2 font-bold text-center text-xl tracking-widest'>
          {project.title}
        </div>
        <div className='flex justify-center items-center px-4'>
          <div className='bg-red-500 rounded-full w-[7px] h-[7px]' />
          <div className='my-2 border-t-1 w-full h-0.5' />
          <div className='bg-red-500 rounded-full w-[7px] h-[7px]' />
        </div>
        <p className='text-base text-gray-700'>{project.description}</p>{' '}
      </div>
      <div className='pb-4'>
        <div
          className='flex flex-wrap items-start pt-4 pb-2'
          style={{ minHeight: '60px' }}
        >
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className='inline-block bg-gray-200 mr-2 mb-2 px-3 py-1 rounded-full text-gray-700 text-sm'
            >
              {tag}
            </span>
          ))}
        </div>
        <div className='flex'>
          <motion.button
            onClick={() => window.open(project.link, '_blank')}
            whileHover={{
              scale: 1.1,
              backgroundColor: '#b3cde0',
              color: '#ffffff',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className='border-2 p-2 border-transparent text-gray-700 cursor-pointer'
          >
            <FaCode className='inline-block mr-2' /> Source Code
          </motion.button>
          <motion.button
            onClick={() => window.open(project.livePreview, '_blank')}
            whileHover={{
              scale: 1.1,
              backgroundColor: '#b2dfdb',
              color: '#ffffff',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`ml-4 cursor-pointer hover:text-green-700 border-2 p-2 border-transparent text-gray-700 ${
              !project.previewStatus ? 'pointer-events-none opacity-50' : ''
            }`}
          >
            <FaEye className='inline-block mr-2' /> Live Preview
          </motion.button>
          {project.sourceCode && (
            <motion.button
              onClick={() => window.open(project.sourceCode, '_blank')}
              whileHover={{
                scale: 1.1,
                backgroundColor: '#b3cde0',
                color: '#ffffff',
                boxShadow: '0 0 10px #ff1744'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className='border-2 ml-4 p-2 border-transparent text-gray-700 cursor-pointer'
            >
              <FaCode className='inline-block mr-2' /> Source Code
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

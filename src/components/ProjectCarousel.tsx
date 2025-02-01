import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import WithStyles from './WithStyles'
import { projects } from '../utils/projects'

function ProjectCarousel () {
  return (
    <div className='right-0 fixed bg-red-400 mt-[90px] w-1/3 h-[calc(100vh-90px)]'>
      <Carousel
        additionalTransfrom={0}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        arrows={false}
        className='flex items-center mt-[90px]'
        containerClass='container-with-dots'
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=''
        slidesToSlide={1}
        swipeable
      >
        {projects.map(project => (
          <WithStyles
            description={''}
            headline={project.title}
            image={project.image}
          />
        ))}
      </Carousel>
    </div>
  )
}
export default ProjectCarousel

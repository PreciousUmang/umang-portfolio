import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import WithStyles from './WithStyles'
import { projects } from '../utils/projects'

function ProjectCarousel () {
  return (
    <div className='w-full'>
    <h1 className='text-4xl text-center z'>This is Carousel</h1>
      <Carousel
        additionalTransfrom={0}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=''
        containerClass='container-with-dots'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite
        itemClass=''
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
            items: 3,
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
            items: 2,
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
            description={project.description}
            headline={project.title}
            image={project.image}
          />
        ))}
      </Carousel>
    </div>
  )
}
export default ProjectCarousel

import { CSSProperties } from 'react'

function Services () {
  const containerStyle: CSSProperties = {
    width: 'calc(100vw - var(--sidebar-width))',
    minHeight: 'calc(100vh - var(--header-height) - var(--footer-height))',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
    marginLeft: 'var(--sidebar-width)',
    overflowX: 'hidden'
  }

  const serviceStyle: CSSProperties = {
    margin: '10px 0',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '600px',
    textAlign: 'center'
  }

  return (
    <div className='relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 w-[calc(100vw-var(--sidebar-width))] min-h-[calc(100vh-var(--header-height)-var(--footer-height))] overflow-hidden overflow-x-hidden'>
      <div style={containerStyle}>
        <h1>Our Services</h1>
        <div style={serviceStyle}>
          <h2>Web Development</h2>
          <p>
            We provide modern web development services using the latest
            technologies.
          </p>
        </div>
        <div style={serviceStyle}>
          <h2>Mobile Development</h2>
          <p>
            Our team creates responsive and user-friendly mobile applications.
          </p>
        </div>
        <div style={serviceStyle}>
          <h2>UI/UX Design</h2>
          <p>
            We design intuitive and engaging user interfaces for your
            applications.
          </p>
        </div>
      </div>{' '}
    </div>
  )
}

export default Services

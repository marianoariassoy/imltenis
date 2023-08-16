// import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'

const Welcome = () => {
  useEffect(() => {
    const nav = document.querySelector('.navbar')
    const footer = document.querySelector('.footer-main')
    nav.classList.remove('backdrop-blur-md')
    // footer.classList.remove('opacity-50')

    return () => {
      nav.classList.add('backdrop-blur-md')
      // footer.classList.add('opacity-50')
    }
  }, [])

  const links = [
    { name: '1era', path: '/torneos/15' },
    { name: '2da', path: '/torneos/14' },
    { name: '3ra', path: '/torneos/13' },
    { name: '4ta', path: '/torneos/12' }
  ]
  return (
    <>
      <Helmet>
        <title>IML Tenis Liga de clubes de Zona Norte y Oeste de Buenos Aires</title>
      </Helmet>

      <section className='opacity-0 fade-in flex flex-col justify-center items-center text-center text-primary h-full'>
        <h1 className='text-6xl lg:text-8xl font-black mb-2'>Clausura 2023</h1>
        <h3 className='text-5xl'>🏆</h3>
        {/* <ul className="tournaments-list font-black text-5xl lg:text-7xl mb-1">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="link-hover">
                {link.name}
              </Link>
            </li>
          ))}
        </ul> */}
      </section>

      <div className='video-background fixed h-screen w-screen left-0 top-0 -z-10'>
        <video
          autoPlay
          playsInline
          muted
          loop
          className='opacity-50 h-full w-full object-cover'
        >
          <source
            src='./assets/videos/video.webm'
            type='video/webm'
          />
          <source
            src='./assets/videos/video.mp4'
            type='video/mp4'
          />
        </video>
      </div>
    </>
  )
}

export default Welcome

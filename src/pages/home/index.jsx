import { Helmet } from 'react-helmet'
import { useEffect } from 'react'

const Welcome = () => {
  useEffect(() => {
    const nav = document.querySelector('.navbar')
    nav.classList.remove('backdrop-blur-md')
    return () => {
      nav.classList.add('backdrop-blur-md')
    }
  }, [])

  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <>
      <section className='fade-in flex justify-center items-center text-center h-full'>
        <div
          className='cursor-pointer text-primary mt-8'
          onClick={openMenu}
        >
          <h1 className='text-6xl lg:text-8xl font-black'>
            <span className='block'>Torneo</span>
            <span className='block'>Yuka Apertura</span> <span className='block'>2024</span>
          </h1>
          <span className='text-4xl lg:text-5xl mt-2 block'>🏆</span>
        </div>
      </section>

      <div className='fade-in-slow video-background fixed h-screen w-screen left-0 top-0 -z-10'>
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

      <Helmet>
        <title>IML Tenis Liga de clubes</title>
      </Helmet>
    </>
  )
}

export default Welcome

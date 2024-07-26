import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
import Aviso from './Aviso'

const Welcome = () => {
  useEffect(() => {
    const nav = document.querySelector('.navbar')
    nav.classList.remove('bg-base-100')
    return () => {
      nav.classList.add('bg-base-100')
    }
  }, [])

  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <>
      <Aviso />

      <div className='fade-in flex justify-center items-center text-center h-full'>
        <div
          className='cursor-pointer mt-10 text-primary flex flex-col gap-y-3'
          onClick={openMenu}
        >
          <h1 className='text-6xl lg:text-8xl font-black flex flex-col'>
            <span>Torneo</span>
            <span>Apertura</span>
            <span>
              <span className='block lg:inline-block'>Yuka</span> 2024
            </span>
          </h1>
        </div>
      </div>

      <div className='fade-in-slow fixed h-screen w-screen left-0 top-0 -z-10 bg-base-300'>
        <video
          autoPlay
          playsInline
          muted
          loop
          className='opacity-60 h-full w-full object-cover'
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

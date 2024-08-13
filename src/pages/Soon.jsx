import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Soon = () => {
  return (
    <div className='fade-in flex flex-col items-center justify-center h-full'>
      <h1 className='text-4xl mb-3 animate-bounce'>🚀</h1>

      <div className='text-primary text-center flex flex-col gap-y-3'>
        <div className='flex flex-col font-bold text-xl'>
          <span>¡Llega muy pronto!</span>
        </div>

        <span>
          Más info al{' '}
          <a
            href='https://wa.me/5491130171475'
            className='underline'
            target='_blank'
          >
            {' '}
            +54 9 11 3017-1475
          </a>
        </span>
      </div>

      <Helmet>
        <title>IML Tenis Liga de clubes</title>
      </Helmet>
    </div>
  )
}

export default Soon

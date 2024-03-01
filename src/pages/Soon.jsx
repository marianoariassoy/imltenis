import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Counter from './Counter'

const Soon = () => {
  return (
    <div className='fade-in flex flex-col items-center justify-center h-full'>
      <h1 className='text-4xl mb-3'>🚀</h1>
      <Counter />

      <div className='text-primary text-center'>
        <span className='block font-bold text-xl'>¡Inscripciones abiertas!</span>
        <span className='block font-bold mb-3 text-xl'>Inicio el 16 y 17 de Marzo</span>
        <span className='block'>Descuento hasta el 29 de Febrero</span>
        <span className='block font-bold'>
          Más información y presentación del torneo{' '}
          <Link
            to='/presentacion'
            className='underline'
          >
            clic acá
          </Link>
        </span>
        <span>
          o al WhatsApp{' '}
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

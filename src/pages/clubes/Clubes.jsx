import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Clubes = () => {
  return (
    <>
      <Helmet>
        <title>IML Tenis Clubes</title>
      </Helmet>

      <section id='presentacion'>
        <div className='row text-center mb-6'>
          <h1 className='text-2xl font-bold text-error mb-1'>Clubes</h1>
        </div>
      </section>

      <div className='mb-6'>
        <Link
          to='/clubes/1'
          className='card bg-base-300'
        >
          <div className='card-body p-6'>
            <h2 className='text-xl text-primary font-bold'>Afar</h2>
            <p className='font-semibold'>9 de Julio</p>
            <p className='mb-3'>Equipos: 12</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Clubes

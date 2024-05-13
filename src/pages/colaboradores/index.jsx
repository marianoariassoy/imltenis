import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from './Item'

const Amigos = () => {
  const { data, loading } = useFetch(`/partners`)
  if (loading) return <Loader />

  return (
    <section className='fade-in flex flex-col gap-y-6 text-center max-w-2xl m-auto'>
      <div>
        <div className='text-primary text-xl mb-2'>
          <h1 className='font-bold'>Colaboradores</h1>
        </div>
        <p className='text-sm text-wrap'>
          Gracias al apoyo y la contribucion de los siguientes colaboradores nuestra liga y comunidad tenistica continua
          creciendo.
        </p>
      </div>

      <div className='grid grid-cols-3 lg:grid-cols-5 gap-6 mb-6'>
        {data.map((item, index) => (
          <Item
            key={index}
            item={item}
          />
        ))}
      </div>

      <p className='text-sm'>
        📢 Comunicate al{' '}
        <a
          href='https://wa.me/5491130171475'
          className='underline hover:text-primary'
          target='_blank'
        >
          {' '}
          +54 9 11 3017-1475
        </a>{' '}
        para anunciar
      </p>

      <Helmet>
        <title>IML Tenis Colaboradores</title>
      </Helmet>
    </section>
  )
}

export default Amigos

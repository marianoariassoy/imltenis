import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import JugadoresSingles from './JugadoresSingles'
import JugadoresDobles from './JugadoresDobles'
import JugadoresEquipos from './JugadoresEquipos'

const JugadoresContainer = () => {
  let { id } = useParams()
  const { data, loading } = useFetch(`/players/${id}`)
  if (loading) return <Loader />

  return (
    <>
      <Helmet>
        <title>{data[0].name} IML Tenis</title>
      </Helmet>

      <section
        className='mb-8'
        id='presentacion'
      >
        <div className='text-center'>
          <div className='avatar mb-2'>
            <div className='w-28 rounded-full bg-base-300'>
              <img
                src={data[0].image}
                alt={data[0].name}
                width='112'
                height='112'
              />
            </div>
          </div>
          <h1 className='font-bold text-primary'>{data[0].name}</h1>
          {/* <h2 className='opacity-70 text-sm'>{data[0].age}</h2> */}
          <span className='text-xl'>🎾</span>
        </div>
      </section>

      <JugadoresSingles player_id={data[0].id} />
      <JugadoresDobles player_id={data[0].id} />
      <JugadoresEquipos player_id={data[0].id} />
    </>
  )
}

export default JugadoresContainer

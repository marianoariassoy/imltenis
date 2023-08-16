import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import SeriesMatches from './SeriesMatches'

const Series = () => {
  let { id } = useParams()
  const { data, loading } = useFetch(`/series/${id}`)
  if (loading) return <Loader />

  let title = data[0].date + ' ' + data[0].hour

  return (
    <>
      <Helmet>
        <title>Serie {title}</title>
      </Helmet>

      <section
        className='row text-center mb-12'
        id='presentacion'
      >
        <h1 className='font-bold text-primary'>{title}</h1>

        <Link
          to={`/torneos/${data[0].tournament_id}`}
          className='link-hover opacity-70'
        >
          {data[0].tournament_name}
        </Link>
      </section>

      <section id='score'>
        <div className='flex justify-center mb-8 text-sm'>
          <div className='flex text-center w-full max-w-sm'>
            <div className='flex flex-col items-center w-2/5 '>
              <div className='avatar mb-3'>
                <div className='w-20 rounded-full'>
                  <Link
                    to={`/equipos/${data[0].home_id}`}
                    className='hover:opacity-70'
                  >
                    <img
                      src={data[0].home_image}
                      width='80'
                      height='80'
                      alt={data[0].home_name}
                    />
                  </Link>
                </div>
              </div>
              <Link
                to={`/equipos/${data[0].home_id}`}
                className='link-hover text-primary font-semibold'
              >
                {data[0].home_name}
              </Link>
              Local
            </div>
            <div className='w-1/5 flex items-center justify-center'>
              {data[0].winner > 0 ? (
                <h1 className='text-xl font-semibold'>
                  Score
                  <br />
                  {data[0].score}
                </h1>
              ) : (
                <h1 className='text-xl font-semibold'>Vs.</h1>
              )}
            </div>
            <div className='flex flex-col items-center w-2/5 '>
              <div className='avatar mb-3'>
                <div className='w-20 rounded-full'>
                  <Link
                    to={`/equipos/${data[0].away_id}`}
                    className='hover:opacity-70'
                  >
                    <img
                      src={data[0].away_image}
                      width='80'
                      height='80'
                      alt={data[0].away_name}
                    />
                  </Link>
                </div>
              </div>
              <Link
                to={`/equipos/${data[0].away_id}`}
                className='link-hover text-primary font-semibold'
              >
                {data[0].away_name}
              </Link>
              Visitante
            </div>
          </div>
        </div>
      </section>
      {data[0].winner > 0 && <SeriesMatches serie_id={id} />}
    </>
  )
}

export default Series

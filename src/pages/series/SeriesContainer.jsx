import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import SeriesMatches from './SeriesMatches'
import TeamItem from './TeamItem'

const Series = () => {
  let { id } = useParams()
  const { data, loading } = useFetch(`/series/${id}`)

  if (loading) return <Loader />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-center'>
        <h1 className='font-bold text-primary lg:text-xl'>{data[0].date + ' ' + data[0].hour} hs.</h1>
        <Link
          to={`/torneos/${data[0].tournament_id}`}
          className='link-hover opacity-70'
        >
          {data[0].tournament_name}
        </Link>
      </div>

      <div className='flex justify-center mt-6'>
        <div className='flex text-center w-full max-w-lg'>
          <TeamItem
            id={data[0].home_id}
            name={data[0].home_name}
            image={data[0].home_image}
            type='Local'
          />
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
          <TeamItem
            id={data[0].away_id}
            name={data[0].away_name}
            image={data[0].away_image}
            type='Visitante'
          />
        </div>
      </div>

      {data[0].winner > 0 && <SeriesMatches serie_id={id} />}

      <Helmet>
        <title>IML Tenis {data[0].date + ' ' + data[0].hour}</title>
      </Helmet>
    </section>
  )
}

export default Series

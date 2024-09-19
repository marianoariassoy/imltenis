import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import FixtureUpcoming from './FixtureUpcoming'

const TournamentsCalendar = () => {
  const { data, loading } = useFetch(`/series/upcoming`)
  if (loading) return <Loader />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <h1 className='text-center text-primary text-xl font-bold'>Próximas Series ({data.length})</h1>

      {data.length > 0 ? (
        <FixtureUpcoming data={data} />
      ) : (
        <div className='text-center text-primary'>No hay próximas series</div>
      )}

      <Helmet>
        <title>IML Tenis - Próximas Series</title>
      </Helmet>
    </section>
  )
}

export default TournamentsCalendar

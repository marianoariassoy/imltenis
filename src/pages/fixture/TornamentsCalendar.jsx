import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import CalendarItem from './CalendarItem'

const TournamentsCalendar = () => {
  const { id } = useParams()
  const { data: dataTournament, loading: loadinngTournament } = useFetch(`/tournaments/${id}`)
  const { data, loading } = useFetch(`/groups/date/${id}`)
  if (loading) return <Loader />
  if (loadinngTournament) return <Loader />
  if (!dataTournament) return null

  return (
    <>
      <Helmet>
        <title>{dataTournament[0].name + ' ' + dataTournament[0].season} Fechas</title>
      </Helmet>

      <section className='mb-12 text-center text-primary text-xl'>
        <h1 className='italic'>{data[0].date}</h1>
        <Link
          to={`/torneos/${id}`}
          className='link-hover block'
        >
          <span className='font-semibold'>{dataTournament[0].name}</span> 🏆
        </Link>
      </section>

      <section>
        {data.map(item => (
          <CalendarItem
            key={item.id}
            item={item}
          />
        ))}
      </section>
    </>
  )
}

export default TournamentsCalendar

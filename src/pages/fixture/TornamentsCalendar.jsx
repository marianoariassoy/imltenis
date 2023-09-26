import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import CalendarItem from './CalendarItem'
import { useEffect } from 'react'

const TournamentsCalendar = () => {
  useEffect(() => {
    const header = document.querySelector('header')
    header.classList.add('pt-12')
  }, [])

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

      <section className='mb-8 text-center text-primary'>
        <h2 className='font-medium'>Torneo Clausura Yuka</h2>
        <h1 className='italic'>{data[0].date}</h1>
        <Link
          to={`/torneos/${id}`}
          className='link-hover block'
        >
          <span className='font-medium'>{dataTournament[0].name}</span>
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

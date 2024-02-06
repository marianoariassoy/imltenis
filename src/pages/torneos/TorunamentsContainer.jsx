import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Tournaments from './Tournaments'
import TornamentsChampion from './TornamentsChampion'

const TournamentsContainer = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const { id, gid } = useParams()
  const { data, loading } = useFetch(`/tournaments/groups/${id}`)
  const { data: dataTournament, loading: loadinngTournament } = useFetch(`/tournaments/${id}`)
  if (loading) return <Loader />
  if (loadinngTournament) return <Loader />
  if (!dataTournament) return null

  const tournament = dataTournament[0].name
  const season = dataTournament[0].season
  const title = tournament + ' ' + season
  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-center text-primary text-xl'>
        <Link
          to={`/torneos/${id}`}
          className='link-hover block'
        >
          <span className='font-bold'>{tournament}</span>
          <span className='font-medium hidden lg:inline'> {season}</span>
        </Link>
        🏆
      </div>

      {dataTournament[0].team_champion && <TornamentsChampion data={dataTournament} />}

      {data
        .filter(item => item.id === gid || !gid)
        .map(item => (
          <Tournaments
            key={item.id}
            data={item}
            tournament={id}
          />
        ))}

      <Helmet>
        <title>IML Tenis {title}</title>
      </Helmet>
    </section>
  )
}

export default TournamentsContainer

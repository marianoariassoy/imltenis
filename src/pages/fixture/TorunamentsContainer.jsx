import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Tournaments from './Tournaments'
import TornamentsChampion from './TornamentsChampion'

const TournamentsContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { id, gid } = useParams()
  const { data, loading } = useFetch(`/tournaments/groups/${id}`)
  const { data: dataTournament, loading: loadinngTournament } = useFetch(`/tournaments/${id}`)
  if (loading) return <Loader />
  if (loadinngTournament) return <Loader />
  if (!dataTournament) return null

  return (
    <>
      <Helmet>
        <title>{dataTournament[0].name + ' ' + dataTournament[0].season}</title>
      </Helmet>

      <section className='mb-4 text-center text-primary text-xl'>
        <Link
          to={`/torneos/${id}`}
          className='link-hover block'
        >
          <span className='font-bold'>{dataTournament[0].name}</span>
          <span className='hidden lg:inline lg:ml-2'>{dataTournament[0].season}</span>
        </Link>
        🏆
      </section>

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
    </>
  )
}

export default TournamentsContainer

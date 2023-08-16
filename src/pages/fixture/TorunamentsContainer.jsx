import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Tournaments from './Tournaments'
import TornamentsChampion from './TornamentsChampion'

const TournamentsContainer = () => {
  let { id } = useParams()
  const { data: dataTournament } = useFetch(`/tournaments/${id}`)
  const { data, loading } = useFetch(`/tournaments/groups/${id}`)

  if (loading) return <Loader />
  if (!dataTournament) return null

  return (
    <>
      <Helmet>
        <title>{dataTournament[0].name + ' ' + dataTournament[0].season}</title>
      </Helmet>

      <section
        className='mb-4'
        id='presentacion'
      >
        <div className='text-center text-primary'>
          <h1>
            <span className='font-bold'>{dataTournament[0].name}</span>
            <span className='block lg:inline lg:ml-2 '>{dataTournament[0].season}</span>
          </h1>
          <h1>🏆</h1>
        </div>
      </section>

      {dataTournament[0].team_champion && <TornamentsChampion data={dataTournament} />}

      {data.map(item => (
        <Tournaments
          key={item.id}
          group_id={item.id}
          name={item.name}
          description={item.tournament_description}
          winners={item.winners}
          type={item.type}
        />
      ))}
    </>
  )
}

export default TournamentsContainer

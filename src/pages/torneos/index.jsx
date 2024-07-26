import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import GroupsContainer from './GroupsContainer'
import Champion from './Champion'

const TournamentsContainer = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const { id } = useParams()
  const { data, loading } = useFetch(`/tournaments/${id}`)
  if (loading) return <Loader />
  if (!data) return null

  const info = {
    id: data[0].id,
    tournament: data[0].name,
    season: data[0].season,
    title: data[0].name + ' ' + data[0].season,
    champion: data[0].team_champion,
    champion_id: data[0].team_champion_id,
    champion_name: data[0].team_champion,
    champion_image: data[0].team_champion_image
  }

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <div className='text-center text-primary mb-3'>
        <h1 className='flex flex-col lg:text-xl'>
          <span className='font-black'>{info.tournament}</span>
          <span className='font-medium'>{info.season}</span>
        </h1>
        <span className='text-2xl'>🏆</span>
      </div>

      {info.champion && (
        <Champion
          id={info.champion_id}
          name={info.champion_name}
          image={info.champion_image}
        />
      )}

      <GroupsContainer id={id} />

      <Helmet>
        <title>IML Tenis {info.title}</title>
      </Helmet>
    </section>
  )
}

export default TournamentsContainer

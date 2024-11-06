import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import GroupsContainer from './GroupsContainer'
import Champion from './Champion'

const TournamentsContainer = () => {
  const { id } = useParams()
  const { data, loading } = useFetch(`/tournaments/${id}`)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    if (+id === 45) {
      document.documentElement.setAttribute('data-theme', 'light')
    }
    return () => {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

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
    <section className='fade-in flex flex-col gap-y-6'>
      <header className='flex flex-col text-center text-primary text-xl'>
        <div className='flex gap-x-2 justify-center items-center'>
          <span className='font-bold'>{info.tournament}</span>
          <span className='font-medium'>{info.season}</span>
        </div>
        <span className='text-2xl'>🏆</span>
      </header>

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

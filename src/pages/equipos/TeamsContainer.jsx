import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import TeamsPlayers from './TeamsPlayers'
import TeamsFixture from './TeamsFixture'
import { Pin, WhatsApp } from '../../components/icons'
import Image from '../../components/Image'

const Teams = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  let { id } = useParams()
  const { data, loading } = useFetch(`/teams/${id}`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='flex flex-col gap-y-3 items-center'>
        <div className='avatar'>
          <div className='w-28 rounded-full'>
            <Link
              to={`/clubes/${data[0].club_id}`}
              className='hover:opacity-70 transition-all'
            >
              <Image
                src={data[0].image}
                alt={data[0].name}
              />
            </Link>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-primary lg:text-xl'>{data[0].name}</h1>
          <h2>
            <Link
              to={`/torneos/${data[0].tournament_id}`}
              className='font-medium opacity-70 hover:text-primary text-sm'
            >
              {data[0].tournament_name}
            </Link>
          </h2>
        </div>

        <div className='flex justify-center gap-x-3 items-center text-sm mb-3'>
          <a
            href={data[0].googlemaplink}
            target='_blank'
            className='flex gap-x-2 font-medium items-center text-primary link-hover'
          >
            <Pin />
            Ubicación del club
          </a>
          <a
            href={`https://wa.me/${data[0].captain_phone}`}
            target='_blank'
            className='flex gap-x-2 font-medium items-center text-primary link-hover'
          >
            <WhatsApp />
            WhatsApp
          </a>
        </div>

        <div className='text-center'>
          <h1 className='text-primary italic lg:text-xl'>Lista de buena fe</h1>
          <h2 className='font-medium opacity-70 text-sm'>{data[0].captain_name} (Capitán)</h2>
        </div>
      </div>

      <TeamsPlayers team_id={id} />
      <TeamsFixture team_id={id} />

      <Helmet>
        <title>
          IML Tenis {data[0].name} {data[0].tournament_name}
        </title>
      </Helmet>
    </section>
  )
}

export default Teams

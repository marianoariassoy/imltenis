import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import TeamsPlayers from './TeamsPlayers'
import TeamsFixture from './TeamsFixture'
import { Pin, WhatsApp } from '../../icons/icons'

const Teams = () => {
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
              <img
                src={data[0].image}
                width='112'
                height='112'
                alt={data[0].name}
              />
            </Link>
          </div>
        </div>
        <div className='text-center text-primary '>
          <h1 className='font-bold '>{data[0].name}</h1>
          <h2>
            <Link
              to={`/torneos/${data[0].tournament_id}`}
              className=''
            >
              {data[0].tournament_name}
            </Link>
          </h2>
        </div>

        <div className='flex justify-center gap-x-3 items-center text-sm opacity-70 my-3'>
          <a
            href={data[0].googlemaplink}
            target='_blank'
            className='flex font-medium items-center gap-x-1 link-hover'
          >
            <Pin />
            Ubicación del club
          </a>
          <a
            href={`https://wa.me/${data[0].captain_phone}`}
            target='_blank'
            className='flex font-medium items-center gap-x-1 link-hover'
          >
            <WhatsApp />
            WhatsApp
          </a>
        </div>

        <div className='text-center'>
          <h1 className='text-primary italic'>Lista de buena fe</h1>
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

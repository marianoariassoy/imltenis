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
    <>
      <Helmet>
        <title>
          {data[0].name} {data[0].tournament_name}
        </title>
      </Helmet>

      <section
        className='text-center'
        id='presentacion'
      >
        <div className='avatar mb-2'>
          <div className='w-24 rounded-full'>
            <Link
              to={`/clubes/${data[0].club_id}`}
              className='hover:opacity-70'
            >
              <img
                src={data[0].image}
                width='128'
                height='128'
                alt={data[0].name}
              />
            </Link>
          </div>
        </div>

        <h1 className='font-bold text-primary'>{data[0].name}</h1>

        <Link
          to={`/torneos/${data[0].tournament_id}`}
          className='link-hover block opacity-70 mb-4 text-sm'
        >
          {data[0].tournament_name}
        </Link>

        <div className='flex justify-center gap-x-4 items-center mb-8 text-sm text-primary'>
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

        <div className='text-center mb-4'>
          <h1 className='text-primary italic'>Lista de buena fe ✏️</h1>
          <h2 className='opacity-70 text-sm'>{data[0].captain_name} (Capitán)</h2>
        </div>
      </section>

      <TeamsPlayers team_id={id} />
      <TeamsFixture team_id={id} />
    </>
  )
}

export default Teams

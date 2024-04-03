import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Pin, WhatsApp } from '../../components/icons'
import Image from '../../components/Image'
import Players from './Players'
import Fixture from './Fixture'

const Teams = () => {
  let { id } = useParams()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [id])

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
          <h1 className='italic text-primary text-xl'>{data[0].name}</h1>
          <h2>
            <Link
              to={`/torneos/${data[0].tournament_id}`}
              className='font-medium opacity-70 hover:text-primary'
            >
              {data[0].tournament_name}
            </Link>
          </h2>
        </div>

        <div className='flex justify-center gap-x-3 items-center text-sm mb-3'>
          <a
            href={`https://wa.me/${data[0].captain_phone}`}
            target='_blank'
            className='flex gap-x-1 font-medium items-center text-primary link-hover'
          >
            <WhatsApp />
            WhatsApp
          </a>
          <a
            href={data[0].googlemaplink}
            target='_blank'
            className='flex gap-x-1 font-medium items-center text-primary link-hover'
          >
            <Pin />
            Ubicación del club
          </a>
        </div>

        <div className='text-center'>
          <h1 className='text-primary font-bold'>Lista de buena fe</h1>
          <h2 className='opacity-70 text-sm'>
            Capitán: <span className='font-bold'>{data[0].captain_name}</span>
          </h2>
        </div>
      </div>

      <Players id={id} />
      <Fixture id={id} />

      <Helmet>
        <title>
          IML Tenis {data[0].name} {data[0].tournament_name}
        </title>
      </Helmet>
    </section>
  )
}

export default Teams

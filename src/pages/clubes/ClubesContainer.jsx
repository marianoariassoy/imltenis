import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import ClubesTeams from './ClubesTeams'
import { Instagram, Pin } from '../../icons/icons'
const ClubesContainer = () => {
  let { id } = useParams()
  const { data, loading } = useFetch(`/clubes/${id}`)
  if (loading) return <Loader />

  console.log(data)

  return (
    <>
      <Helmet>
        <title>{data[0].name + ' IML Tenis'}</title>
      </Helmet>

      <section className='text-sm'>
        <div
          className='hero h-96 rounded-2xl mb-8 overflow-hidden'
          style={{ backgroundImage: `url("${data[0].bgimage}")` }}
        >
          <div className='hero-overlay backdrop-blur-md'></div>
          <div className='hero-content text-center text-neutral-content'>
            <div className='max-w-md'>
              <div className='text-center text-white'>
                <div className='avatar'>
                  <div className='w-32 rounded-full'>
                    <img src={data[0].image} />
                  </div>
                </div>
                <h1 className='font-bold text-xl'>{data[0].name}</h1>
                <div className='text-sm'>
                  <p>{data[0].location}</p>
                  {data[0].phone && <p>Tel. {data[0].phone}</p>}
                  {data[0].whatsapp && <p className='text-medium'>Whastapp. {data[0].whatsapp}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClubesTeams club_id={id} />
    </>
  )
}

export default ClubesContainer

import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import ClubesTeams from './ClubesTeams'
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

      <section className='text-sm mb-8 text-center '>
        <div className='avatar'>
          <div className='w-32 rounded-full'>
            <img src={data[0].image} />
          </div>
        </div>
        <h1 className='font-bold text-xl text-white mb-2'>{data[0].name}</h1>
        <div className='mb-4'>
          <p>{data[0].location}</p>
          {data[0].phone && <p className='font-bold'>Tel. {data[0].phone}</p>}
        </div>
        <div>
          {data[0].whatsapp && (
            <p className='font-bold'>
              <a
                href={`https://wa.me/${data[0].whatsapp}`}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary link-hover'
              >
                WhatsApp
              </a>
            </p>
          )}
          {data[0].instagram && (
            <p className='font-bold'>
              <a
                href={data[0].instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary link-hover'
              >
                Instagram
              </a>
            </p>
          )}
          {data[0].facebook && (
            <p className='font-bold'>
              <a
                href={data[0].facebook}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary link-hover'
              >
                Facebook
              </a>
            </p>
          )}
          {data[0].web && (
            <p className='font-bold'>
              <a
                href={data[0].web}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary link-hover'
              >
                Web
              </a>
            </p>
          )}
        </div>
      </section>

      <ClubesTeams club_id={id} />
    </>
  )
}

export default ClubesContainer

import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Details from './Details'
import Champion from './Champion'

const Tournament = () => {
  const { id } = useParams()
  const { data, loading } = useFetch(`/weekend/tournaments/${id}`)
  if (loading) return <Loader />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <header className='flex flex-col text-center gap-y-3'>
        <span className='font-bold text-xl text-primary'>{data.title}</span>
        <div className='flex flex-col font-medium text-sm'>
          <span>
            📅 {data.date} {data.hour}
          </span>
        </div>
      </header>

      {data.champion ? <Champion id={data.champion} /> : ''}

      <Details
        id_tournament={id}
        description={data.description}
      />

      <Helmet>
        <title>
          IML Weekend {data.title} {data.date}
        </title>
      </Helmet>
    </section>
  )
}

export default Tournament

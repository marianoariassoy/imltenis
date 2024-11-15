import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Details from './Details'
import Champion from './Champion'
import Header from '../../components/Header'

const Tournament = () => {
  const { id } = useParams()
  const { data, loading } = useFetch(`/weekend/tournaments/${id}`)
  if (loading) return <Loader />

  return (
    <section className='fade-in flex flex-col gap-y-6 max-w-3xl m-auto'>
      <Header
        title={data.title}
        description={`🕜 ${data.date} ${data.hour}`}
      />

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

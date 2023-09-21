import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Torneos = () => {
  const { data, loading } = useFetch(`/tournaments`)
  if (loading) return <Loader />

  return (
    <>
      <Helmet>
        <title>IML Tenis Torneos</title>
      </Helmet>

      <section
        className='mb-8 fade-in'
        id='presentacion'
      >
        <div className='text-center text-primary text-xl'>
          <h1 className='font-bold'>Torneos</h1>
          🏆
        </div>
      </section>

      <section className='flex flex-col gap-y-2 justify-center items-center font-bold'>
        {data &&
          data
            .filter(item => item.season !== 2)
            .map(item => (
              <Link
                key={item.id}
                to={`/torneos/${item.id}`}
                className='link-hover text-primary'
              >
                <span>{item.name}</span> {item.season_name}
              </Link>
            ))}
      </section>
    </>
  )
}

export default Torneos

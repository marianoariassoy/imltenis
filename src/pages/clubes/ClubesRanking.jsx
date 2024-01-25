import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import Labels from '../../components/Labels'

const ClubesRanking = () => {
  const { data, loading } = useFetch(`/clubes/ranking`)
  if (loading) return <Loader />

  const labels = [
    {
      name: 'Club',
      value: ''
    },
    {
      name: 'Pts.',
      value: 'Puntos'
    },
    {
      name: 'SG',
      value: 'Series ganadas'
    },
    {
      name: 'SJ',
      value: 'Series jugadas'
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-center text-xl'>
        <h1 className='font-bold text-primary'>Ranking de Clubes TyP</h1>
        <h2 className='font-medium opacity-70'>2023</h2>
        🏆
      </div>

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={` ${index === 0 && 'text-primary'}`}
              >
                <td className='pl-0 flex items-center gap-3'>
                  <span className='font-semibold'>{index + 1}</span>
                  <div className='avatar'>
                    <div className='w-12 rounded-full'>
                      <Link
                        to={`/clubes/${item.id}`}
                        className='hover:opacity-70 transition-all'
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          width='44'
                          height='44'
                        />
                      </Link>
                    </div>
                  </div>
                  <Link
                    to={`/clubes/${item.id}`}
                    className='hover:text-primary font-medium'
                  >
                    {item.name}
                  </Link>
                </td>
                <td>
                  <span className='font-bold'>{item.matches_won}</span>
                </td>
                <td>{item.series_won}</td>
                <td>{item.series_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels.slice(1, labels.length)} />

      <Helmet>
        <title>IML Tenis Ranking de Clubes</title>
      </Helmet>
    </section>
  )
}

export default ClubesRanking

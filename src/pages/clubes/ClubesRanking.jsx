import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import { Bull } from '../../icons/icons'

const ClubesRanking = () => {
  const { data, loading } = useFetch(`/clubes/ranking`)
  if (loading) return <Loader />

  return (
    <>
      <Helmet>
        <title>Ranking de Clubes IML Tenis</title>
      </Helmet>

      <section
        className='mb-4 text-center'
        id='presentacion'
      >
        <h1 className='font-bold text-primary text-xl'>Ranking de Clubes TyP</h1>
        <h2 className='opacity-70'>2023</h2>
        🏆
      </section>

      <section>
        <div className='overflow-x-auto text-sm mb-6 fade-in'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th width='30'></th>
                <th className='pl-0'>Club</th>
                <th width='100'>SG</th>
                <th width='100'>SJ</th>
                <th width='100'>PG</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className={` ${index === 0 && 'text-primary'}`}
                >
                  <td className='p-0'>{index === 0 && <Bull />}</td>
                  <td className='pl-0 flex items-center gap-3'>
                    <span className='font-semibold'>{index + 1}</span>
                    <div className='avatar'>
                      <div className='w-11 rounded-full'>
                        <Link
                          to={`/clubes/${item.id}`}
                          className='hover:opacity-70'
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
                  <td className='font-semibold'>{item.series_won}</td>
                  <td>{item.series_total}</td>
                  <td>{item.matches_won}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className='text-center text-sm'
          id='info'
        >
          <p>
            <span className='opacity-70'>
              <strong>SG:</strong> Series Ganadas <strong>SJ:</strong> Series Jugadas <strong>PG:</strong> Parciales
              Ganados.
            </span>
          </p>
        </div>
      </section>
    </>
  )
}

export default ClubesRanking

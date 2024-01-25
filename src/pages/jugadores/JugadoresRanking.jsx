import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import { rankingOptions } from '../../data/data'
import Labels from '../../components/Labels'

const JugadoresRanking = () => {
  const [filters, setFilters] = useState(0)
  const { data, loading, setLoading } = useFetch(`/players/ranking/${filters}`)
  if (loading) return <Loader />

  const filterRanking = (e, num) => {
    setFilters(num)
    setLoading(true)
    const btns = document.querySelectorAll('.btn-filter')
    btns.forEach(item => {
      item.classList.remove('text-primary')
      item.classList.remove('opacity-100')
      item.classList.add('opacity-70')
    })
    e.target.classList.add('text-primary')
    e.target.classList.remove('opacity-70')
    e.target.classList.add('opacity-100')
  }

  const labels = [
    {
      name: 'Nombre',
      value: ''
    },
    {
      name: 'Equipo',
      value: ''
    },
    {
      name: 'Categoría',
      value: ''
    },
    {
      name: 'Pts.',
      value: 'Puntos'
    },
    {
      name: 'DS',
      value: 'Diferencia de sets'
    },
    {
      name: 'DG',
      value: 'Diferencia de games'
    },
    {
      name: 'PJ',
      value: 'Parciales jugados'
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-center text-xl'>
        <h1 className='font-bold text-primary'>Ranking UrbanKicks</h1>
        <h2 className='font-medium opacity-70'>Clausura 2023</h2>
        👑
      </div>

      <div className='row flex gap-4 justify-center text-sm'>
        {rankingOptions.map(item => (
          <button
            key={item.category}
            className={`btn-filter ${item.category ? 'opacity-70' : 'opacity-100 text-primary'} `}
            onClick={e => filterRanking(e, item.category)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th
                  key={index}
                  width='100'
                >
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`${index === 0 && 'text-primary'}`}
              >
                <td className='pl-0 flex items-center gap-3'>
                  <span className='font-semibold'>{index + 1}</span>
                  <div className='avatar'>
                    <div className='w-10 rounded-full'>
                      <Link
                        to={`/jugadores/${item.id}`}
                        className='hover:opacity-70 transition-all'
                      >
                        <img
                          src={`${item.image}`}
                          alt={item.name}
                          width='40'
                          height='40'
                        />
                      </Link>
                    </div>
                  </div>
                  <Link
                    to={`/jugadores/${item.id}`}
                    className='hover:text-primary font-medium'
                  >
                    {item.name}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/equipos/${item.team_id}`}
                    className='hover:text-primary'
                  >
                    {item.team_name}
                  </Link>
                </td>
                <td>
                  <a
                    href={`/torneos/${item.tournament_id}`}
                    className='hover:text-primary'
                  >
                    {item.tournament_name}
                  </a>
                </td>
                <td>
                  <span className='font-bold'>{item.matches_won}</span>
                </td>
                <td>{item.sets}</td>
                <td>{item.games}</td>
                <td>{item.matches_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels.slice(3, labels.length)} />

      <Helmet>
        <title>IML Tenis Ranking de Jugadores UrbanKicks</title>
      </Helmet>
    </section>
  )
}

export default JugadoresRanking

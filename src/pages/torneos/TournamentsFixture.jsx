import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import { Bull } from '../../icons/icons'

const TournamentsFixture = ({ group_id, type }) => {
  const [filters, setFilters] = useState('all')
  const { data, loading } = useFetch(`/groups/series/${group_id}`)

  if (loading) return <Loader />
  if (!data) return null

  const filterData = data => {
    return data.filter(item => {
      return item.winner === filters || filters === 'all'
    })
  }

  const filteredData = filterData(data)

  const handlerFilter = (e, filter) => {
    setFilters(filter)
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

  return (
    <section className='fade-in flex flex-col mb-6'>
      <div className='text-center'>{type != 1 && <h1 className='italic text-primary mb-3 lg:text-xl'>Fixture</h1>}</div>

      {type != 1 && (
        <div className='flex gap-x-6 justify-center text-sm mb-6'>
          <button
            className='btn-filter text-primary'
            onClick={e => handlerFilter(e, 'all')}
          >
            Todos
          </button>
          <button
            className='btn-filter opacity-70'
            onClick={e => handlerFilter(e, false)}
          >
            Por jugar
          </button>
          <button
            className='btn-filter opacity-70'
            onClick={e => handlerFilter(e, true)}
          >
            Jugados
          </button>
        </div>
      )}

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th width='30'></th>
              <th
                className='pl-0'
                width='50'
              >
                Fecha
              </th>
              <th width='100'>Hora</th>
              <th width='280'>Local</th>
              <th width='160'>Score</th>
              <th>Visitante</th>
              <th>Serie</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr
                key={item.id}
                className={item.winner ? 'opacity-50 grayscale' : ''}
              >
                <td className='p-0'>{item.winner && <Bull />}</td>
                <td className='pl-0'>
                  <span className='font-semibold'>{item.date}</span>
                </td>
                <td>{item.hour}</td>
                <td>
                  <div className='flex items-center'>
                    <div className='avatar mr-4'>
                      <div className='w-9 rounded-full'>
                        <Link
                          to={`/equipos/${item.home_id}`}
                          className='hover:opacity-70'
                        >
                          <img
                            src={item.home_image}
                            width='36'
                            height='36'
                            alt={item.home_name}
                          />
                        </Link>
                      </div>
                    </div>
                    <Link
                      to={`/equipos/${item.home_id}`}
                      className='hover:text-primary font-semibold'
                    >
                      {item.home_name}
                    </Link>
                  </div>
                </td>
                <td>
                  <Link
                    to={`/series/${item.id}`}
                    className='hover:text-primary mr-1 font-semibold'
                  >
                    {item.score_home}-{item.score_away}
                  </Link>
                </td>
                <td>
                  <div className='flex items-center'>
                    <div className='avatar mr-4'>
                      <div className='w-9 rounded-full'>
                        <Link
                          to={`/equipos/${item.away_id}`}
                          className='hover:opacity-70'
                        >
                          <img
                            src={item.away_image}
                            width='36'
                            height='36'
                            alt={item.away_name}
                          />
                        </Link>
                      </div>
                    </div>
                    <Link
                      to={`/equipos/${item.away_id}`}
                      className='hover:text-primary font-semibold'
                    >
                      {item.away_name}
                    </Link>
                  </div>
                </td>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default TournamentsFixture

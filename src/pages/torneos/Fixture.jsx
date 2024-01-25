import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bull } from '../../icons/icons'
import FixtureFilter from './FixtureFilter'

const Fixture = ({ data, type }) => {
  const [filters, setFilters] = useState('all')
  const filteredData = data.filter(item => item.winner === filters || filters === 'all')

  return (
    <section className='fade-in'>
      {+type !== 1 && (
        <div>
          <h1 className='italic text-primary text-center mb-3 lg:text-xl'>Fixture</h1>
          <FixtureFilter
            filters={filters}
            setFilters={setFilters}
          />
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
        {filteredData.length === 0 && <div className='text-center font-medium text-primary py-6'>No hay series</div>}
      </div>
    </section>
  )
}

export default Fixture

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bull } from '../../components/icons'
import FixtureFilter from './FixtureFilter'
import TeamItem from '../../components/TeamItem'

const Fixture = ({ data, type }) => {
  const [filters, setFilters] = useState(null)
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
        <table
          className='table w-full'
          summary='Fixture'
        >
          {filteredData.length > 0 && (
            <thead>
              <tr>
                <th
                  scope='col'
                  width='50'
                  className='pl-0'
                >
                  Fecha
                </th>
                <th
                  scope='col'
                  width='50'
                >
                  Hora
                </th>
                <th
                  scope='col'
                  width='255'
                >
                  Local
                </th>
                <th
                  scope='col'
                  className='text-center'
                >
                  Score
                </th>
                <th scope='col'>Visitante</th>
                <th scope='col'>Serie</th>
              </tr>
            </thead>
          )}

          <tbody>
            {filteredData.map(item => (
              <tr
                key={item.id}
                className={item.winner ? 'opacity-50 grayscale' : ''}
              >
                <td
                  scope='row'
                  className='pl-0'
                >
                  <div className='flex gap-x-[0.6rem] items-center'>
                    {item.winner && <Bull />}
                    <span className='font-semibold'>{item.date}</span>
                  </div>
                </td>
                <td>{item.hour == ' :00' ? '-' : item.hour}</td>
                <td className='lg:whitespace-normal'>
                  <TeamItem
                    id={item.home_id}
                    name={item.home_name}
                    image={item.home_image}
                  />
                </td>
                <td className='text-center'>
                  {item.score_home || item.score_away ? (
                    <Link
                      to={`/series/${item.id}`}
                      className='hover:text-primary font-bold'
                    >
                      {item.score_home}-{item.score_away}
                    </Link>
                  ) : (
                    '-'
                  )}
                </td>
                <td className='lg:whitespace-normal'>
                  <TeamItem
                    id={item.away_id}
                    name={item.away_name}
                    image={item.away_image}
                  />
                </td>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filters !== null && filteredData.length === 0 && (
          <div className='text-center text-primary mb-3 font-bold'>No hay series 🥲</div>
        )}
      </div>
    </section>
  )
}

export default Fixture

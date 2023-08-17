import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import { Bull } from '../../icons/icons'

const JugadoresRanking = () => {
  const [filters, setFilters] = useState(0)
  const { data, loading } = useFetch(`/players/ranking`)
  if (loading) return <Loader />

  const filterData = data => {
    return data.filter(item => {
      return +item.tournament_id === filters || filters === 0
    })
  }

  const filteredData = filterData(data)

  const filterRanking = (e, num) => {
    setFilters(num)
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
    <>
      <Helmet>
        <title>Ranking Urban Kicks Jugadores</title>
      </Helmet>

      <section
        className='mb-4 text-center '
        id='presentacion'
      >
        <h1 className='font-bold text-primary text-xl'>Ranking Urban Kicks</h1>
        <h2 className='opacity-70'>Apertura 2023</h2>
        👑
      </section>

      <section id='filtros'>
        <div className='row flex gap-4 justify-center mb-4 text-sm'>
          <button
            className='btn-filter text-primary'
            onClick={e => filterRanking(e, 0)}
          >
            Todos
          </button>
          <button
            className='btn-filter opacity-70'
            onClick={e => filterRanking(e, 15)}
          >
            1era
          </button>
          <button
            className='btn-filter opacity-70'
            onClick={e => filterRanking(e, 14)}
          >
            2da
          </button>
          <button
            className='btn-filter opacity-70'
            onClick={e => filterRanking(e, 13)}
          >
            3ra
          </button>
          <button
            className='btn-filter opacity-70'
            onClick={e => filterRanking(e, 12)}
          >
            4ta
          </button>
        </div>
      </section>

      <section id='grupo'>
        <div className='overflow-x-auto text-sm'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th width='30'></th>
                <th className='pl-0'>Nombre</th>
                <th>Equipo</th>
                <th>Torneo</th>
                <th width='100'>PJ</th>
                <th width='100'>PG</th>
                <th width='100'>DS</th>
                <th width='100'>DG</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${index === 0 && 'text-primary'}`}
                >
                  <td className='p-0'>{index === 0 && <Bull />}</td>
                  <td className='pl-0 flex items-center gap-3'>
                    <span className='font-semibold'>{index + 1}</span>
                    <div className='avatar'>
                      <div className='w-9 rounded-full'>
                        <Link
                          to={`/jugadores/${item.id}`}
                          className='hover:opacity-70'
                        >
                          <img
                            src={`${item.image}`}
                            alt={item.name}
                            width='36'
                            height='36'
                          />
                        </Link>
                      </div>
                    </div>
                    <Link
                      to={`/jugadores/${item.id}`}
                      className='link-hover font-medium'
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/equipos/${item.team_id}`}
                      className='link-hover'
                    >
                      {item.team_name}
                    </Link>
                  </td>
                  <td>
                    <a
                      href={`/torneos/${item.tournament_id}`}
                      className='link-hover'
                    >
                      {item.tournament_name}
                    </a>
                  </td>
                  <td>{item.matches_total}</td>
                  <td>{item.matches_won}</td>
                  <td>{item.sets}</td>
                  <td>{item.games}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan='8'></th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div
          className='text-center text-sm'
          id='info'
        >
          <p>
            🔥{' '}
            <span className='opacity-70'>
              <strong>PJ:</strong> Parciales Jugados <strong>PG:</strong> Parciales Ganados <strong>DS:</strong>{' '}
              Diferencia de Sets <strong>DG:</strong> Diferencia de Games.
            </span>
          </p>
        </div>
      </section>
    </>
  )
}

export default JugadoresRanking

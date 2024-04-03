import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import { rankingOptions } from '../../components/data'
import Labels from '../../components/Labels'
import TitleRow from '../../components/TitleRow'

const JugadoresRanking = () => {
  const { data, loading } = useFetch(`/players/ranking/2`)
  const [filter, setFilter] = useState(6)

  if (loading) return <Loader />

  const filteredPlayers = data.filter(player => +player.tournament_category === filter || filter === 'all')

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
    <section className='fade-in flex flex-col gap-y-3'>
      <div className='text-center text-xl mb-3'>
        <h1 className='font-bold text-primary'>Ranking UrbanKicks</h1>
        <h2 className='font-medium opacity-70 text-base'>Apertura 2024</h2>
      </div>

      <div className='row flex gap-3 justify-center text-sm flex-wrap max-w-xl m-auto lg:mb-3'>
        {rankingOptions.map(item => (
          <button
            key={item.category}
            className={`btn-filter ${
              item.category === filter ? 'text-primary' : 'opacity-70 hover:text-primary hover:opacity-100'
            } `}
            onClick={() => setFilter(item.category)}
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
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.slice(0, 30).map((item, index) => (
              <tr
                key={item.id}
                className={`${index === 0 && 'text-primary'}`}
              >
                <TitleRow
                  num={index + 1}
                  image={item.image}
                  title={item.name}
                  link={`/jugadores/${item.id}`}
                />
                <td>
                  <Link
                    to={`/equipos/${item.team_id}`}
                    className='hover:text-primary font-bold'
                  >
                    {item.team_name}
                  </Link>
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

      <Labels labels={labels} />

      <Helmet>
        <title>IML Tenis Ranking de Jugadores UrbanKicks</title>
      </Helmet>
    </section>
  )
}

export default JugadoresRanking

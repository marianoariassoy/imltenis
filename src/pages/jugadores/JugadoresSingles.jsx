import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const JugadoresSingles = ({ player_id }) => {
  const { data, loading } = useFetch(`/players/${player_id}/singles`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section id='lista-single'>
      <h1 className='text-center mb-4 font-medium text-primary'>Singles</h1>

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th width='50'>Fecha</th>
              <th>Oponente</th>
              <th>Resultado</th>
              <th>G/P</th>
              <th>Torneo</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>
                  <Link
                    to={`/jugadores/${item.oponent_id}`}
                    className='link-hover text-primary'
                  >
                    {item.oponent_name}
                  </Link>
                  &nbsp;(
                  <Link
                    to={`/equipos/${item.team_oponent_id}`}
                    className='link-hover'
                  >
                    {item.team_oponent_name}
                  </Link>
                  )
                </td>
                <td>{item.score}</td>
                <td>
                  <span className='circle text-primary'>{item.result}</span>
                </td>
                <td>
                  <Link
                    to={`/torneos/${item.tournament_id}`}
                    className='link-hover text-primary'
                  >
                    {item.tournament_name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan='5'></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}

export default JugadoresSingles

import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const JugadoresDobles = ({ player_id }) => {
  const { data, loading } = useFetch(`/players/${player_id}/doubles`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section id='lista-dobles'>
      <h1 className='text-center mb-4 font-medium text-primary'>Dobles</h1>

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th width='80'>Fecha</th>
              <th>Oponentes</th>
              <th>Pareja</th>
              <th>Resultado</th>
              <th>G/T</th>
              <th>Torneo</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>
                  <Link
                    to={`/jugadores/${item.oponent1_id}`}
                    className='link-hover text-primary'
                  >
                    {item.oponent1_name}
                  </Link>
                  &nbsp;/&nbsp;
                  <Link
                    to={`/jugadores/${item.oponent2_id}`}
                    className='link-hover text-primary'
                  >
                    {item.oponent2_name}
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
                <td>
                  <Link
                    to={`/jugadores/${item.partner_id}`}
                    className='link-hover text-primary'
                  >
                    {item.partner_name}
                  </Link>
                </td>
                <td>{item.score}</td>
                <td>
                  <div className='h-7 w-7 rounded-full flex justify-center items-center border text-primary border-[#f34643]'>
                    {item.result}
                  </div>
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
              <th colSpan='6'></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}

export default JugadoresDobles

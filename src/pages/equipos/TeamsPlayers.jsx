import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const TeamsPlayers = ({ team_id }) => {
  const { data, loading } = useFetch(`/teams/${team_id}/players`)
  if (loading) return <Loader />

  return (
    <section id='lista'>
      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Nombre y Apellido</th>
              <th>P</th>
              <th>PG</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className='pl-0 flex items-center gap-3'>
                  <span className='font-semibold'>{index + 1}</span>
                  <div className='avatar'>
                    <div className='w-9 rounded-full'>
                      <Link
                        to={`/jugadores/${item.id}`}
                        className='hover:opacity-70'
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          width='36'
                          height='36'
                        />
                      </Link>
                    </div>
                  </div>
                  <Link
                    to={`/jugadores/${item.id}`}
                    className='link-hover'
                  >
                    {item.name}
                  </Link>
                </td>
                <td>{item.series_total}</td>
                <td>{item.series_won_total}</td>
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

      <div
        className='text-center text-sm'
        id='info'
      >
        <p>
          🔥
          <span className='opacity-70'>
            <strong>P:</strong> Parciales Jugados <strong>PG:</strong> Parciales Ganados/
          </span>
        </p>
      </div>
    </section>
  )
}

export default TeamsPlayers

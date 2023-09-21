import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const JugadoresEquipos = ({ player_id }) => {
  const { data, loading } = useFetch(`/players/${player_id}/teams`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section id='equipos'>
      <h1 className='text-center mb-4 font-medium text-primary'>Equipos</h1>

      <div className='overflow-x-auto text-sm mb-6'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Club</th>
              <th>Competencia</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>
                  <div className='flex items-center'>
                    <div className='avatar mr-4'>
                      <div className='w-9 rounded-full'>
                        <Link
                          to={`/equipos/${item.team_id}`}
                          className='hover:opacity-70'
                        >
                          <img
                            src={item.image}
                            width='36'
                            height='36'
                            alt={item.team_name}
                          />
                        </Link>
                      </div>
                    </div>
                    <Link
                      to={`/equipos/${item.team_id}`}
                      className='hover:text-primary font-medium'
                    >
                      {item.team_name}
                    </Link>
                  </div>
                </td>
                <td>
                  <Link
                    to={`/clubes/${item.club_id}`}
                    className='hover:text-primary'
                  >
                    {item.club_name}
                  </Link>
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
        </table>
      </div>
    </section>
  )
}

export default JugadoresEquipos

import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const JugadoresSingles = ({ player_id }) => {
  const { data, loading } = useFetch(`/players/${player_id}/singles`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <h1 className='text-center font-bold text-primary'>Singles</h1>

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
                    className='hover:text-primary'
                  >
                    {item.team_oponent_name}
                  </Link>
                  )
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
        </table>
      </div>
    </section>
  )
}

export default JugadoresSingles

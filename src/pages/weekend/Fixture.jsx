import { Link } from 'react-router-dom'
import PlayersFixture from './PlayersFixture'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'

const Fixture = ({ group_id, type }) => {
  const { data, loading } = useFetch(`/weekend/tournaments/groups/${group_id}/series`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='fade-in'>
      {type !== 2 && <h1 className='italic text-primary text-center mb-3'>Fixture</h1>}

      <div className='overflow-x-auto text-sm'>
        <table
          className='table w-full'
          summary='Fixture'
        >
          {data.length > 0 && (
            <thead>
              <tr>
                <th
                  scope='col'
                  width='260'
                >
                  Jugadores
                </th>
                <th
                  scope='col'
                  className='text-center'
                >
                  Score
                </th>
                <th scope='col'>Jugadores</th>
              </tr>
            </thead>
          )}

          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td className={`${item.winner === item.partner1_id ? 'text-primary' : ''}`}>
                  <PlayersFixture
                    player1_id={item.player1_id}
                    player2_id={item.player2_id}
                    player1_name={item.player1_name}
                    player2_name={item.player2_name}
                    player1_image={item.player1_image}
                    player2_image={item.player2_image}
                  />
                </td>
                <td className='text-center'>
                  {item.winner ? (
                    <Link
                      to={`/series/${item.id}`}
                      className='hover:text-primary font-bold'
                    >
                      {item.set1home}-{item.set1away}
                    </Link>
                  ) : (
                    '-'
                  )}
                </td>
                <td className={`${item.winner === item.partner2_id ? 'text-primary' : ''}`}>
                  <PlayersFixture
                    player1_id={item.player3_id}
                    player2_id={item.player4_id}
                    player1_name={item.player3_name}
                    player2_name={item.player4_name}
                    player1_image={item.player3_image}
                    player2_image={item.player4_image}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Fixture

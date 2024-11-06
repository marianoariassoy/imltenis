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

      <div className='overflow-x-auto mt-3'>
        {data.map(item => (
          <div
            key={item.id}
            className='flex justify-between text-sm'
          >
            <div className={`flex-1 pr-4 py-3 ${item.winner === item.partner1_id ? '' : 'opacity-60'}`}>
              <PlayersFixture
                player1_id={item.player1_id}
                player2_id={item.player2_id}
                player1_name={item.player1_name}
                player2_name={item.player2_name}
                player1_image={item.player1_image}
                player2_image={item.player2_image}
              />
            </div>
            <div className='text-center opacity-70 px-2 py-3'>
              {item.winner ? (
                <div className='font-bold flex flex-col'>
                  <span className=''>Score</span>
                  <span>
                    {item.set1home}-{item.set1away}
                  </span>
                </div>
              ) : (
                '-'
              )}
            </div>
            <div
              className={`flex-1 flex justify-end pl-4 py-3 ${item.winner === item.partner2_id ? '' : 'opacity-60'}`}
            >
              <PlayersFixture
                player1_id={item.player3_id}
                player2_id={item.player4_id}
                player1_name={item.player3_name}
                player2_name={item.player4_name}
                player1_image={item.player3_image}
                player2_image={item.player4_image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Fixture

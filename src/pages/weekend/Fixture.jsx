import { Link } from 'react-router-dom'
import PlayersFixture from './PlayersFixture'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'

const Fixture = ({ group_id, type }) => {
  const { data, loading } = useFetch(`/weekend/tournaments/groups/${group_id}/series`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='fade-in mb-4'>
      {type !== 2 && <h1 className='italic text-primary text-center mb-6'>Orden de juego</h1>}

      <div className='w-full overflow-x-auto mt-3 flex flex-col  gap-y-3'>
        {data.map(item => (
          <div
            key={item.id}
            className='flex justify-between items-start text-sm'
          >
            <div className={`flex-1 flex gap-x-3 ${item.winner === item.partner1_id ? 'text-primary' : ''}`}>
              {item.num ? <span className='font-medium'>{item.num}.</span> : ''}

              <PlayersFixture
                player1_id={item.player1_id}
                player2_id={item.player2_id}
                player1_name={item.player1_name}
                player2_name={item.player2_name}
                player1_image={item.player1_image}
                player2_image={item.player2_image}
              />
            </div>
            <div className='text-center opacity-70 px-4'>
              {item.winner ? (
                <div className='font-bold flex flex-col'>
                  <span>
                    {item.set1home}-{item.set1away}
                  </span>
                </div>
              ) : (
                <span className='font-medium'>vs.</span>
              )}
            </div>
            <div className={`flex-1 flex justify-end ${item.winner === item.partner2_id ? 'text-primary' : ''}`}>
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

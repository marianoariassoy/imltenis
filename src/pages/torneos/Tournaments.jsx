import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import TournamentsItem from './TournamentsItem'
import FixtureContainer from './FixtureContainer'

const Tournaments = ({ id }) => {
  const [group, setGroup] = useState(0)
  const { data, loading } = useFetch(`/tournaments/groups/${id}`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <div>
      {data
        .filter(item => item.type == 1)
        .map((item, index) => (
          <div
            className='text-center mb-3'
            key={index}
          >
            <h1 className='italic text-xl mb-3 text-primary'>{item.name}</h1>
            <FixtureContainer
              group_id={item.id}
              type={item.type}
            />
          </div>
        ))}

      <div className='text-center lg:mb-3'>
        <div className='flex gap-x-3 justify-center items-center mb-2'>
          {data
            .filter(item => item.type != 1)
            .map((item, index) => (
              <div
                key={index}
                className='flex gap-x-3 justify-center items-center'
              >
                <button
                  className={`italic text-xl ${
                    index === group ? 'text-primary' : 'opacity-50 hover:text-primary hover:opacity-100'
                  }`}
                  onClick={() => setGroup(index)}
                >
                  {item.name}
                </button>
                {index !== data.length - 1 && <span className=' w-6 h-[1px] bg-primary'></span>}
              </div>
            ))}
        </div>
        <span className='font-medium opacity-70 text-sm lg:text-base'>Posiciones</span> 🔥
      </div>

      {data
        .filter(item => item.type != 1)
        .map((item, index) => (
          <div
            key={index}
            className={index === group ? 'block' : 'hidden'}
          >
            <TournamentsItem data={item} />
          </div>
        ))}
    </div>
  )
}

export default Tournaments

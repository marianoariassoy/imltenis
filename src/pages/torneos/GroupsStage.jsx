import { useState } from 'react'
import TournamentsItem from './TournamentsItem'

const GroupsStage1 = ({ groups }) => {
  const [group, setGroup] = useState(0)

  return (
    <section>
      <div className='text-center lg:mb-3'>
        <div className='flex gap-x-3 justify-center items-center mb-2'>
          {groups.map((item, index) => (
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
              {index !== groups.length - 1 && <span className=' w-6 h-[1px] bg-primary'></span>}
            </div>
          ))}
        </div>
        <span className='font-medium opacity-70 text-sm lg:text-base'>Posiciones</span> 🔥
      </div>

      {groups.map((item, index) => (
        <div
          key={index}
          className={index === group ? 'block' : 'hidden'}
        >
          <TournamentsItem data={item} />
        </div>
      ))}
    </section>
  )
}

export default GroupsStage1

import { Link } from 'react-router-dom'

const CalendarItem = ({ item }) => {
  return (
    <article className='mb-6'>
      {/* <h1 className='font-semibold text-primary text-center mb-2'>🕒 {item.hour} hs.</h1> */}
      <div className='grid grid-cols-3 w-full text-center items-start px-8'>
        <div className='flex flex-col gap-y-2 items-center'>
          <div className='avatar w-16'>
            <div className='rounded-full'>
              <Link
                to={`/equipos/${item.home_id}`}
                className='hover:opacity-70'
              >
                <img
                  src={item.home_image}
                  width='96'
                  height='96'
                  alt={item.home_name}
                />
              </Link>
            </div>
          </div>
          <div className='text-sm'>{item.home_name}</div>
        </div>
        <div className='pt-4'>
          <span className='block font-semibold text-primary text-sm'>🕒 {item.hour} hs.</span>
          <span className='font-bold text-xl '>🤝</span>
        </div>
        <div className='flex flex-col gap-y-2 items-center'>
          <div className='avatar w-16'>
            <div className='rounded-full'>
              <Link
                to={`/equipos/${item.away_id}`}
                className='hover:opacity-70'
              >
                <img
                  src={item.away_image}
                  width='96'
                  height='96'
                  alt={item.away_name}
                />
              </Link>
            </div>
          </div>
          <div className='text-sm'>{item.away_name}</div>
        </div>
      </div>
    </article>
  )
}

export default CalendarItem

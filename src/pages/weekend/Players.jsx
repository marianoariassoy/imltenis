import { Link } from 'react-router-dom'
import Image from '../../components/Image'

const TitleRow = ({ item }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-2'>
      <article className='flex items-center gap-x-2'>
        <div className='avatar'>
          <div className='w-6 h-6 rounded-full overflow-hidden'>
            <Image
              src={item.player1_image}
              alt={item.player1_name}
            />
          </div>
        </div>
        <Link
          to={`/jugadores/${item.player1_id}`}
          className='hover:text-primary font-medium'
        >
          {item.player1_name}
        </Link>
        y
      </article>

      <article className='flex items-center gap-x-2'>
        <div className='avatar'>
          <div className='w-6 h-6 rounded-full overflow-hidden'>
            <Image
              src={item.player2_image}
              alt={item.player2_name}
            />
          </div>
        </div>
        <Link
          to={`/jugadores/${item.player2_id}`}
          className='hover:text-primary font-medium'
        >
          {item.player2_name}
        </Link>
      </article>
    </div>
  )
}

export default TitleRow

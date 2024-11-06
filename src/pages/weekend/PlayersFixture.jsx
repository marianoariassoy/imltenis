import { Link } from 'react-router-dom'
import Image from '../../components/Image'

const TitleRow = ({ player1_id, player2_id, player1_name, player2_name, player1_image, player2_image }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-2'>
      <article className='flex items-center gap-x-2'>
        <div className='avatar'>
          <div className='w-6 h-6 rounded-full overflow-hidden'>
            <Image
              src={player1_image}
              alt={player1_name}
            />
          </div>
        </div>
        <Link
          to={`/jugadores/${player1_id}`}
          className='hover:text-primary font-medium'
        >
          {player1_name}
        </Link>
        y
      </article>
      <article className='flex items-center gap-x-2'>
        <div className='avatar'>
          <div className='w-6 h-6 rounded-full overflow-hidden'>
            <Image
              src={player2_image}
              alt={player2_name}
            />
          </div>
        </div>
        <Link
          to={`/jugadores/${player2_id}`}
          className='hover:text-primary font-medium'
        >
          {player2_name}
        </Link>
      </article>
    </div>
  )
}

export default TitleRow

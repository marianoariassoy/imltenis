import { Link } from 'react-router-dom'
import Image from '../../components/Image'

const TitleRow = ({ player1_id, player2_id, player1_name, player2_name, player1_image, player2_image }) => {
  return (
    <div className='flex flex-col gap-2'>
      <article className='flex items-center gap-x-3'>
        <div className='avatar'>
          <div className='w-7 h-7 rounded-full overflow-hidden'>
            <Image
              src={player1_image}
              alt={player1_name}
            />
          </div>
        </div>
        <Link
          to={`/jugadores/${player1_id}`}
          className='hover:text-primary font-medium text-left'
        >
          {player1_name}
        </Link>
      </article>
      <article className='flex items-center gap-x-3'>
        <div className='avatar'>
          <div className='w-7 h-7 rounded-full overflow-hidden'>
            <Image
              src={player2_image}
              alt={player2_name}
            />
          </div>
        </div>
        <Link
          to={`/jugadores/${player2_id}`}
          className='hover:text-primary font-medium text-left'
        >
          {player2_name}
        </Link>
      </article>
    </div>
  )
}

export default TitleRow

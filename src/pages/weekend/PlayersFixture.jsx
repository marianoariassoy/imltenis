import { Link } from 'react-router-dom'

const TitleRow = ({ player1_id, player2_id, player1_name, player2_name }) => {
  return (
    <div className='flex flex-wrap gap-x-1'>
      <Link
        to={`/jugadores/${player1_id}`}
        className='hover:underline font-medium '
      >
        {player1_name}
      </Link>
      <span className='hidden lg:block'>/</span>
      <Link
        to={`/jugadores/${player2_id}`}
        className='hover:underline font-medium '
      >
        {player2_name}
      </Link>
    </div>
  )
}

export default TitleRow

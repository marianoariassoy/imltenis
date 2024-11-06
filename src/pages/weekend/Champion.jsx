import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Link } from 'react-router-dom'
import Image from '../../components/Image'
import confetti from 'canvas-confetti'

const Champion = ({ id }) => {
  const { data, loading } = useFetch(`/weekend/tournaments/${id}/champion`)
  if (loading) return <Loader />
  else confetti()

  return (
    <div className='flex flex-col items-center gap-y-3'>
      <h1 className='italic text-center text-primary'>Campeones</h1>
      <div className='flex gap-4'>
        <div className='avatar'>
          <div className='w-16 h-16 rounded-full overflow-hidden'>
            <Image
              src={data.player1_image}
              alt={data.player1_name}
            />
          </div>
        </div>

        <div className='avatar'>
          <div className='w-16 h-16 rounded-full overflow-hidden'>
            <Image
              src={data.player2_image}
              alt={data.player2_name}
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center font-medium text-sm'>
        <Link
          to={`/jugadores/${data.player1_id}`}
          className='hover:text-primary'
        >
          {data.player1_name}
        </Link>
        <Link
          to={`/jugadores/${data.player2_id}`}
          className='hover:text-primary'
        >
          {data.player2_name}
        </Link>
      </div>
    </div>
  )
}

export default Champion

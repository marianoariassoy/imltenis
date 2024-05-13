import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import Image from '../../components/Image'

const TornamentsChampion = ({ id, name, image }) => {
  useEffect(() => {
    confetti()
  }, [id])

  return (
    <div className='flex flex-col gap-y-3 items-center my-3'>
      <h1 className='italic text-primary text-xl text-center'>
        {name} <br />
        Campéon{' '}
      </h1>
      <div className='avatar'>
        <div className='w-28 rounded-full'>
          <Link
            to={`/equipos/${id}`}
            className='hover:opacity-70 transition-all'
          >
            <Image
              src={image}
              alt={name}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TornamentsChampion

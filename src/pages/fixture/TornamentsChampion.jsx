import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'

const TornamentsChampion = ({ data }) => {
  useEffect(() => {
    confetti()
  }, [data])

  return (
    <div className='text-center mb-8'>
      <h1 className='italic mb-4 text-primary text-xl'>Campéon</h1>
      <div className='avatar mb-2'>
        <div className='w-24 rounded-full'>
          <Link
            to={`/equipos/${data[0].team_champion_id}`}
            className='hover:opacity-70'
          >
            <img
              src={data[0].team_champion_image}
              width='128'
              height='128'
              alt={data[0].team_champion}
            />
          </Link>
        </div>
      </div>
      <h1 className='font-medium text-sm'>{data[0].team_champion}</h1>
    </div>
  )
}

export default TornamentsChampion

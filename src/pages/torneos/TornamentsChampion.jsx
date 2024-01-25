import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'

const TornamentsChampion = ({ data }) => {
  useEffect(() => {
    confetti()
  }, [data])

  return (
    <div className='flex flex-col gap-y-3 items-center'>
      <h1 className='italic text-primary lg:text-xl'>Campéon</h1>
      <div className='avatar'>
        <div className='w-20 rounded-full'>
          <Link
            to={`/equipos/${data[0].team_champion_id}`}
            className='hover:opacity-70 transition-all'
          >
            <img
              src={data[0].team_champion_image}
              width='80'
              height='80'
              alt={data[0].team_champion}
            />
          </Link>
        </div>
      </div>
      <h1 className='font-medium'>{data[0].team_champion}</h1>
    </div>
  )
}

export default TornamentsChampion

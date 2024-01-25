import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'

const TornamentsChampion = ({ data }) => {
  useEffect(() => {
    confetti()
  }, [data])

  return (
    <div className='flex flex-col gap-y-3 items-center -mt-3'>
      <h1 className='italic text-primary lg:text-xl text-center'>
        Campéon <br /> {data[0].team_champion}
      </h1>
      <div className='avatar'>
        <div className='w-28 rounded-full'>
          <Link
            to={`/equipos/${data[0].team_champion_id}`}
            className='hover:opacity-70 transition-all'
          >
            <img
              src={data[0].team_champion_image}
              width='112'
              height='112'
              alt={data[0].team_champion}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TornamentsChampion

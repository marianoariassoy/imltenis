import { Link } from 'react-router-dom'

const TeamItem = ({ id, name, image }) => {
  return (
    <div className='flex flex-col gap-y-3 items-center w-2/5'>
      <div className='avatar'>
        <div className='w-20 rounded-full'>
          <Link
            to={`/equipos/${id}`}
            className='hover:opacity-70 transition-all'
          >
            <img
              src={image}
              width='80'
              height='80'
              alt={name}
            />
          </Link>
        </div>
      </div>
      <div className='px-3'>
        <Link
          to={`/equipos/${id}`}
          className='link-hover text-primary font-bold block'
        >
          {name}
        </Link>
        Local
      </div>
    </div>
  )
}

export default TeamItem

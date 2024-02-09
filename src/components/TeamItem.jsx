import { Link } from 'react-router-dom'
import Image from './Image'
import slugify from 'react-slugify'

const TeamItem = ({ id, name, image }) => {
  return (
    <div className='flex items-center gap-x-3'>
      <div className='avatar'>
        <div className='w-9 rounded-full'>
          <Link
            to={`/equipos/${id}/${slugify(name)}`}
            className='hover:opacity-70'
          >
            <Image
              src={image}
              alt={name}
            />
          </Link>
        </div>
      </div>
      <Link
        to={`/equipos/${id}/${slugify(name)}`}
        className='hover:text-primary font-semibold'
      >
        {name}
      </Link>
    </div>
  )
}

export default TeamItem

import { Link } from 'react-router-dom'

const TitleRow = ({ num, image, title, link }) => {
  return (
    <td className='pl-0'>
      <div className='flex items-center gap-x-4'>
        {num && <span className='font-bold'>{num}</span>}
        <div className='avatar'>
          <div className='w-14 rounded-full'>
            <Link
              to={link}
              className='hover:opacity-70 transition-all'
            >
              <img
                src={image}
                alt={title}
                width='56'
                height='56'
              />
            </Link>
          </div>
        </div>
        <Link
          to={link}
          className='hover:text-primary font-bold'
        >
          {title}
        </Link>
      </div>
    </td>
  )
}

export default TitleRow

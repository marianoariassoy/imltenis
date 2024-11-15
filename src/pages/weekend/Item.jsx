import { Link } from 'react-router-dom'

const Item = ({ data }) => {
  return (
    <Link
      to={`/weekend/torneos/${data.id}`}
      className='link-hover flex flex-col items-center text-sm'
    >
      <span className='text-primary font-bold'>{data.title}</span>
      <span className='font-medium'>
        {data.date} {data.hour}
      </span>
    </Link>
  )
}

export default Item

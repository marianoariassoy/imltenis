import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../components/Image'

const Item = ({ item }) => {
  return (
    <article className='flex flex-col items-start justify-start gap-y-2 text-sm'>
      <Link
        to={`/shop/${item.id}`}
        className='aspect-square hover:opacity-70 transition-all'
      >
        <Image
          src={item.image}
          alt={item.title}
        />
      </Link>
      <div className='flex flex-col'>
        <h2 className='text-primary font-bold'>{item.title}</h2>
        <div>${item.price}.-</div>
      </div>
    </article>
  )
}

export default Item

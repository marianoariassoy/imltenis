import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { products } from '../../components/data'
import Image from '../../components/Image'

const Details = () => {
  const { id } = useParams()
  const product = products.find(product => product.id === +id)

  return (
    <section className='fade-in flex flex-col gap-y-12 max-w-4xl m-auto'>
      <div className='text-center'>
        <div className='text-primary text-xl mb-2'>
          <h1 className='font-bold'>IML Shop</h1>
        </div>
        <p className='text-sm text-wrap'>
          Lleva a tu día a día tu experiencia en interclubes. <br />
          Pedi tu producto al WhatsApp{' '}
          <a
            href='https://wa.me/5491130171475'
            className='hover:underline'
          >
            11 3017 1475
          </a>
        </p>
      </div>

      <article className='flex flex-col items-start gap-y-4 mb-6'>
        <div className='aspect-square '>
          <Image
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='text-primary font-bold'>{product.title}</h2>
          <p className='text-sm'>{product.text}</p>
          <div>${product.price}.-</div>
        </div>
      </article>

      <Helmet>
        <title>IML Tenis Shop</title>
      </Helmet>
    </section>
  )
}

export default Details

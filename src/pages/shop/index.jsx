import { Helmet } from 'react-helmet'
import Item from './Items'
import { products } from '../../components/data'

const Shop = () => {
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

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((item, index) => (
          <Item
            key={index}
            item={item}
          />
        ))}
      </div>

      <Helmet>
        <title>IML Tenis Shop</title>
      </Helmet>
    </section>
  )
}

export default Shop

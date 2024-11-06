import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from './Item'

const Torneos = () => {
  const { data, loading } = useFetch(`/weekend/tournaments`)
  if (loading) return <Loader />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <header className='text-center text-primary text-[1.15rem] lg:text-xl'>
        <h1 className='font-bold'>IML Weekend</h1>
      </header>

      <div className='flex flex-col gap-y-3 items-center'>
        {data.map(item => (
          <Item
            data={item}
            key={item.id}
          />
        ))}
      </div>

      <Helmet>
        <title>IML Weekend</title>
      </Helmet>
    </section>
  )
}

export default Torneos

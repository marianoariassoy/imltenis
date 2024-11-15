import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from './Item'
import Header from '../../components/Header'

const Torneos = () => {
  const { data, loading } = useFetch(`/weekend/tournaments`)
  if (loading) return <Loader />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Header title='IML Weekend' />

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

import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Counter from './Counter'
import { Ray, Heart } from '../../components/icons'

const Estadisticas = ({ id }) => {
  const { data, loading } = useFetch(`/users/stats/${id}`)
  if (loading) return <Loader />
  if (!data)
    return (
      <h1 className='text-center text-primary font-medium px-6 text-sm'>Todavía no fuiste parte de ningún equipo 🥲</h1>
    )

  const info = [
    {
      title: 'Encuentros',
      number: data[0].matches_total,
      icon: <Ray />
    },
    {
      title: 'Ganados',
      number: data[0].matches_won,
      icon: <Heart />
    },
    {
      title: 'Sets',
      number: data[0].sets_total,
      icon: <Ray />
    },
    {
      title: 'Ganados',
      number: data[0].sets_won,
      icon: <Heart />
    }
  ]

  return (
    <section className='grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 bg-base-300 p-6 rounded-2xl'>
      {info.map((item, index) => (
        <article
          className='flex flex-col'
          key={index}
        >
          <div className='opacity-70'>{item.title}</div>
          <div className='flex items-center justify-between'>
            <div className='font-black text-primary text-2xl'>
              <Counter finalNumber={item.number} />
            </div>
            <div className='text-primary'>{item.icon}</div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Estadisticas

import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Playoffs from './Playoffs'
import Groups from './Groups'

const Details = ({ id_tournament, description }) => {
  const { data, loading } = useFetch(`/weekend/tournaments/${id_tournament}/groups`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section>
      <Playoffs data={data} />
      {description && (
        <div className='text-center text-sm py-3 mb-3 '>
          🚀 <span className='opacity-70'>{description}</span>
        </div>
      )}
      <Groups data={data} />

      {data.length < 1 && (
        <div className='text-center py-3 flex flex-col items-center gap-1'>
          <span className='text-2xl'> 🚀</span>
          <span className='text-primary font-bold'> ¡Inscripciones abiertas!</span>
        </div>
      )}
    </section>
  )
}

export default Details

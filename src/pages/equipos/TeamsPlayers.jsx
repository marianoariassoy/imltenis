import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Labels from '../../components/Labels'

const TeamsPlayers = ({ team_id }) => {
  const { data, loading } = useFetch(`/teams/${team_id}/players`)

  if (loading) return <Loader />
  if (!data) return null

  const labels = [
    {
      name: 'Nombre',
      value: ''
    },
    {
      name: 'PJ',
      value: 'Parciales jugados'
    },
    {
      name: 'PG',
      value: 'Parciales ganados'
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className='pl-0 flex items-center gap-3'>
                  <span className='font-medium'>{index + 1}</span>
                  <div className='avatar'>
                    <div className='w-12 rounded-full'>
                      <Link
                        to={`/jugadores/${item.id}`}
                        className='hover:opacity-70 transition-all'
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          width='48'
                          height='48'
                        />
                      </Link>
                    </div>
                  </div>
                  <Link
                    to={`/jugadores/${item.id}`}
                    className='hover:text-primary font-medium'
                  >
                    {item.name}
                  </Link>
                </td>
                <td>{item.series_total}</td>
                <td>{item.series_won_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels.slice(1, labels.length)} />
    </section>
  )
}

export default TeamsPlayers

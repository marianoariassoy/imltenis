import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Labels from '../../components/Labels'
import Players from './Players'

const TournamentsGroup = ({ group }) => {
  const { data, loading } = useFetch(`/weekend/tournaments/groups/${group.id}/teams`)
  if (loading) return <Loader />

  const labels = [
    {
      name: 'Jugadores',
      value: ''
    },
    {
      name: 'Pts.',
      value: 'Encuenstros ganados'
    },
    {
      name: 'DS',
      value: 'Diferencia de sets'
    },
    {
      name: 'DG',
      value: 'Diferencia de games'
    },
    {
      name: 'EJ',
      value: 'Encuentros jugados'
    }
  ]

  return (
    <section className='flex flex-col gap-y-3 mb-3'>
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
              <tr
                key={item.id}
                className={`${index < group.winners ? 'text-primary' : ''}`}
              >
                <td>
                  <Players item={item} />
                </td>
                <td className='align-top'>
                  <span className='font-bold'>{item.matches_won}</span>
                </td>
                <td className='align-top'>{item.sets}</td>
                <td className='align-top'>{item.games}</td>
                <td className='align-top'>{item.matches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />
    </section>
  )
}

export default TournamentsGroup

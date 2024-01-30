import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Labels from '../../components/Labels'
import TitleRow from '../../components/TitleRow'

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
                <TitleRow
                  num={index + 1}
                  image={item.image}
                  title={item.name}
                  link={`/jugadores/${item.id}`}
                />
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

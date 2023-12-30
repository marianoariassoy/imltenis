import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const ClubesTeams = ({ club_id }) => {
  const { data, loading } = useFetch(`/clubes/${club_id}/teams`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='mb-14'>
      <h1 className='text-center text-primary font-bold mb-4'>Equipos</h1>

      <div className='overflow-x-auto text-sm mb-6'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Torneo</th>
              <th width='100'>Series</th>
              <th width='100'>Ganadas</th>
              <th width='100'>Parciales</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>
                  <Link
                    to={`/equipos/${item.id}`}
                    className='link-hover text-primary '
                  >
                    {item.name}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/torneos/${item.tournament_id}`}
                    className='hover:text-primary'
                  >
                    {item.tournament_name}
                  </Link>
                </td>
                <td>{item.series_total}</td>
                <td>{item.series_won}</td>
                <td>{item.match_won}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ClubesTeams

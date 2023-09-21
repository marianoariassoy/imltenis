import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Bull } from '../../icons/icons'
const TournamentsGroup = ({ group, tournament }) => {
  const { data, loading } = useFetch(`/groups/teams/${group.id}`)
  if (loading) return <Loader />

  return (
    <section id='grupo'>
      <div
        className='row text-center mb-4'
        id='presentacion'
      >
        <Link
          to={`/torneos/${tournament}/grupo/${group.id}`}
          className='text-primary italic text-xl link-hover'
        >
          {group.name}
        </Link>
        <h2 className='text-sm'>
          <span className='opacity-70 font-medium'>Posiciones</span> 💪
        </h2>
      </div>

      <div className='overflow-x-auto text-sm mb-6 fade-in'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th width='30'></th>
              <th className='pl-0'> </th>
              <th width='100'>SJ</th>
              <th width='100'>SG</th>
              <th width='100'>P</th>
              <th width='100'>DS</th>
              <th width='100'>DG</th>
              <th width='100'>Pts</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className='p-0 text-primary'>{index < group.winners && <Bull />}</td>
                <td className='pl-0 flex items-center gap-3'>
                  <span className='font-semibold'>{index + 1}</span>
                  <div className='avatar'>
                    <div className='w-11 rounded-full'>
                      <Link
                        to={`/equipos/${item.id}`}
                        className='hover:opacity-70'
                      >
                        <img
                          src={`https://imltenis.com.ar/images/${item.image ? item.image : item.club_image}`}
                          width='44'
                          height='44'
                          alt={item.name}
                        />
                      </Link>
                    </div>
                  </div>
                  <Link
                    to={`/equipos/${item.id}`}
                    className='hover:text-primary font-semibold'
                  >
                    {item.name}
                  </Link>
                </td>
                <td>{item.series_total}</td>
                <td>{item.series_won}</td>
                <td>{item.match_won}</td>
                <td>{item.sets}</td>
                <td>{item.games}</td>
                <td>
                  <span className='font-semibold'>{item.points}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className='text-center text-sm mb-10'
        id='info'
      >
        <p>
          <span className='opacity-70'>
            <strong>SJ:</strong> Series Jugadas <strong>SG:</strong> Series Ganadas <strong>P:</strong> Parciales
            Ganados <strong>DS:</strong> Diferencia de Sets <strong>DG:</strong> Diferencia de Games.
          </span>
        </p>
        <p>
          🔥 <span className='opacity-70'>{group.tournament_description}</span>
        </p>
      </div>
    </section>
  )
}

export default TournamentsGroup

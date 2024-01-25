import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Bull } from '../../icons/icons'
import Labels from '../../components/Labels'

const TournamentsGroup = ({ group, tournament }) => {
  const { data, loading } = useFetch(`/groups/teams/${group.id}`)
  if (loading) return <Loader />

  const labels = [
    {
      name: 'Equipo',
      value: ''
    },
    {
      name: 'Pts.',
      value: 'Puntos'
    },
    {
      name: 'SG',
      value: 'Series ganadas'
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
      name: 'SJ',
      value: 'Series jugadas'
    }
  ]

  return (
    <section className='fade-in flex flex-col'>
      <div className='row text-center mb-3'>
        <Link
          to={`/torneos/${tournament}/grupo/${group.id}`}
          className='text-primary italic link-hover lg:text-xl'
        >
          {group.name}
        </Link>
        <h2>
          <span className='font-medium opacity-70'>Posiciones</span> 🔥
        </h2>
      </div>

      <div className='overflow-x-auto text-sm mb-6'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th width='20'></th>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`font-semibold ${index < group.winners && 'text-primary'}`}
              >
                <td className='p-0 text-primary'>{index < group.winners && <Bull />}</td>
                <td className='pl-0 flex items-center gap-3'>
                  <span className='font-semibold'>{index + 1}</span>
                  <div className='avatar'>
                    <div className='w-10 rounded-full '>
                      <Link
                        to={`/equipos/${item.id}`}
                        className='hover:opacity-70 transition-all'
                      >
                        <img
                          src={`https://imltenis.com.ar/images/${item.image ? item.image : item.club_image}`}
                          width='40'
                          height='40'
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

                <td>
                  <span className='font-bold'>{item.match_won}</span>
                </td>
                <td>{item.series_won}</td>
                <td>{item.sets}</td>
                <td>{item.games}</td>
                <td>{item.series_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels.slice(1, labels.length)} />

      <div className='text-center text-sm mt-3'>
        🚀 <span className='opacity-70'>{group.tournament_description}</span>
      </div>
    </section>
  )
}

export default TournamentsGroup

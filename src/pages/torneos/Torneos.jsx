import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Torneos = () => {
  const { data, loading } = useFetch(`/tournaments`)
  if (loading) return <Loader />

  return (
    <>
      <Helmet>
        <title>IML Tenis Torneos</title>
      </Helmet>

      <section
        className='mb-8'
        id='presentacion'
      >
        <div className='text-center text-primary lg:text-xl'>
          <h1 className='font-bold'>Torneos</h1>
          🏆
        </div>
      </section>

      <section>
        <div className='overflow-x-auto text-sm'>
          <table className='table w-full text-center'>
            <tbody>
              {data &&
                data.map(item => (
                  <tr key={item.id}>
                    <td>
                      <Link
                        to={`/torneos/${item.id}`}
                        className='link-hover'
                      >
                        <span className='text-primary font-medium'>{item.name}</span> {item.season_name}
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Torneos

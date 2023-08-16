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
        <title>Torneos</title>
      </Helmet>

      <section
        className='mb-8'
        id='presentacion'
      >
        <div className='text-center text-primary text-xl'>
          <h1 className='font-bold '>Torneos</h1>
          <h1>🏆</h1>
        </div>
      </section>

      <section>
        <div className='overflow-x-auto text-sm'>
          <table className='table w-full'>
            <tbody>
              {data &&
                data.map(item => (
                  <tr key={item.id}>
                    <td>
                      <Link
                        to={`/torneos/${item.id}`}
                        className='link-hover text-primary'
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td>{item.season_name}</td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan='2'></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  )
}

export default Torneos

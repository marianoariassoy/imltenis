import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'

const index = () => {
  const { data, loading } = useFetch(`/players`)
  const [filterText, setFilterText] = useState('')

  if (loading) return <Loader />

  const handleFilterChange = event => {
    setFilterText(event.target.value)
  }

  const filteredPlayers = filterText
    ? data.filter(player => player.name.toLowerCase().includes(filterText.toLowerCase()))
    : []

  return (
    <section className='fade-in flex flex-col gap-y-8'>
      <div className='text-center text-xl'>
        <h1 className='font-bold text-primary'>Jugadores IML Tenis</h1>
        🧑‍🦰👩
      </div>

      <input
        type='text'
        placeholder='Buscar por nombre o apellido'
        value={filterText}
        onChange={handleFilterChange}
        className='input input-bordered w-full text-sm max-w-xl m-auto'
        id='search'
      />

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <tbody>
            {filteredPlayers.map(item => (
              <tr key={item.id}>
                <td className='pl-0 flex items-center gap-x-4'>
                  <div className='avatar'>
                    <div className='w-14 rounded-full'>
                      <Link
                        to={`/jugadores/${item.id}`}
                        className='hover:opacity-70 transition-all'
                      >
                        <img
                          src={`${item.image}`}
                          alt={item.name}
                          width='56'
                          height='56'
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Helmet>
        <title>IML Tenis Jugadores</title>
      </Helmet>
    </section>
  )
}

export default index

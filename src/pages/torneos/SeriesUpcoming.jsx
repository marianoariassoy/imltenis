import { Helmet } from 'react-helmet'
import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import FixtureUpcoming from './FixtureUpcoming'

const TournamentsCalendar = () => {
  const { data, loading } = useFetch(`/series/upcoming`)
  const [filterText, setFilterText] = useState('')

  if (loading) return <Loader />

  const handleFilterChange = event => {
    setFilterText(event.target.value)
  }

  const filteredData = filterText
    ? data.filter(
        item =>
          item.home_name.toLowerCase().includes(filterText.toLowerCase()) ||
          item.away_name.toLowerCase().includes(filterText.toLowerCase())
      )
    : data

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <h1 className='text-center text-primary text-xl font-bold'>Próximas Series ({filteredData.length})</h1>

      <input
        type='text'
        placeholder='Buscar equipo'
        value={filterText}
        onChange={handleFilterChange}
        className='input input-bordered w-full text-sm max-w-md mx-auto'
      />

      {data.length > 0 ? (
        <FixtureUpcoming data={filteredData} />
      ) : (
        <div className='text-center text-primary'>No hay próximas series</div>
      )}

      <Helmet>
        <title>IML Tenis - Próximas Series</title>
      </Helmet>
    </section>
  )
}

export default TournamentsCalendar

import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import Labels from '../../components/Labels'
import TitleRow from '../../components/TitleRow'
import Header from '../../components/Header'

const ClubesRanking = () => {
  const { data, loading } = useFetch(`/clubes/ranking/2024`)
  if (loading) return <Loader />

  const labels = [
    {
      name: 'Club',
      value: ''
    },
    {
      name: 'Pts.',
      value: 'Puntos (Parciales ganados)'
    },
    {
      name: 'SG',
      value: 'Series ganadas'
    },
    {
      name: 'SJ',
      value: 'Series jugadas'
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <Header
        title='Ranking de Clubes'
        description='Temporada 2024'
      />

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
                className={`${index === 0 && 'text-primary'}`}
              >
                <TitleRow
                  num={index + 1}
                  image={item.image}
                  title={item.name}
                  link={`/clubes/${item.id}`}
                />
                <td>
                  <span className='font-bold'>{item.matches_won}</span>
                </td>
                <td>{item.series_won}</td>
                <td>{item.series_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />

      <Helmet>
        <title>IML Tenis Ranking de Clubes</title>
      </Helmet>
    </section>
  )
}

export default ClubesRanking

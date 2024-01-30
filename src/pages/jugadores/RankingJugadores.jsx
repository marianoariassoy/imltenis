import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import Labels from '../../components/Labels'
import TitleRow from '../../components/TitleRow'

const JugadoresRanking = () => {
  const { data, loading, setLoading } = useFetch(`/players/ranking`)
  if (loading) return <Loader />

  const labels = [
    {
      name: 'Nombre',
      value: ''
    },
    {
      name: 'Pts.',
      value: 'Puntos'
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
      name: 'PJ',
      value: 'Parciales jugados'
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-center text-xl'>
        <h1 className='font-bold text-primary'>Ranking UrbanKicks</h1>
        <p className='text-base font-medium opacity-70'>Temporada 2023 / 2024</p>
        👑
      </div>

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
                  link={`/jugadores/${item.id}`}
                />
                <td>
                  <span className='font-bold'>{item.matches_won}</span>
                </td>
                <td>{item.sets}</td>
                <td>{item.games}</td>
                <td>{item.matches_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />

      <Helmet>
        <title>IML Tenis Ranking de Jugadores UrbanKicks</title>
      </Helmet>
    </section>
  )
}

export default JugadoresRanking

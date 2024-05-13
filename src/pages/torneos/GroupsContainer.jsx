import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import GroupsStage from './GroupsStage'
import Playoffs from './Playoffs'

const Tournaments = ({ id }) => {
  const { data, loading } = useFetch(`/tournaments/groups/${id}`)
  if (loading) return <Loader />
  if (!data) return null

  const groups = data.filter(item => +item.type === 0)
  const stage2 = data.filter(item => +item.type === 3)
  const playoffs = data.filter(item => +item.type === 1)

  return (
    <>
      {playoffs && <Playoffs playoffs={playoffs} />}

      {stage2.length > 0 && (
        <>
          <section className='pb-6 mb-6 border-b border-dotted border-white/20'>
            <GroupsStage groups={stage2} />
          </section>
          <h2 className='text-primary text-xl mb-3 text-center font-extrabold'>Primera Fase ⭐</h2>
        </>
      )}

      <GroupsStage groups={groups} />
    </>
  )
}

export default Tournaments

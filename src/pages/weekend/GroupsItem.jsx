import GroupsDetails from './GroupsDetails'
import Fixture from './Fixture'

const Tournaments = ({ data }) => {
  return (
    <section className='flex flex-col gap-y-3'>
      <GroupsDetails
        group={data}
        tournament={data.id}
      />

      <Fixture
        group_id={data.id}
        type={data.type}
      />
    </section>
  )
}

export default Tournaments

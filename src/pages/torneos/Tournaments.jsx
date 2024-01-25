import TournamentsGroup from './TournamentsGroup'
import TournamentsFixture from './TournamentsFixture'

const Tournaments = ({ data, tournament }) => {
  return (
    <>
      {data.type == 1 ? (
        <h2 className='italic text-primary text-center lg:text-xl -mb-3'>{data.name}</h2>
      ) : (
        <TournamentsGroup
          group={data}
          tournament={tournament}
        />
      )}

      <TournamentsFixture
        group_id={data.id}
        type={data.type}
      />
    </>
  )
}

export default Tournaments

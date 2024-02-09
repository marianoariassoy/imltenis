import Groups from './Groups'
import FixtureContainer from './FixtureContainer'

const Tournaments = ({ data, tournament }) => {
  return (
    <>
      {data.type == 1 ? (
        <h2 className='italic text-primary text-center lg:text-xl -mb-3'>{data.name}</h2>
      ) : (
        <Groups
          group={data}
          tournament={tournament}
        />
      )}

      <FixtureContainer
        group_id={data.id}
        type={data.type}
      />
    </>
  )
}

export default Tournaments

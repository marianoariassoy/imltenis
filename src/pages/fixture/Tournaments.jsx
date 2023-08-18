import TournamentsGroup from './TournamentsGroup'
import TournamentsFixture from './TournamentsFixture'

const Tournaments = ({ group_id, name, description, winners, type }) => {
  return (
    <>
      {type == 1 ? (
        <h2 className='italic text-primary text-center'>{name}</h2>
      ) : (
        <TournamentsGroup
          group_id={group_id}
          name={name}
          description={description}
          winners={winners}
        />
      )}

      <TournamentsFixture
        group_id={group_id}
        type={type}
      />
    </>
  )
}

export default Tournaments

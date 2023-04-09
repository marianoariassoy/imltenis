import TournamentsGroup from "./TournamentsGroup";
import TournamentsFixture from "./TournamentsFixture";

const Tournaments = ({ group_id, name, description, winners }) => {
  return (
    <>
      <TournamentsGroup group_id={group_id} name={name} description={description} winners={winners} />
      <TournamentsFixture group_id={group_id} />
    </>
  );
};

export default Tournaments;

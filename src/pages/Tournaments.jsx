import Group from "../components/Group";
import Fixture from "../components/Fixture";

const Tournaments = ({ group_id, name, description, winners }) => {
  return (
    <>
      <Group group_id={group_id} name={name} description={description} winners={winners} />
      <Fixture group_id={group_id} />
    </>
  );
};

export default Tournaments;

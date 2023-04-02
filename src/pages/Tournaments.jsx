import Group from "../components/Group";
import Fixture from "../components/Fixture";

const Tournaments = () => {
  return (
    <>
      <section id="presentacion">
        <div className="row text-center mb-8">
          <h1 className="text-2xl font-bold text-error mb-2">Segunda Libre Apertura 2023</h1>
          <h1 className="text-3xl text-center">🏆</h1>
        </div>
      </section>

      <Group />
      <Fixture />
    </>
  );
};

export default Tournaments;

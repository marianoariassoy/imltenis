import { Helmet } from "react-helmet";
import Group from "../components/Group";
import Fixture from "../components/Fixture";

const Tournaments = () => {
  return (
    <>
      <Helmet>
        <title>Cuarta Libre Apertura 2023</title>
        <meta name="description" content="IML Tenis categoría Cuarta Libre Apertura 2023" />
        <meta property="og:title" content="IML Tenis" />
        <meta property="og:url" content="https://imltenis.com.ar/torneos/1" />
        <meta property="og:image" content="https://imltenis.com.ar/fixture/assets/iml.jpg" />
        <meta property="og:image:alt" content="IML Tenis" />
      </Helmet>

      <section id="presentacion">
        <div className="row text-center mb-8">
          <h1 className="text-2xl text-error mb-1">
            <span className="font-bold">Segunda Libre</span> Apertura 2023
          </h1>
          <h1 className="text-3xl text-center">🏆</h1>
        </div>
      </section>
      <Group />
      <Fixture />
    </>
  );
};

export default Tournaments;

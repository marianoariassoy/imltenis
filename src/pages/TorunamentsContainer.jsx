import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import BeatLoader from "react-spinners/BeatLoader";
import Tournaments from "./Tournaments";
import useFetch from "../hooks/useFetch";

const TournamentsContainer = () => {
  let { id } = useParams();

  const { data, loading, error } = useFetch(`http://localhost/sites/imlfixture/API/tournaments/groups/${id}`);

  if (loading) return <BeatLoader />;

  if (error) {
    return <div>Ha ocurrido un error: {error.message}</div>;
  }

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
            <span className="font-bold">{data[0].tournament_name}</span> {data[0].season_name}
          </h1>
          <h1 className="text-3xl text-center">🏆</h1>
        </div>
      </section>

      {data.map((item) => (
        <Tournaments key={item.id} group_id={item.id} name={item.name} description={item.tournament_description} winners={item.winners} />
      ))}
    </>
  );
};

export default TournamentsContainer;

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import JugadoresSingles from "./JugadoresSingles";
import JugadoresDobles from "./JugadoresDobles";
import JugadoresEquipos from "./JugadoresEquipos";

const JugadoresContainer = () => {
  let { id } = useParams();
  const { data, loading, error } = useFetch(`https://imltenis.com.ar/fixture/api/players/${id}`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;

  let player_name = data[0].name;
  let meta_description = `Estadísticas e historial de ${player_name} en la liga IML Tenis`;

  return (
    <>
      <Helmet>
        <title>{player_name}</title>
        <meta name="description" content={meta_description} />
        <meta property="og:title" content={player_name} />
        <meta property="og:url" content={`https://imltenis.com.ar/fixture/jugadores/${id}`} />
        <meta property="og:description" content={meta_description} />
        <meta property="og:image" content={`https://imltenis.com.ar/fixture/images/${data[0].image}`} />
        <meta property="og:image:alt" content={player_name} />
        <link rel="canonical" href={`https://imltenis.com.ar/fixture/jugadores/${id}`} />
      </Helmet>

      <section className="mb-6" id="presentacion">
        <div className="row text-center mb-6">
          <div className="avatar mb-3">
            <div className="w-32 rounded-full bg-base-300">
              <img src={data[0].image} />
            </div>
          </div>
          <h1 className="text-xl font-bold text-error">{player_name}</h1>
          <h2 className="text-gray-500">{data[0].age}</h2>
        </div>
      </section>

      <section>
        <h1 className="text-xl font-semibold text-error text-center mb-6">Historial 👈</h1>
      </section>

      <JugadoresSingles player_id={data[0].id} />
      <JugadoresDobles player_id={data[0].id} />
      <JugadoresEquipos player_id={data[0].id} />
    </>
  );
};

export default JugadoresContainer;

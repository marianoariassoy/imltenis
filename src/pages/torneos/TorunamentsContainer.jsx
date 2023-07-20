import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import Tournaments from "./Tournaments";
import TornamentsChampion from "./TornamentsChampion";

const TournamentsContainer = () => {
  let { id } = useParams();
  const { data: dataTournament, loading: loadingTournament } = useFetch(`/tournaments/${id}`);
  const { data, loading, error } = useFetch(`/tournaments/groups/${id}`);

  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;
  if (!data) return <Navigate to="/404" />;
  if (loadingTournament) return <Loader />;

  let meta_title = dataTournament[0].name + " " + dataTournament[0].season;
  let meta_description = `IML Tenis ${meta_title}`;

  return (
    <>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
        <meta property="og:title" content={meta_title} />
        <meta property="og:url" content={`https://imltenis.com.ar/torneos/${id}`} />
        <meta property="og:description" content={meta_description} />
        <meta property="og:image" content="https://imltenis.com.ar/assets/iml.jpg" />
        <meta property="og:image:alt" content="IML Tenis" />
        <link rel="canonical" href={`https://imltenis.com.ar/torneos/${id}`} />
      </Helmet>

      <section id="presentacion">
        <div className="row text-center text-xl mb-6">
          <h1 className="text-error mb-1">
            <span className="font-bold">{dataTournament[0].name}</span>
            {/* {dataTournament[0].season} */}
          </h1>
          <h1>🏆</h1>
        </div>
      </section>

      {dataTournament[0].team_champion && <TornamentsChampion data={dataTournament} />}

      {data.map((item) => (
        <Tournaments key={item.id} group_id={item.id} name={item.name} description={item.tournament_description} winners={item.winners} type={item.type} />
      ))}
    </>
  );
};

export default TournamentsContainer;

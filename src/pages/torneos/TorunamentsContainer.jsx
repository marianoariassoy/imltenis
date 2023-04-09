import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "../../components/Loader";
import Tournaments from "./Tournaments";
import useFetch from "../../hooks/useFetch";

const TournamentsContainer = () => {
  let { id } = useParams();
  const { data, loading, error } = useFetch(`/tournaments/groups/${id}`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;
  if (!data) return <Navigate to="/404" />;

  let meta_title = data[0].tournament_name + " " + data[0].season_name;
  let meta_description = `Liga IML Tenis categoría ${meta_title}`;

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
        <div className="row text-center mb-6">
          <h1 className="text-2xl text-error mb-1">
            <span className="font-bold">{data[0].tournament_name}</span> <span className="hidden md:inline">{data[0].season_name}</span>
          </h1>
          <h1 className="text-2xl text-center">🏆</h1>
        </div>
      </section>

      {data.map((item) => (
        <Tournaments key={item.id} group_id={item.id} name={item.name} description={item.tournament_description} winners={item.winners} />
      ))}
    </>
  );
};

export default TournamentsContainer;

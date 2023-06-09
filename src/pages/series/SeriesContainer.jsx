import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import SeriesMatches from "./SeriesMatches";

const Series = () => {
  let { id } = useParams();
  const { data, loading, error } = useFetch(`/series/${id}`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;
  if (!data) return <Navigate to="/404" />;

  let title = data[0].date + " " + data[0].hour;
  let description = `Serie disputada el ${title} en la liga IML Tenis`;

  return (
    <>
      <Helmet>
        <title>Serie {title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`Serie ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://imltenis.com.ar/series/${id}`} />
        <meta property="og:image" content="https://imltenis.com.ar/assets/iml.jpg" />
        <meta property="og:image:alt" content="IML Tenis" />
        <link rel="canonical" href={`https://imltenis.com.ar/series/${id}`} />
      </Helmet>

      <section id="presentacion">
        <div className="row text-center mb-12">
          <h1 className="text-xl font-semibold text-error">{title}</h1>
          <h2 className="font-semibold">
            <Link to={`/torneos/${data[0].tournament_id}`} className="link-hover text-gray-500">
              {data[0].tournament_name}
            </Link>
          </h2>
        </div>
      </section>

      <section id="score">
        <div className="row flex justify-center mb-8">
          <div className="flex text-center w-full max-w-sm">
            <div className="flex flex-col items-center w-2/5 text-gray-500">
              <div className="avatar mb-3">
                <div className="w-20 rounded-full">
                  <Link to={`/equipos/${data[0].home_id}`} className="hover:opacity-70">
                    <img src={data[0].home_image} width="80" height="80" alt={data[0].home_name} />
                  </Link>
                </div>
              </div>
              <Link to={`/equipos/${data[0].home_id}`} className="link-hover link-error font-semibold">
                {data[0].home_name}
              </Link>
              Local
            </div>
            <div className="w-1/5 flex items-center justify-center">
              {data[0].winner > 0 ? (
                <h1 className="text-xl font-semibold">
                  Score
                  <br />
                  {data[0].score}
                </h1>
              ) : (
                <h1 className="text-xl font-semibold">Vs.</h1>
              )}
            </div>
            <div className="flex flex-col items-center w-2/5 text-gray-500">
              <div className="avatar mb-3">
                <div className="w-20 rounded-full">
                  <Link to={`/equipos/${data[0].away_id}`} className="hover:opacity-70">
                    <img src={data[0].away_image} width="80" height="80" alt={data[0].away_name} />
                  </Link>
                </div>
              </div>
              <Link to={`/equipos/${data[0].away_id}`} className="link-hover link-error font-semibold">
                {data[0].away_name}
              </Link>
              Visitante
            </div>
          </div>
        </div>
      </section>
      {data[0].winner > 0 && <SeriesMatches serie_id={id} />}
    </>
  );
};

export default Series;

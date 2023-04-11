import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import ClubesTeams from "./ClubesTeams";

const ClubesContainer = () => {
  let { id } = useParams();
  const { data, loading, error } = useFetch(`/clubes/${id}`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;
  if (!data) return <Navigate to="/404" />;

  const club_name = data[0].name + " IML Tenis";

  return (
    <>
      <Helmet>
        <title>{club_name}</title>
        <meta name="description" content={`Equipos participantes e información de ${club_name}`} />
        <meta property="og:title" content={club_name} />
        <meta property="og:url" content={`https://imltenis.com.ar/clubes/${id}`} />
        <meta property="og:description" content={`Equipos e información de ${club_name}`} />
        <meta property="og:image" content={data[0].image} />
        <meta property="og:image:alt" content={club_name} />
        <link rel="canonical" href={`https://imltenis.com.ar/clubes/${id}`} />
      </Helmet>

      <section className="">
        <div className="hero h-96" style={{ backgroundImage: `url("${data[0].bgimage}")` }}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="row text-center text-white">
                <div className="avatar">
                  <div className="w-32 rounded-full">
                    <img src={data[0].image} />
                  </div>
                </div>
                <h1 className="text-xl font-bold ">{data[0].name}</h1>
                <p>
                  <span className="font-semibold">
                    {data[0].location}&nbsp; Tel. {data[0].phone}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 ">
        <iframe src={data[0].googlemaps} width="100%" height="384" allowFullScreen="" style={{ border: 0 }} aria-hidden="false" tabIndex="0"></iframe>
      </section>

      <ClubesTeams club_id={id} />
    </>
  );
};

export default ClubesContainer;

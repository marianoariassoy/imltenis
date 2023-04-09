import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";

const JugadoresRanking = () => {
  const { data, loading, error } = useFetch(`https://imltenis.com.ar/fixture/api/players/ranking`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;

  return (
    <>
      <Helmet>
        <title>Ranking de jugadores Apertura 2023</title>
        <meta name="description" content="Ranking de jugadores de la liga IML Tenis Apertura 2023" />
        <meta property="og:title" content="Ranking de jugadores Apertura 2023" />
        <meta property="og:url" content="https://imltenis.com.ar/jugadores/ranking" />
        <meta property="og:image" content="https://imltenis.com.ar/fixture/assets/iml.jpg" />
        <meta property="og:image:alt" content="IML Tenis" />
        <link rel="canonical" href="https://imltenis.com.ar" />
      </Helmet>

      <section id="presentacion">
        <div className="row text-center mb-6">
          <h1 className="text-2xl font-bold text-error mb-1">Ranking de Jugadores</h1>
          <h1 className="text-2xl  mb-1">Apertura 2023</h1>
          <h1 className="text-2xl">🥇</h1>
        </div>
      </section>

      <section id="grupo">
        <div className="overflow-x-auto mb-6">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th className="pl-0">Nombre</th>
                <th>Equipo</th>
                <th>Torneo</th>
                <th width="100">Series</th>
                <th width="100">Ganadas</th>
                <th width="100">Dif. Sets</th>
                <th width="100">Dif. Games</th>
                <th width="100">#</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td className="p-0">
                    {index === 0 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="8" fill="#f34643" className="inline ml-2">
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                  <td className="pl-0">
                    <div className="flex items-center">
                      <div className="avatar mr-3">
                        <div className="w-9 rounded-full">
                          <Link to={`/jugadores/${item.id}`} className="hover:opacity-70">
                            <img src={`${item.image}`} />
                          </Link>
                        </div>
                      </div>
                      <Link to={`/jugadores/${item.id}`} className="link-hover font-semibold">
                        {item.name}
                      </Link>
                    </div>
                  </td>
                  <td>
                    <Link to={`/equipos/${item.team_id}`} className="link-hover">
                      {item.team_name}
                    </Link>
                  </td>
                  <td>
                    <a href={`/torneos/${item.tournament_id}`} className="link-hover">
                      {item.tournament_name}
                    </a>
                  </td>
                  <td>{item.matches_total}</td>
                  <td>{item.matches_won}</td>
                  <td>{item.sets}</td>
                  <td>{item.games}</td>
                  <td>
                    <span className={`font-semibold ${index === 0 ? "text-primary" : ""}`}>{index + 1}</span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="8"></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};

export default JugadoresRanking;

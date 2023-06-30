import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";

const JugadoresRanking = () => {
  const [filters, setFilters] = useState(0);
  const { data, loading, error } = useFetch(`/players/ranking`);

  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;

  const filterData = (data) => {
    return data.filter((item) => {
      return +item.tournament_id === filters || filters === 0;
    });
  };

  const filteredData = filterData(data);

  const filterRanking = (e, num) => {
    setFilters(num);
    const btns = document.querySelectorAll(".btn-filter");
    btns.forEach((item) => item.classList.remove("text-primary"));
    e.target.classList.add("text-primary");
  };

  return (
    <>
      <Helmet>
        <title>Ranking Urban Kicks Jugadores</title>
        <meta name="description" content="Ranking Urban Kicks JugadoresApertura 2023" />
        <meta property="og:title" content="Ranking Urban Kicks Jugadores" />
        <meta property="og:url" content="https://imltenis.com.ar/jugadores/ranking" />
        <meta property="og:image" content="https://imltenis.com.ar/assets/iml.jpg" />
        <meta property="og:image:alt" content="IML Tenis" />
        <link rel="canonical" href="https://imltenis.com.ar/jugadores/ranking" />
      </Helmet>

      <section id="presentacion">
        <div className="row text-center mb-6">
          <h1 className="text-xl font-bold text-error">Ranking Urban Kicks</h1>
          <h1 className="text-medium text-gray-500">Apertura 2023</h1>
          <h1>👑</h1>
        </div>
      </section>

      <section id="filtros">
        <div className="row flex gap-4 justify-center mb-6 text-gray-500">
          <button className="btn-filter text-primary" onClick={(e) => filterRanking(e, 0)}>
            Todos
          </button>
          <button className="btn-filter" onClick={(e) => filterRanking(e, 15)}>
            1era
          </button>
          <button className="btn-filter" onClick={(e) => filterRanking(e, 14)}>
            2da
          </button>
          <button className="btn-filter" onClick={(e) => filterRanking(e, 13)}>
            3ra
          </button>
          <button className="btn-filter" onClick={(e) => filterRanking(e, 12)}>
            4ta
          </button>
        </div>
      </section>

      <section className="mb-12" id="grupo">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th width="30"></th>
                <th className="pl-0">Nombre</th>
                <th>Equipo</th>
                <th>Torneo</th>
                <th width="100">PJ</th>
                <th width="100">PG</th>
                <th width="100">DS</th>
                <th width="100">DG</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={item.id} className={`font-semibold ${index === 0 ? "text-primary" : ""}`}>
                  <td className="p-0">
                    {index === 0 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="8" fill="#f34643" className="inline ml-2">
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                  <td className="pl-0 flex items-center gap-3">
                    <span className="font-semibold">{index + 1}</span>
                    <div className="avatar">
                      <div className="w-9 rounded-full">
                        <Link to={`/jugadores/${item.id}`} className="hover:opacity-70">
                          <img src={`${item.image}`} alt={item.name} width="36" height="36" />
                        </Link>
                      </div>
                    </div>
                    <Link to={`/jugadores/${item.id}`} className="link-hover font-semibold">
                      {item.name}
                    </Link>
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

        <div className="row flex justify-center w-100 mb-4 text-gray-500 text-sm">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6 text-error">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <strong>PJ:</strong> Parciales Jugados <strong>PG:</strong> Parciales Ganados <strong>DS:</strong> Diferencia de Sets <strong>DG:</strong> Diferencia de Games
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JugadoresRanking;

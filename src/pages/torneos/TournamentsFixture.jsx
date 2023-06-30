import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";

const TournamentsFixture = ({ group_id, type }) => {
  const [filters, setFilters] = useState("all");
  const { data, loading, error } = useFetch(`/groups/series/${group_id}`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;

  const filterData = (data) => {
    return data.filter((item) => {
      return item.winner === filters || filters === "all";
    });
  };

  const filteredData = filterData(data);

  const handlerFilter = (e, filter) => {
    setFilters(filter);
    const btns = document.querySelectorAll(".btn-filter");
    btns.forEach((item) => item.classList.remove("text-primary"));
    e.target.classList.add("text-primary");
  };

  return (
    <section className="mb-12" id="fixture">
      <div className="row text-center mb-6">
        {type != 1 && (
          <a href="#" className="font-bold link-hover link-error">
            Fixture 👈
          </a>
        )}
      </div>

      {type != 1 && (
        <div id="filtros">
          <div className="row flex gap-4 justify-center mb-6 text-gray-500">
            <button className="btn-filter text-primary" onClick={(e) => handlerFilter(e, "all")}>
              Todos
            </button>
            <button className="btn-filter" onClick={(e) => handlerFilter(e, false)}>
              Por Jugar
            </button>
            <button className="btn-filter" onClick={(e) => handlerFilter(e, true)}>
              Jugados
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th width="30"></th>
              <th className="pl-0" width="30">
                Fecha
              </th>
              <th width="30">Hora</th>
              <th width="308">Local</th>
              <th className="text-center">Score</th>
              <th width="308">Visitante</th>
              <th>Serie</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className={item.winner ? "opacity-50" : ""}>
                <td className="p-0">
                  {item.winner ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="8" fill="#666" className="inline ml-2">
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                    </svg>
                  ) : (
                    ""
                  )}
                </td>
                <td className="pl-0">
                  <span className="font-semibold">{item.date}</span>
                </td>
                <td>{item.hour}</td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar mr-4">
                      <div className="w-9 rounded-full">
                        <Link to={`/equipos/${item.home_id}`} className="hover:opacity-70">
                          <img src={item.home_image} width="36" height="36" alt={item.home_name} />
                        </Link>
                      </div>
                    </div>
                    <Link to={`/equipos/${item.home_id}`} className="link-hover font-semibold">
                      {item.home_name}
                    </Link>
                  </div>
                </td>
                <td className="text-center">
                  <Link to={`/series/${item.id}`} className="link-hover mr-1 font-semibold">
                    {item.score_home}-{item.score_away}
                  </Link>
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar mr-4">
                      <div className="w-9 rounded-full">
                        <Link to={`/equipos/${item.away_id}`} className="hover:opacity-70">
                          <img src={item.away_image} width="36" height="36" alt={item.away_name} />
                        </Link>
                      </div>
                    </div>
                    <Link to={`/equipos/${item.away_id}`} className="link-hover font-semibold">
                      {item.away_name}
                    </Link>
                  </div>
                </td>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="6"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default TournamentsFixture;

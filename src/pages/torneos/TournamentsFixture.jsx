import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";

const TournamentsFixture = ({ group_id }) => {
  const { data, loading, error } = useFetch(`https://imltenis.com.ar/fixture/api/groups/series/${group_id}`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;

  return (
    <section id="fixture">
      <div className="row text-center mb-6">
        <h1>
          <a href="#" className="text-2xl font-semibold link-hover link-error">
            Fixture 👈
          </a>
        </h1>
      </div>
      <div className="overflow-x-auto mb-12">
        <table className="table w-full">
          <thead>
            <tr>
              <th width="60">Fecha</th>
              <th>Hora</th>
              <th>Local</th>
              <th>Score</th>
              <th>Visitante</th>
              <th>Serie</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className={item.winner ? " " : "opacity-50"}>
                <td>
                  <span className="font-semibold">{item.date}</span>
                </td>
                <td>{item.hour}</td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar mr-4">
                      <div className="w-9 rounded-full">
                        <Link to={`/equipos/${item.home_id}`} className="hover:opacity-70">
                          <img src={item.home_image} />
                        </Link>
                      </div>
                    </div>
                    <Link to={`/equipos/${item.home_id}`} className="link-hover font-semibold">
                      {item.home_name}
                    </Link>
                  </div>
                </td>
                <td>
                  <Link to={`/series/${item.id}`} className="link-hover mr-1 font-semibold">
                    {item.score_home}-{item.score_away}
                  </Link>
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar mr-4">
                      <div className="w-9 rounded-full">
                        <Link to={`/equipos/${item.away_id}`} className="hover:opacity-70">
                          <img src={item.away_image} />
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

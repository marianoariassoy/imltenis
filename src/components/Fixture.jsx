import { Link } from "react-router-dom";
import dayjs from "dayjs";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";

const Fixture = ({ group_id }) => {
  const { data, loading, error } = useFetch(`https://imltenis.com.ar/fixture/api/groups/series/${group_id}`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;

  const date = (date) => {
    return dayjs.unix(date).format("DD.MM");
  };

  console.log(data);
  return (
    <section id="fixture">
      <div className="row text-center mb-6">
        <h1>
          <a href="#" className="text-xl md:text-2xl font-bold link-hover link-error">
            Fixture 👈
          </a>
        </h1>
      </div>
      <div className="overflow-x-auto mb-12">
        <table className="table w-full">
          <thead>
            <tr>
              <th width="80">Fecha</th>
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
                  <span className="font-semibold">{date(item.date)}</span>
                </td>
                <td>{item.hour}</td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar mr-4">
                      <div className="w-8 rounded-full">
                        <Link to={`/equipos/${item.home}`} className="hover:opacity-70">
                          <img src={`https://imltenis.com.ar/fixture/images/${item.home_image}`} />
                        </Link>
                      </div>
                    </div>
                    <Link to={`/equipos/${item.home}`} className="link-hover font-semibold">
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
                      <div className="w-8 rounded-full">
                        <Link to={`/equipos/${item.away}`} className="hover:opacity-70">
                          <img src={`https://imltenis.com.ar/fixture/images/${item.away_image}`} />
                        </Link>
                      </div>
                    </div>
                    <Link to={`/equipos/${item.away}`} className="link-hover font-semibold">
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

export default Fixture;

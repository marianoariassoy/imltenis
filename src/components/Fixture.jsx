//Dependencies
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import useFetch from "../hooks/useFetch";
import BeatLoader from "react-spinners/BeatLoader";

const Fixture = ({ group_id }) => {
  const { data, loading, error } = useFetch(`http://localhost/sites/imlfixture/API/groups/series/${group_id}`);

  if (loading) return <BeatLoader />;

  if (error) {
    return <div>Ha ocurrido un error: {error.message}</div>;
  }

  const date = (date) => {
    return dayjs.unix(date).format("DD.MM");
  };

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
              <tr key={item.id} className={item.winner ? "text-primary" : ""}>
                <td>
                  <span className="font-semibold">{date(item.date)}</span>
                </td>
                <td>{item.hour}</td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar mr-4">
                      <div className="w-8 rounded-full">
                        <Link to={`/equipos/${item.home}`} className="hover:opacity-70">
                          <img src="../assets/images/test.jpg" />
                        </Link>
                      </div>
                    </div>
                    <Link to={`/equipos/${item.home}`} className="link-hover font-semibold">
                      {item.home}
                    </Link>
                  </div>
                </td>
                <td>
                  <Link to={`/series/${item.id}`} className="link-hover mr-1 font-semibold">
                    0-0
                  </Link>
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar mr-4">
                      <div className="w-8 rounded-full">
                        <Link to={`/equipos/${item.away}`} className="hover:opacity-70">
                          <img src="../assets/images/test.jpg" />
                        </Link>
                      </div>
                    </div>
                    <Link to={`/equipos/${item.away}`} className="link-hover font-semibold">
                      {item.away}
                    </Link>
                  </div>
                </td>
                <td>1{item.id}</td>
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

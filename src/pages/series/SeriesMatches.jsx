import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const SeriesMatches = ({ serie_id }) => {
  const { data, loading, error } = useFetch(`https://imltenis.com.ar/fixture/api/series/${serie_id}/matches`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;
  if (!data) return null;

  return (
    <section id="serie">
      <div className="overflow-x-auto mb-12">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Partido</th>
              <th>Enfrentamiento</th>
              <th>Score</th>
              <th>Ganador</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <span className="font-semibold">{item.type}</span>
                </td>
                <td>
                  <Link to={`/jugadores/${item.playerhome1_id}`} className="link-error link-hover font-semibold">
                    {item.playerhome1_name}
                  </Link>
                  {item.playerhome2_id > 0 ? " y " : ""}
                  <Link to={`/jugadores/${item.playerhome2_id}`} className="link-error link-hover font-semibold">
                    {item.playerhome2_name}
                  </Link>
                  &nbsp;vs.&nbsp;
                  <Link to={`/jugadores/${item.playeraway1_id}`} className="link-error link-hover font-semibold">
                    {item.playeraway1_name}
                  </Link>
                  {item.playeraway2_id > 0 ? " y " : ""}
                  <Link to={`/jugadores/${item.playeraway2_id}`} className="link-error link-hover font-semibold">
                    {item.playeraway2_name}
                  </Link>
                </td>
                <td>{item.score}</td>
                <td>
                  <span className="circle text-primary">{item.result}</span>
                </td>
                <td>
                  <div className="badge">{item.status}</div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="5"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default SeriesMatches;

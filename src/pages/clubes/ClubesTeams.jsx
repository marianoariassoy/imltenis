import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const ClubesTeams = ({ club_id }) => {
  const { data, loading, error } = useFetch(`/clubes/${club_id}/teams`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;
  if (!data) return null;
  return (
    <section className="mb-12">
      <div className="container mx-auto max-w-6xl mb-3">
        <div className="row text-center mb-6">
          <h1 className="text-error text-xl font-bold">Equipos</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Torneo</th>
                <th width="100">Series</th>
                <th width="100">Ganadas</th>
                <th width="100">Parciales</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link to={`/equipos/${item.id}`} className="link-hover link-error font-semibold">
                      {item.name}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/torneos/${item.tournament_id}`} className="link-hover">
                      {item.tournament_name}
                    </Link>
                  </td>
                  <td>{item.series_total}</td>
                  <td>{item.series_won}</td>
                  <td>{item.match_won}</td>
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
      </div>
    </section>
  );
};

export default ClubesTeams;

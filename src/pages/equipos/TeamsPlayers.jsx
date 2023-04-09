import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const TeamsPlayers = ({ team_id }) => {
  const { data, loading, error } = useFetch(`/teams/${team_id}/players`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;
  if (!data) return null;

  return (
    <section id="lista">
      <div className="overflow-x-auto mb-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Nombre y Apellido</th>
              <th>Jugados</th>
              <th>Ganados</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <div className="flex items-center">
                    <div className="avatar mr-3">
                      <div className="w-9 rounded-full">
                        <Link to={`/jugadores/${item.id}`} className="hover:opacity-70">
                          <img src={item.image} />
                        </Link>
                      </div>
                    </div>
                    <Link to={`/jugadores/${item.id}`} className="link-hover font-semibold">
                      {item.name}
                    </Link>
                  </div>
                </td>
                <td>{item.series_total}</td>
                <td>{item.series_won_total}</td>
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

export default TeamsPlayers;

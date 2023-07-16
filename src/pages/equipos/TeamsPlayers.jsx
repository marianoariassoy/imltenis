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
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Nombre y Apellido</th>
              <th>P</th>
              <th>PG</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className="pl-0 flex items-center gap-3">
                  <span className="font-semibold">{index + 1}</span>
                  <div className="avatar">
                    <div className="w-9 rounded-full">
                      <Link to={`/jugadores/${item.id}`} className="hover:opacity-70">
                        <img src={item.image} alt={item.name} width="36" height="36" />
                      </Link>
                    </div>
                  </div>
                  <Link to={`/jugadores/${item.id}`} className="link-hover">
                    {item.name}
                  </Link>
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

      <div className="row flex justify-center w-100 text-gray-500 text-sm mb-10">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6 text-error">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <strong>P:</strong> Parciales Jugados <strong>PG:</strong> Parciales Ganados
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsPlayers;

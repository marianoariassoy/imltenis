import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const JugadoresEquipos = ({ player_id }) => {
  const { data, loading, error } = useFetch(`/players/${player_id}/teams`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;
  if (!data) return null;

  return (
    <section className="mb-12" id="equipos">
      <h1 className="text-center mb-3 font-semibold">Equipos Integrados</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Club</th>
              <th>Competencia</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="flex items-center">
                    <div className="avatar mr-4">
                      <div className="w-9 rounded-full">
                        <Link to={`/equipos/${item.team_id}`} className="hover:opacity-70">
                          <img src={item.image} width="36" height="36" alt={item.team_name} />
                        </Link>
                      </div>
                    </div>
                    <Link to={`/equipos/${item.team_id}`} className="link-hover font-medium">
                      {item.team_name}
                    </Link>
                  </div>
                </td>
                <td>
                  <Link to={`/clubes/${item.club_id}`} className="link-hover">
                    {item.club_name}
                  </Link>
                </td>
                <td>
                  <Link to={`/torneos/${item.tournament_id}`} className="link-hover link-error">
                    {item.tournament_name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default JugadoresEquipos;

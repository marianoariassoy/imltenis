import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const TournamentsGroup = ({ group_id, name, description, winners }) => {
  const { data, loading, error } = useFetch(`/groups/teams/${group_id}`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;

  return (
    <section id="grupo">
      <div className="row text-center mb-4" id="presentacion">
        <h1 className="font-semibold text-primary text-xl">{name}</h1>
        <h2 className="text-gray-500">Posiciones 💪</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th width="30"></th>
              <th className="pl-0">Equipo</th>
              <th width="100">SJ</th>
              <th width="100">SG</th>
              <th width="100">P</th>
              <th width="100">DS</th>
              <th width="100">DG</th>
              <th width="100">Pts</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className={` ${index < winners ? "text-primary" : ""} `}>
                <td className="p-0">
                  {index < winners && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="8" fill="#f34643" className="inline ml-2">
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                    </svg>
                  )}
                </td>
                <td className="pl-0 flex items-center gap-3">
                  <span className="font-semibold">{index + 1}</span>
                  <div className="avatar">
                    <div className="w-9 rounded-full">
                      <Link to={`/equipos/${item.id}`} className="hover:opacity-70">
                        <img src={`https://imltenis.com.ar/fixture/images/${item.image ? item.image : item.club_image}`} width="36" height="36" alt={item.name} />
                      </Link>
                    </div>
                  </div>
                  <Link to={`/equipos/${item.id}`} className="link-hover font-semibold">
                    {item.name}
                  </Link>
                </td>
                <td>{item.series_total}</td>
                <td>{item.series_won}</td>
                <td>{item.match_won}</td>
                <td>{item.sets}</td>
                <td>{item.games}</td>
                <td>
                  <span className="font-semibold">{item.points}</span>
                </td>
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

      <div className="text-center w-100 text-gray-500 mb-2 text-sm">
        <strong>SJ:</strong> Series Jugadas <strong>SG:</strong> Series Ganadas <strong>P:</strong> Parciales Ganados <strong>DS:</strong> Diferencia de Sets <strong>DG:</strong> Diferencia de Games
      </div>

      <div className="text-center w-100 text-gray-500 mb-10 text-sm">🥇 {description}</div>
    </section>
  );
};

export default TournamentsGroup;

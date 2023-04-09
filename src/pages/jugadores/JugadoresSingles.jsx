import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const JugadoresSingles = ({ player_id }) => {
  const { data, loading, error } = useFetch(`https://imltenis.com.ar/fixture/api/players/${player_id}/singles`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;
  if (!data) return null;

  console.log(data);
  return (
    <section id="lista-single">
      <h1 className="text-center mb-3 font-semibold">Singles</h1>

      <div className="overflow-x-auto mb-3">
        <table className="table w-full">
          <thead>
            <tr>
              <th width="50">Fecha</th>
              <th>Oponente</th>
              <th>Resultado</th>
              <th>G/P</th>
              <th>Torneo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <span className="font-semibold">{item.date}</span>
                </td>
                <td>
                  <Link to={`/jugadores/${item.oponent_id}`} className="link-hover link-error font-semibold">
                    {item.oponent_name}
                  </Link>
                  &nbsp;(
                  <Link to={`/equipos/${item.team_oponent_id}`} className="link-hover">
                    {item.team_oponent_name}
                  </Link>
                  )
                </td>
                <td>{item.score}</td>
                <td>
                  <span className="circle text-primary">{item.result}</span>
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
              <th colSpan="5"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default JugadoresSingles;

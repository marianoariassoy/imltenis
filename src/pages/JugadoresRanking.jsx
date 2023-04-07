import { Link } from "react-router-dom";

const JugadoresRanking = () => {
  return (
    <>
      <section id="presentacion">
        <div className="row text-center mb-6">
          <h1 className="text-2xl font-bold text-error mb-1">Ranking de Jugadores</h1>
          <h1 className="text-2xl  mb-1">Apertura 2023</h1>
          <h1 className="text-2xl">🥇</h1>
        </div>
      </section>

      <section id="grupo">
        <div className="overflow-x-auto mb-6">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Equipo</th>
                <th>Torneo</th>
                <th width="100">Series</th>
                <th width="100">Ganadas</th>
                <th width="100">Dif. Sets</th>
                <th width="100">Dif. Games</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="font-semibold">1</span>
                </td>
                <td>
                  <Link to="/jugadores/1" className="link-hover font-semibold text-primary">
                    Juan Perez
                  </Link>
                </td>
                <td>
                  <Link to="/equipos/1" className="link-hover">
                    San Miguel
                  </Link>
                </td>
                <td>
                  <a href="/torneos/1" className="link-hover">
                    Cuarta Libre
                  </a>
                </td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="8"></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};

export default JugadoresRanking;

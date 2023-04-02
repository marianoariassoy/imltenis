//Dependencies
import { Link } from "react-router-dom";

const Jugadores = () => {
  return (
    <>
      <section id="presentacion">
        <div className="row text-center mb-12">
          <h1 className="text-2xl font-bold text-error">Juan Perez</h1>
        </div>
      </section>

      <section id="lista-single">
        <div className="row text-center mb-3">
          <h1 className="text-2xl font-bold text-error">Historial 📝</h1>
        </div>

        <div className="row text-center mb-8">
          <h1 className="text-xl">Singles</h1>
        </div>

        <div className="overflow-x-auto mb-12 shadow-lg rounded-2xl">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Oponente</th>
                <th>Resultado</th>
                <th>G/P</th>
                <th>Torneo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>12-12</th>
                <td>
                  <Link to="/jugadores/1" className="link-hover link-error">
                    Juan Perez
                  </Link>
                  &nbsp;(
                  <Link to="/equipos/1" className="link-hover">
                    San Miguel
                  </Link>
                  )
                </td>
                <td>6-0 6-0</td>
                <td>G</td>
                <td>
                  <Link to="/torneos/1" className="link-hover link-error">
                    Cuarta libre Apertura 2023
                  </Link>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="5"></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};

export default Jugadores;

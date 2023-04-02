//Dependencies
import { Link } from "react-router-dom";

const Fixture = () => {
  return (
    <section id="fixture">
      <div className="row text-center mb-8">
        <h1 className="mb-1">
          <a href="#" className="text-2xl font-bold link-hover link-error">
            Fixture 👈
          </a>
        </h1>
      </div>
      <div className="overflow-x-auto mb-12 shadow-lg rounded-2xl">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Local</th>
              <th>Score</th>
              <th>Visitante</th>
              <th>Serie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>12-23</th>
              <td>12:00</td>
              <td>
                <div className="flex items-center">
                  <div className="avatar mr-4">
                    <div className="w-10 rounded-full">
                      <Link to="/equipos/1" className="opacity-hover">
                        <img src="#" />
                      </Link>
                    </div>
                  </div>
                  <Link to="/equipos/1" className="link-hover font-bold">
                    Club Italiano
                  </Link>
                </div>
              </td>
              <td>
                <Link to="/series/1" className="link-hover mr-1 font-bold">
                  3-0
                </Link>
              </td>
              <td>
                <div className="flex items-center">
                  <div className="avatar mr-4">
                    <div className="w-10 rounded-full">
                      <Link to="/equipos/1" className="opacity-hover">
                        <img src="#" />
                      </Link>
                    </div>
                  </div>
                  <Link to="/equipos/1" className="link-hover font-bold">
                    San Miguel
                  </Link>
                </div>
              </td>
              <td>1212</td>
            </tr>
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

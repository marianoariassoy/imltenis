//Dependencies
import { Link } from "react-router-dom";

const Fixture = () => {
  return (
    <section id="fixture">
      <div className="row text-center mb-6">
        <h1 className="mb-1">
          <a href="#" className="text-2xl font-bold link-hover link-error">
            Fixture 👈
          </a>
        </h1>
      </div>
      <div className="overflow-x-auto mb-12">
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
              <td>
                <span className="font-semibold">12-23</span>
              </td>
              <td>12:00</td>
              <td>
                <div className="flex items-center">
                  <div className="avatar mr-4">
                    <div className="w-8 rounded-full">
                      <Link to="/equipos/1" className="hover:opacity-70">
                        <img src="../assets/images/test.jpg" />
                      </Link>
                    </div>
                  </div>
                  <Link to="/equipos/1" className="link-hover font-semibold">
                    Club Italiano
                  </Link>
                </div>
              </td>
              <td>
                <Link to="/series/1" className="link-hover mr-1 font-semibold">
                  3-0
                </Link>
              </td>
              <td>
                <div className="flex items-center">
                  <div className="avatar mr-4">
                    <div className="w-8 rounded-full">
                      <Link to="/equipos/1" className="hover:opacity-70">
                        <img src="../assets/images/test.jpg" />
                      </Link>
                    </div>
                  </div>
                  <Link to="/equipos/1" className="link-hover font-semibold">
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

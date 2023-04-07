import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Jugadores = () => {
  return (
    <>
      <Helmet>
        <title>Juan Perez IML Tenis</title>
        <meta name="description" content="Estadísticas e historial de Juan Perez en la liga IML Tenis" />
        <meta property="og:title" content="Juan Perez IML Tenis" />
        <meta property="og:url" content="https://imltenis.com.ar/jugadores/1" />
        <meta property="og:image" content="https://imltenis.com.ar/fixture/images/1" />
        <meta property="og:image:alt" content="Juan Perez" />
      </Helmet>

      <section className="mb-6" id="presentacion">
        <div className="row text-center mb-6">
          <div className="avatar mb-3">
            <div className="w-32 rounded-full bg-base-300">
              <Link to="/clubes/1" className="hover:opacity-70">
                <img src="../assets/images/test.jpg" />
              </Link>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-error">Juan Perez</h1>
          <h2 className="text-gray-500">22 años</h2>
        </div>
      </section>

      <section id="lista-single">
        <div className="row text-center mb-6">
          <h1 className="text-2xl font-bold text-error">Historial 👈</h1>
        </div>

        <h1 className="text-xl text-primary text-center mb-3">Singles</h1>

        <div className="overflow-x-auto mb-3">
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
                <td>
                  <span className="font-semibold">12-12</span>
                </td>
                <td>
                  <Link to="/jugadores/1" className="link-hover link-error font-semibold">
                    Juan Perez
                  </Link>
                  &nbsp;(
                  <Link to="/equipos/1" className="link-hover">
                    San Miguel
                  </Link>
                  )
                </td>
                <td>6-0 6-0</td>
                <td>
                  <span className="circle text-primary">G</span>
                </td>
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

      <section id="lista-dobles">
        <h1 className="text-xl text-primary text-center mb-3">Dobles</h1>

        <div className="overflow-x-auto mb-3">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Oponentes</th>
                <th>Pareja</th>
                <th>Resultado</th>
                <th>G/T</th>
                <th>Torneo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="font-semibold">12-12</span>
                </td>
                <td>
                  <Link to="/jugadores/1" className="link-hover link-error font-semibold">
                    Juan Perez
                  </Link>
                  &nbsp;(
                  <Link to="/equipos/1" className="link-hover">
                    San Miguel
                  </Link>
                  )
                </td>
                <td>
                  <Link to="/jugadores/1" className="link-hover link-error font-semibold">
                    Juan Perez
                  </Link>
                </td>
                <td>6-0 6-0</td>
                <td>
                  <span className="circle text-primary">P</span>
                </td>
                <td>
                  <Link to="/torneos/1" className="link-hover link-error">
                    Cuarta libre Apertura 2023
                  </Link>
                </td>
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

      <section id="equipos">
        <h1 className="text-xl text-primary text-center mb-3">Equipos Integrados</h1>

        <div className="overflow-x-auto mb-3">
          <table className="table w-full">
            <thead>
              <tr>
                <th width="18">#</th>
                <th>Equipo</th>
                <th>Club</th>
                <th>Competencia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="font-semibold">1</span>
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar mr-4">
                      <div className="w-8 rounded-full">
                        <Link to="/equipos/1" className="opacity-hover">
                          <img src="#" />
                        </Link>
                      </div>
                    </div>
                    <Link to="/equipos/1" className="link-hover link-error font-semibold">
                      San Miguel
                    </Link>
                  </div>
                </td>
                <td>
                  <Link to="/clubes/1" className="link-hover">
                    Club San Miguel
                  </Link>
                </td>
                <td>
                  <Link to="/torneos/1" className="link-hover link-error">
                    Cuarta Libre Apertura 2023
                  </Link>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="4"></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};

export default Jugadores;

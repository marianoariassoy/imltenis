import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Series = () => {
  return (
    <>
      <Helmet>
        <title>Serie Domingo 26 de Marzo 2023 9:00 hs.</title>
        <meta name="description" content="Serie disputada el Domingo 26 de Marzo 2023 9:00 hs. de la liga IML Tenis" />
        <meta property="og:title" content="Serie Domingo 26 de Marzo 2023 9:00 hs." />
        <meta property="og:url" content="https://imltenis.com.ar/series/1" />
        <meta property="og:image" content="https://imltenis.com.ar/fixture/assets/iml.jpg" />
        <meta property="og:image:alt" content="IML Tenis" />
      </Helmet>

      <section id="presentacion">
        <div className="row text-center mb-12">
          <h1 className="text-2xl font-bold text-error mb-3">Domingo 26 de Marzo 2023 9:00 hs.</h1>
          <h2 className="text-xl">
            <Link to="/torneos/1" className="link-hover text-gray-500">
              Segunda Libre Apertura 2023
            </Link>
          </h2>
        </div>
      </section>

      <section id="score">
        <div className="row flex justify-center mb-8">
          <div className="flex text-center w-full max-w-sm">
            <div className="flex flex-col items-center w-2/5">
              <div className="avatar mb-3">
                <div className="w-20 rounded-full">
                  <Link to="/equipos/1" className="hover:opacity-70">
                    <img src="../assets/images/test.jpg" />
                  </Link>
                </div>
              </div>
              <Link to="/equipos/1" className="link-hover link-error font-semibold">
                San Miguel
              </Link>
              Local
            </div>
            <div className="w-1/5">
              <h1 className="text-2xl font-bold">
                Score
                <br /> 3-0
              </h1>
            </div>
            <div className="flex flex-col items-center w-2/5">
              <div className="avatar mb-3">
                <div className="w-20 rounded-full">
                  <Link to="/equipos/1" className="hover:opacity-70">
                    <img src="../assets/images/test.jpg" />
                  </Link>
                </div>
              </div>
              <Link to="/equipos/1" className="link-hover link-error font-semibold">
                Club Italiano
              </Link>
              Visitante
            </div>
          </div>
        </div>
      </section>

      <section id="serie">
        <div className="overflow-x-auto mb-12">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Partido</th>
                <th>Enfrentamiento</th>
                <th>Score</th>
                <th>Ganador</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="font-semibold">Single</span>
                </td>
                <td>
                  <Link to="/jugadores/1" className="link-error link-hover font-semibold">
                    Juan Perez
                  </Link>
                  &nbsp;vs.&nbsp;
                  <Link to="/jugadores/1" className="link-error link-hover font-semibold">
                    Juan Perez
                  </Link>
                </td>
                <td>6-0 6-0</td>
                <td>
                  <span className="circle text-primary">L</span>
                </td>
                <td>
                  <div className="badge">Finalizado</div>
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

export default Series;

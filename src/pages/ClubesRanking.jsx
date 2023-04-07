import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ClubesRanking = () => {
  return (
    <>
      <Helmet>
        <title>Ranking de Clubes IML Tenis</title>
        <meta name="description" content="Ranking de Clubes de la liga IML Tenis 2023" />
        <meta property="og:title" content="Ranking de Clubes IML Tenis" />
        <meta property="og:url" content="https://imltenis.com.ar/clubes-ranking" />
        <meta property="og:image" content="https://imltenis.com.ar/fixture/assets/iml.jpg" />
        <meta property="og:image:alt" content="IML Tenis" />
      </Helmet>

      <section id="presentacion">
        <div className="row text-center mb-6">
          <h1 className="text-2xl font-bold text-error mb-1">Ranking Anual de Clubes</h1>
          <h1 className="text-2xl mb-1">2023</h1>
          <h1 className="text-2xl">👑</h1>
        </div>
      </section>

      <section id="grupo">
        <div className="overflow-x-auto mb-6">
          <table className="table w-full">
            <thead>
              <tr>
                <th width="20">#</th>
                <th>Club</th>
                <th width="130">Series</th>
                <th width="130">Ganadas</th>
                <th width="130">Parciales</th>
                <th width="130">Ptos.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="font-semibold">1</span>
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar mr-3">
                      <div className="w-8 rounded-full">
                        <Link to="/clubes/1" className="opacity-hover">
                          <img src="#" />
                        </Link>
                      </div>
                    </div>
                    <Link to="/clubes/1" className="link-hover font-semibold text-primary">
                      CLub Italiano
                    </Link>
                  </div>
                </td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>
                  <span className="font-semibold text-primary">0</span>
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
    </>
  );
};

export default ClubesRanking;

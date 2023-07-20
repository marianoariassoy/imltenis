import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";

const ClubesRanking = () => {
  const { data, loading, error } = useFetch(`/clubes/ranking`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;

  return (
    <>
      <Helmet>
        <title>Ranking de Clubes IML Tenis</title>
        <meta name="description" content="Ranking de Clubes de la liga IML Tenis 2023" />
        <meta property="og:title" content="Ranking de Clubes IML Tenis" />
        <meta property="og:url" content="https://imltenis.com.ar/clubes/ranking" />
        <meta property="og:image" content="https://imltenis.com.ar/assets/iml.jpg" />
        <meta property="og:image:alt" content="IML Tenis" />
      </Helmet>

      <section id="presentacion">
        <div className="row text-center mb-6">
          <h1 className="text-xl font-semibold text-error">Ranking Anual de Clubes</h1>
          <h1 className="text-xl text-gray-500">2023</h1>
          <h1 className="text-xl">🏆</h1>
        </div>
      </section>

      <section className="mb-12" id="grupo">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th width="30"></th>
                <th className="pl-0">Club</th>
                <th width="100">SJ</th>
                <th width="100">SG</th>
                <th width="100">PG</th>
                <th width="100">Pts</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} className={` ${index === 0 ? "text-primary" : ""}`}>
                  <td className="p-0">
                    {index === 0 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="8" fill="#f34643" className="inline ml-2">
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                  <td className="pl-0 flex items-center gap-3">
                    <span className="font-semibold">{index + 1}</span>
                    <div className="avatar">
                      <div className="w-9 rounded-full">
                        <Link to={`/clubes/${item.id}`} className="hover:opacity-70">
                          <img src={item.image} alt={item.name} width="36" height="36" />
                        </Link>
                      </div>
                    </div>
                    <Link to={`/clubes/${item.id}`} className="link-hover font-semibold">
                      {item.name}
                    </Link>
                  </td>
                  <td>{item.series_total}</td>
                  <td>{item.series_won}</td>
                  <td>{item.matches_won}</td>
                  <td>
                    <span className="font-semibold">{item.points}</span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="6"></th>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="w-full text-center mb-4 text-gray-500 text-sm">
          <strong>SJ:</strong> Series Jugadas <strong>SG:</strong> Series Ganadas <strong>PG:</strong> Parciales Ganados
        </div>
      </section>
    </>
  );
};

export default ClubesRanking;

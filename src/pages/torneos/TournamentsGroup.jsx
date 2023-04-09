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
        <h1>
          <a href="#" className="text-2xl font-semibold link-hover link-error">
            {name}
          </a>
        </h1>
        <h2 className="text-xl">Posiciones 💪</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="pl-0">Equipo</th>
              <th width="100">Ptos</th>
              <th width="100">Series</th>
              <th width="100">Ganadas</th>
              <th width="100">Parciales</th>
              <th width="100">Dif. Sets</th>
              <th width="100">Dif. Games</th>
              <th width="20">#</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className="p-0">
                  {index < winners ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="8" fill="#f34643" className="inline ml-2">
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                    </svg>
                  ) : (
                    ""
                  )}
                </td>
                <td className="pl-0">
                  <div className="flex items-center">
                    <div className="avatar mr-3">
                      <div className="w-9 rounded-full">
                        <Link to={`/equipos/${item.id}`} className="hover:opacity-70">
                          <img src={`https://imltenis.com.ar/fixture/images/${item.image ? item.image : item.club_image}`} />
                        </Link>
                      </div>
                    </div>
                    <Link to={`/equipos/${item.id}`} className="link-hover font-semibold">
                      {item.name}
                    </Link>
                  </div>
                </td>
                <td>
                  <span className="font-semibold">{item.points}</span>
                </td>
                <td>{item.series_total}</td>
                <td>{item.series_won}</td>
                <td>{item.match_won}</td>
                <td>{item.sets}</td>
                <td>{item.games}</td>
                <td>
                  <span className={`font-semibold ${index < winners ? "text-primary" : ""} `}>{index + 1}</span>
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

      <div className="row flex justify-center w-100">
        <div className="flex mb-12 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6 text-error mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-gray-500">{description}</span>
        </div>
      </div>
    </section>
  );
};

export default TournamentsGroup;

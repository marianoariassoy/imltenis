import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

const Group = ({ group_id, name, description, winners }) => {
  const { data, loading, error } = useFetch(`https://imltenis.com.ar/fixture/api/groups/teams/${group_id}`);
  if (loading) return <Loader />;
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;

  return (
    <section id="grupo">
      <div className="row text-center mb-6" id="presentacion">
        <h1 className="mb-1">
          <a href="#" className="text-xl md:text-2xl font-bold link-hover link-error">
            {name}
          </a>
        </h1>
        <h2 className="md:text-xl">Posiciones 💪</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th width="20">#</th>
              <th>Equipo</th>
              <th width="100">Ptos</th>
              <th width="100">Series</th>
              <th width="100">Ganadas</th>
              <th width="100">Parciales</th>
              <th width="100">Dif. Sets</th>
              <th width="100">Dif. Games</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className={index < winners ? "text-primary" : ""}>
                <td>
                  <span className="font-semibold">{index + 1}</span>
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar mr-3">
                      <div className="w-8 rounded-full">
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6 text-error mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-gray-500">{description}</span>
        </div>
      </div>
    </section>
  );
};

export default Group;

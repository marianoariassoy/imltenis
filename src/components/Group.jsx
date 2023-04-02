//Dependencies
import { Link } from "react-router-dom";

const Group = () => {
  return (
    <section id="grupo">
      <div className="row text-center mb-6">
        <h1 className="mb-1 ">
          <a href="#" className="text-2xl font-bold link-hover link-error">
            Zona Única
          </a>
        </h1>
        <h2 className="text-xl">Posiciones 💪</h2>
      </div>

      <div className="overflow-x-auto mb-6 shadow-lg rounded-2xl">
        <table className="table w-full">
          <thead>
            <tr>
              <th width="22">#</th>
              <th>Equipo</th>
              <th width="110">Series</th>
              <th width="110">Ganadas</th>
              <th width="110">Parciales</th>
              <th width="110">Dif. Sets</th>
              <th width="110">Dif. Games</th>
              <th width="110">Ptos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> 1 </th>
              <td>
                <div className="flex items-center">
                  <div className="avatar mr-3">
                    <div className="w-8 rounded-full">
                      <Link to="/equipos/1" className="opacity-hover">
                        <img src="#" />
                      </Link>
                    </div>
                  </div>
                  <Link to="/equipos/1" href="#" className="link-hover font-bold">
                    Club Italiano
                  </Link>
                </div>
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td className="font-bold">0</td>
            </tr>
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
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, optio adipisci placeat eius blanditiis minus! Sequi maxime, officia amet sunt esse quidem qui? Eos corporis alias perferendis necessitatibus, in voluptate!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Group;

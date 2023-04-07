import { Link } from "react-router-dom";

import Fixture from "../components/Fixture";

const Teams = () => {
  return (
    <>
      <section className="mb-6" id="presentacion">
        <div className="row text-center mb-2">
          <div className="avatar mb-3">
            <div className="w-32 rounded-full bg-base-300">
              <Link to="/clubes/1" className="hover:opacity-70">
                <img src="../assets/images/test.jpg" />
              </Link>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-error">Club Italiano</h1>
          <h2>
            <Link to="/torneos/1" className="link-hover ">
              Segunda Libre Apertura 2023
            </Link>
          </h2>
        </div>
        <div className="row flex justify-center items-center">
          <a href="#" target="_blank" className="btn btn-outline btn-error normal-case m-2 svg-hover-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="10" fill="#f34643" className="mr-2 ">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            Ubicación
          </a>
          <a href="#" target="_blank" className="btn btn-outline btn-error normal-case mr-2 svg-hover-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" fill="#f34643" className="mr-2 ">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </section>

      <section id="lista">
        <div className="row text-center mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-primary">Lista de buena fe 😉</h1>
          <h1 className="text-gray-500">Federico Lobelle (Capitán)</h1>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="table w-full">
            <thead>
              <tr>
                <th width="20">#</th>
                <th>Nombre y Apellido</th>
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
                        <Link to="/jugadores/1" className="hover:opacity-70">
                          <img src="../assets/images/test.jpg" />
                        </Link>
                      </div>
                    </div>
                    <Link to="/jugadores/1" href="#" className="link-hover font-semibold text-primary">
                      Juan Perez
                    </Link>
                  </div>
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

      <Fixture />
    </>
  );
};

export default Teams;

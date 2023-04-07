import { Link } from "react-router-dom";

const ClubesDetail = () => {
  return (
    <>
      <section>
        <div className="hero min-h-screen">
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="row text-center mb-5">
                <div className="avatar">
                  <div className="w-32 rounded-full shadow-xl">
                    <img src="../assets/images/test.jpg" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-primary mb-1">San Miguel</h1>
                <p>
                  <span className="font-semibold">Juan Díaz de Solís 1030, José C. Paz, Buenos Aires</span> <br />
                  Tel. 11 2727 5153
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-5 max-w-6xl mt-12 mb-12">
          <div className="flex w-full mb-6">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center text-error w-1/2">
              <a href="#" target="_blank" className="flex items-center justify-center link-hover font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" fill="#f34643" className="mr-2">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                WhatsApp
              </a>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center text-error w-1/2">
              <a href="#" target="_blank" className="flex items-center justify-center link-hover font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" fill="#f34643" viewBox="0 0 448 512" className="mr-2">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
          <div className="flex w-full mb-6">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center text-error">
              <a href="#" target="_blank" className="flex items-center justify-center link-hover font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="10" fill="#f34643" className="mr-2">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
                Facebook
              </a>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center text-error">
              <a href="#" target="_blank" className="flex items-center justify-center link-hover font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" fill="#f34643" className="mr-2">
                  <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                </svg>
                Sitio Web
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13144.560462436257!2d-58.5805069!3d-34.5500076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcba215f5a1f27%3A0x58606568281f1271!2sSociedad%20Alemana%20de%20Gimnasia%20de%20Villa%20Ballester!5e0!3m2!1ses-419!2sar!4v1680829044459!5m2!1ses-419!2sar"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section>
        <div className="container mx-auto px-5 max-w-6xl mb-3">
          <div className="row text-center mb-6">
            <h1 className="text-error text-2xl font-bold">Equipos</h1>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="table w-full">
              <thead>
                <tr>
                  <th width="20">#</th>
                  <th>Equipo</th>
                  <th>Torneo</th>
                  <th width="100">Series</th>
                  <th width="100">Ganadas</th>
                  <th width="100">Parciales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="font-semibold">1</span>
                  </td>
                  <td>
                    <Link to="/equipos/1" className="link-hover link-error font-semibold">
                      San Miguel
                    </Link>
                  </td>
                  <td>
                    <Link href="/torneos/1" className="link-hover">
                      Cuarta Libre Apertura 2023
                    </Link>
                  </td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="6"></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClubesDetail;

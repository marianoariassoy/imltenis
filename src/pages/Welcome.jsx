import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Logo from "../assets/iml-primary.svg";

const Welcome = () => {
  let meta_title = "IML Tenis Liga de clubes de Zona Norte y Oeste de Buenos Aires";
  let meta_description = "Liga de clubes de tenis de Zona Norte y Oeste de Buenos Aires, Argentina";

  return (
    <>
      <Helmet>
        <title>{meta_title}</title>
        <meta property="og:url" content="https://imltenis.com.ar/" />
        <meta property="og:image" content="https://imltenis.com.ar/assets/iml.jpg" />
        <meta property="og:image:alt" content="IML Tenis" />
        <link rel="canonical" href="https://imltenis.com.ar" />
        <meta name="description" content={meta_description} />
        <meta name="title" content={meta_title} />
        <meta property="og:title" content={meta_title} />
        <meta property="og:description" content={meta_description} />
      </Helmet>

      <header>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="#9d9c9c" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52 font-bold shadow-xl bg-base-300">
                <li>
                  <Link to="/">Apertura 2023</Link>
                </li>
                <li>
                  <NavLink to="/torneos/15" className="text-primary">
                    Primera Libre
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/torneos/14" className="text-primary">
                    Segunda Libre
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/torneos/13" className="text-primary">
                    Tercera Libre
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/torneos/12" className="text-primary">
                    Cuarta Libre
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/clubes/ranking">Ranking Clubes</NavLink>
                </li>
                <li>
                  <NavLink to="/jugadores/ranking">Ranking Jugadores</NavLink>
                </li>
                <li>
                  <NavLink to="/reglamento">Reglamento</NavLink>
                </li>
                <li>
                  <NavLink to="/nosotros">Nosotros</NavLink>
                </li>
                <li>
                  <a href="https://imltenis.com.ar/assets/docs/planilla_de_carga_iml_tenis.pdf" target="_blank">
                    Planilla de carga
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center mt-3">
            <Link to={"/"} className="btn btn-ghost svg-primary-hover">
              <img src={Logo} alt="Logo IML" width="90" />
            </Link>
          </div>
          <div className="navbar-end">
            <a href="https://www.instagram.com/imltenis/" target="_blank" className="svg-primary-hover">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" className="fill-current mr-3">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  fill="#9d9c9c"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className="opacity-0 fade-in flex flex-col justify-center p-6 text-center max-w-4xl m-auto text-primary">
        <h1 className="text-7xl lg:text-8xl" id="title-home">
          Apertura <br />
          2023
        </h1>
        <ul className="tournaments-list font-bold text-5xl lg:text-7xl mb-1">
          <li>
            <Link to="/torneos/15" className="link-hover">
              1era
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/torneos/14" className="link-hover">
              2da
            </Link>
          </li>
          <br className="inline lg:hidden" />
          <li>
            <span className="hidden lg:inline">/</span>
          </li>
          <li>
            <Link to="/torneos/13" className="link-hover">
              3ra
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/torneos/12" className="link-hover">
              4ta
            </Link>
          </li>
        </ul>
        {/* <h2 className="text-4xl">🏆</h2> */}
      </main>

      <footer className="p-6 text-center text-primary">
        <div>
          <a href="https://www.instagram.com/yuka_ant/" className="icon-sponsor hover:opacity-60" target="_blank" rel="noopener noreferrer">
            <img src="../assets/sponsors/yuka.svg" alt="Logo Yuka" />
          </a>
          <a href="https://www.instagram.com/typdeportes/" className="icon-sponsor hover:opacity-60" target="_blank" rel="noopener noreferrer">
            <img src="../assets/sponsors/typ.svg" alt="Logo TyP" />
          </a>
          <a href="https://www.instagram.com/tiendavinica/" className="icon-sponsor hover:opacity-60" target="_blank" rel="noopener noreferrer">
            <img src="../assets/sponsors/vinica.svg" alt="Logo Tienda Vinica" />
          </a>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold"> Liga de clubes IML Tenis &copy; 2023</span>
            <br /> Buenos Aires, Argentina.
          </p>
        </div>
      </footer>

      <div className="video-background fixed h-screen w-screen left-0 top-0 -z-10">
        <video autoPlay playsInline muted loop className="opacity-40 h-full w-full object-cover">
          <source src="./assets/videos/video720.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Welcome;

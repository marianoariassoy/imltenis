import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFetch from "../hooks/useFetch";
import Logo from "../assets/iml-primary.svg";
let season_name = null;

const Welcome = () => {
  let id = 1;
  const { data, loading, error } = useFetch(`/seasons/tournaments/${id}`);
  if (error) return <div className="row w-full text-center">Ha ocurrido un error: {error.message}</div>;

  loading ? (season_name = null) : (season_name = data[0].season_name);

  let meta_title = "IML Tenis Liga de clubes de Zona Norte y Oeste de Buenos Aires";
  let meta_description = "Liga de clubes de tenis de Zona Norte y Oeste de Buenos Aires, Argentina";

  return (
    <>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
        <meta name="title" content={meta_title} />
        <meta property="og:title" content={meta_title} />
        <meta property="og:description" content={meta_description} />
        <meta property="og:url" content="https://imltenis.com.ar/" />
        <meta property="og:image" content="https://imltenis.com.ar/assets/iml.jpg" />
        <meta property="og:image:alt" content="IML Tenis" />
        <link rel="canonical" href="https://imltenis.com.ar" />
      </Helmet>

      <header className="header-home">
        <div className="navbar mb-6">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52 font-bold shadow-xl bg-base-300">
                <li>
                  <NavLink to="/">Torneos</NavLink>
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
                  <a href="./assets/Planilla_de_Carga_2Dobles_1Single.pdf" target="_blank">
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#34363c" width="24" height="24" className="fill-current mr-3">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {data && (
        <main className="row w-full h-screen flex flex-col justify-center px-6 text-center fade-in">
          <div className="row max-w-3xl mx-auto mb-2">
            <h1 className="text-primary mb-2" id="title-home">
              {season_name}
            </h1>
            {data.map((item) => (
              <Link to={`/torneos/${item.id}`} className="btn btn-outline btn-error md:btn-lg m-2 btn-category normal-case" key={item.id}>
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <div className="row w-full text-center text-sm">
              <h2 className="font-semibold text-primary">
                Nos acompañan
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#f34643" width="14" className="inline ml-2">
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </h2>
              <a href="https://www.instagram.com/yuka_ant/" className="icon-sponsor hover:opacity-60" target="_blank" rel="noopener noreferrer">
                <img src="../assets/sponsors/yuka-primary.svg" alt="Logo Yuka" />
              </a>
              <a href="https://www.instagram.com/typdeportes/" className="icon-sponsor hover:opacity-60" target="_blank" rel="noopener noreferrer">
                <img src="../assets/sponsors/typ-primary.svg" alt="Logo TyP" />
              </a>
              <a href="https://www.instagram.com/tiendavinica/" className="icon-sponsor hover:opacity-60" target="_blank" rel="noopener noreferrer">
                <img src="../assets/sponsors/vinica-primary.svg" alt="Logo Tienda Vinica" />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Liga de clubes IML Tenis 2023 &copy; Buenos Aires, Argentina.
              <br />
              <a href="mailto:hola@imltenis.com.ar" className="link-hover">
                hola@imltenis.com.ar
              </a>
            </p>
          </div>
        </main>
      )}
      <div className="video-background">
        <video autoPlay playsInline muted loop id="myVideo">
          <source src="./assets/video720.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Welcome;

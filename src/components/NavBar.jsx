import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/iml-primary.svg";

const NavBar = () => {
  const links = [
    { name: "Primera Libre Yuka", url: "/torneos/15", style: "text-primary" },
    { name: "Segunda Libre", url: "/torneos/14", style: "text-primary" },
    { name: "Tercera Libre", url: "/torneos/13", style: "text-primary" },
    { name: "Cuarta Libre", url: "/torneos/12", style: "text-primary" },
    { name: "Ranking Urban Kicks", url: "/jugadores/ranking", style: "" },
    { name: "Ranking Clubes", url: "/clubes/ranking", style: "" },
    { name: "Reglamento", url: "/reglamento", style: "" },
    { name: "Nosotros", url: "/nosotros", style: "" },
  ];

  return (
    <div className="navbar mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#9d9c9c">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52 font-bold shadow-xl bg-base-300">
            <li>
              <Link to="/">Apertura 2023</Link>
            </li>
            {links.map((item, index) => (
              <li key={index}>
                <NavLink to={item.url} className={item.style}>
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <a href="https://imltenis.com.ar/assets/docs/planilla_de_carga_iml_tenis.pdf" target="_blank">
                Planilla de carga
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center mt-3">
        <Link to="/" className="btn btn-ghost svg-primary-hover">
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
  );
};

export default NavBar;

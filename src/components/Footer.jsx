import { Yuka, Typ, Urban, Vinica } from "../logos/Logos";

const Footer = () => {
  return (
    <div className="pb-6 px-6 text-center text-sm">
      <div className="row w-full text-center">
        <a href="https://www.instagram.com/yuka_ant/" className="icon-sponsor hover:opacity-60" target="_blank" rel="noopener noreferrer">
          <Yuka />
        </a>
        <a href="https://www.instagram.com/typdeportes/" className="icon-sponsor hover:opacity-60" target="_blank" rel="noopener noreferrer">
          <Typ />
        </a>
        <a href="https://www.instagram.com/urbankicks.ar/" className="icon-sponsor hover:opacity-60" target="_blank" rel="noopener noreferrer">
          <Urban />
        </a>
        <a href="https://www.instagram.com/tiendavinica/" className="icon-sponsor hover:opacity-60" target="_blank" rel="noopener noreferrer">
          <Vinica />
        </a>
      </div>

      <p className="row w-full text-sm mt-4">
        <span className="block lg:inline-block font-semibold">Liga de Interclubes IML Tenis &copy; 2023</span> Buenos Aires, Argentina.
      </p>
    </div>
  );
};

export default Footer;

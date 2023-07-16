const Footer = () => {
  const links = [
    { name: "Logo Yuka", url: "https://www.instagram.com/yuka_ant/", img: "../assets/sponsors/yuka.svg" },
    { name: "Logo TyP", url: "https://www.instagram.com/typdeportes/", img: "../assets/sponsors/typ.svg" },
    { name: "Logo Urban Kicks", url: "https://www.instagram.com/urbankicks.ar/", img: "../assets/sponsors/urban.svg" },
    { name: "Logo Tienda Vinica", url: "https://www.instagram.com/tiendavinica/", img: "../assets/sponsors/vinica.svg" },
  ];

  return (
    <div className="pb-12 px-6 text-center text-gray-500 text-sm opacity-80">
      <div className="row w-full text-center mb-2">
        {links.map((item, index) => (
          <a href={item.url} className="icon-sponsor hover:opacity-60" target="_blank" rel="noopener noreferrer" key={index}>
            <img src={item.img} alt={item.name} />
          </a>
        ))}
      </div>

      <p className="row w-full text-sm mt-4">
        <span className="block lg:inline-block">Liga de Interclubes IML Tenis &copy; 2023</span> Buenos Aires, Argentina.
      </p>
    </div>
  );
};

export default Footer;

const Footer = () => {
  return (
    <div className="pb-12 px-6 text-center text-gray-500 text-sm opacity-80">
      <div className="row w-full text-center mb-3">
        <h2 className="font-semibold">
          Nos acompañan
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#666" width="14" className="inline ml-2">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        </h2>
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

      <div className="row w-full text-sm">
        <p>
          <span className="font-semibold"> Liga de Interclubes IML Tenis &copy; 2023</span> Buenos Aires, Argentina.&nbsp;
          <a href="mailto:hola@imltenis.com.ar" className="link-hover">
            hola@imltenis.com.ar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

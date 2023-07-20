import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    const footer = document.querySelector("footer");
    footer.classList.remove("text-gray-500");
    footer.classList.add("color-main");
    return () => {
      footer.classList.remove("color-main");
      footer.classList.add("text-gray-500");
    };
  }, []);

  let meta_title = "IML Tenis Liga de clubes de Zona Norte y Oeste de Buenos Aires";
  let meta_description = "Liga de clubes de tenis de Zona Norte y Oeste de Buenos Aires, Argentina";

  const links = [
    { name: "1era", path: "/torneos/15" },
    { name: "2da", path: "/torneos/14" },
    { name: "3ra", path: "/torneos/13" },
    { name: "4ta", path: "/torneos/12" },
  ];
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

      <section className="opacity-0 fade-in flex flex-col justify-center items-center text-center text-primary h-full">
        <h1 className="text-7xl lg:text-8xl font-black">
          Apertura <br />
          2023
        </h1>
        <ul className="tournaments-list font-black text-5xl lg:text-7xl mb-1">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="link-hover">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="video-background fixed h-screen w-screen left-0 top-0 -z-10">
        <video autoPlay playsInline muted loop className="opacity-50 h-full w-full object-cover">
          <source src="./assets/videos/video.webm" type="video/webm" />
          <source src="./assets/videos/video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Welcome;

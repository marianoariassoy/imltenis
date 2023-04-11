import { Helmet } from "react-helmet";

const Nosotros = () => {
  return (
    <>
      <Helmet>
        <title>Nosotros</title>
        <meta name="description" content="Sobre la liga de clubes IML Tenis" />
        <meta property="og:title" content="Nosotros" />
        <meta property="og:url" content="https://imltenis.com.ar/nosotros" />
        <meta property="og:image" content="https://imltenis.com.ar/fixture/assets/iml.jpg" />
        <meta property="og:image:alt" content="IML Tenis" />
      </Helmet>

      <section className="text-center flex items-center justify-center h-full">
        <div>
          <h1 className="text-2xl mb-6 font-bold text-primary">¡Hola! 👋</h1>
          <div className="row widh-full mb-12 max-w-4xl m-auto">
            <p className="mb-3">
              En <span className="font-semibold">IML Tenis</span> somos un grupo de amigos unidos por la pasión del tenis, la amistad y la competencia 🏆
              <br />
              Durante años participamos y organizamos diferentes torneos, pero siempre tuvimos las mejores experiencias y momentos jugando por equipos, por eso conocemos y valoramos cada detalle de este tipo de liga y lo que los jugadores y clubes
              necesitan 😉
            </p>
            <p className="mb-3">
              Queremos que durante cada semana previa a una fecha el grupo de WhatsApp de tu equipo explote, que el día del partido sientas la ansiedad y los nervios de representar a tu equipo y que al final de cada partido con un apreton de manos a
              tu rival, ganes o pierdas te lleves cada vez más ganas de volver a jugar.
            </p>
            <p className="font-semibold mb-6">Nos vemos en la cancha 💪</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;

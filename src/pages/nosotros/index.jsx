import { Helmet } from 'react-helmet'

const Nosotros = () => {
  return (
    <section className='fade-in text-center max-w-2xl m-auto flex flex-col gap-y-6'>
      <h1 className='font-bold text-primary text-xl'>¡Hola! 👋</h1>

      <p className='text-wrap'>
        La <strong className='text-primary'>liga de clubes IML Tenis</strong> está conformada por un grupo de amigos
        unidos por la pasión hacia el tenis, la amistad y la competencia. <br /> A lo largo de los años, hemos
        participado y organizado diversos torneos, pero siempre encontramos los momentos más emocionantes compitiendo en
        equipo, esto nos permite apreciar y comprender cada detalle de este tipo de competencia, entendiendo su
        significado para jugadores, capitanes y clubes.
      </p>
      <p className='text-wrap'>
        Somos conscientes de que esta competencia trasciende los límites de la cancha, sabemos que comprende un conjunto
        de experiencias que fortalecen las relaciones entre compañeros y amigos representantes de un equipo. Por ello,
        nos esforzamos en otorgar el valor e importancia que eso merece, y que más allá de los resultados, buscamos que
        esta experiencia sea gratificante para todos aquellos que aman este maravilloso deporte.
      </p>

      <strong className='text-primary'>¡Nos vemos en la cancha! 😉 </strong>

      <Helmet>
        <title>IML Tenis Nosotros</title>
      </Helmet>
    </section>
  )
}

export default Nosotros

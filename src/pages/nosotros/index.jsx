import { Helmet } from 'react-helmet'

const Nosotros = () => {
  return (
    <section className='fade-in text-center max-w-2xl m-auto flex flex-col gap-y-6'>
      <h1 className='font-bold text-primary text-xl'>¡Hola! 👋</h1>

      <p className='text-wrap'>
        La <strong className='text-primary'>liga de clubes IML Tenis</strong> está conformada por un grupo de amigos
        unidos por la pasión del tenis, la amistad y la competencia. <br /> A lo largo de los años, hemos participado y
        organizado diversos torneos, pero siempre encontramos los mejores momentos compitiendo en equipo, esto nos
        permite apreciar y comprender cada detalle de este tipo de competencia, entendiendo su significado para los
        jugadores, capitanes y clubes.
      </p>
      <p>
        <strong className='text-primary'>¡Nos vemos en la cancha! 😉 </strong>
      </p>

      <Helmet>
        <title>IML Tenis Nosotros</title>
      </Helmet>
    </section>
  )
}

export default Nosotros

import { Helmet } from 'react-helmet'

const Nosotros = () => {
  return (
    <section className='fade-in text-center max-w-2xl m-auto flex flex-col gap-y-6'>
      <div>
        <h1 className='font-bold text-primary text-xl'>¡Hola! </h1>
        <span className='text-xl'>👋</span>
      </div>

      <p className='text-wrap text-sm'>
        La <strong className='text-primary'>liga de clubes IML Tenis</strong> está conformada por un grupo de amigos
        unidos por la pasión del tenis, la amistad y la buena competencia. <br />A lo largo de los años hemos
        participado en diversos torneos, pero siempre encontramos los mejores, y más memorables momentos, compitiendo
        junto a amigos en equipo, en nuestras canchas y conociendo otras canchas. <br />
        <br />
        Esto nos permite apreciar y comprender este tipo de competencia, entendiendo el significado para los jugadores,
        capitanes y para los clubes en lo deportivo, y más allá de la competencia, la función social que esto implica.
        <br /> <br />
        Esperamos representar de la mejor forma estos valores en nuestro torneo.
      </p>
      <p>
        <strong className='text-primary text-sm'>¡Nos vemos en la cancha! 😉 </strong>
      </p>

      <Helmet>
        <title>IML Tenis Nosotros</title>
      </Helmet>
    </section>
  )
}

export default Nosotros

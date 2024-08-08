import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import Item from './Item'
import Counter from '../Counter'

const Presentacion = () => {
  const data = [
    {
      title: '🤔 ¿Qué necesito para realizar la inscripción?',
      text: `Para inscribirte necesitás leer la información completa de cómo se lleva adelante el torneo y armar tu equipo con un mínimo de 6 participantes en la lista de buena fe y un máximo de 18 jugadores. Tener o alquilar 3 canchas de Tenis de la misma superficie para poder hacer de local, aceptamos clubes con 2 canchas.`
    },
    {
      title: '📅 Fechas',
      text: `Inicio del torneo: <strong>Sábado 24 y Domingo 25 de Agosto.</strong><br />
Cierre de Inscripción: <strong>11 de Agosto.</strong><br />
Cierre de listas de buena fe: <strong>18 de Agosto.</strong>`
    },
    {
      title: '🏆 ¿Cómo es el formato de juego y del torneo?',
      text: `En todas las categorías se jugarán <strong >1 single y 2 dobles.</strong><br/>
      Todos los partidos se disputarán al mejor de 3 sets, con tie break. El tercer set será Super Tie break a 10 puntos con diferencia de dos.<br/>
      Todos los resultados y el reglamento general podrán ser vistos en este sitio web.`
    },
    {
      title: '⭐ ¿En qué categorías puedo inscribirme?',
      text: `<strong>Los Domingos:</strong> Primera Libre, Segunda Libre, Tercera Libre, Cuarta Libre, Quinta Libre. <br/> 
      <strong>Sábados y Domingos:</strong> Damas Segunda, Damas Tercera, Damas Cuarta. <br/> 
      <strong>Sábados:</strong> Segunda +35, Tercera +45. 
      `
    },
    {
      title: '📈 ¿Cómo se a que categoría corresponde mi equipo?',
      text: `<strong>Niveles orientativos: </strong>
        Quinta: Jugadores categoría 125, C. Cuarta: Jugadores categoría 250, B2, B-. Tercera: Jugadores categoría 500,
        B1 Segunda: Jugadores categoría 750, A1, A2 Primera: Jugadores categoría 1000, Super A.`
    },
    {
      title: '🔞 ¿Hay restricciones por edad?',
      text: `Solamente en la categoría Segunda y Tercera +45, el resto de las categorías son libres de edad.`
    },
    {
      title: '🌍 ¿Dónde se juega?',
      text: `Cada equipo <strong >representa a un club o barrio</strong> que jugará de local reservando o alquilando cancha según corresponda.<br/>
      Zonas de juego: Zona Norte y Zona Oeste de Buenos Aires.`
    },
    {
      title: '🕛 ¿Qué día y horario se juega por categoría?',
      text: `Las categorías de los Domingos de <strong>9 a 18 hs.</strong><br/>Las categorías de los Sábados de <strong>13 a 18 hs.</strong> <br/><br/>
      Cada equipo puede elegir el horario cuando actúa de local. En caso de que una institución presente más de un equipo, la organización lo tendrá presente a la hora de las programaciones para no superponer horarios.`
    },
    {
      title: '🤔 ¿Hay un mínimo de encuentros o series a disputar?',
      text: `No podemos saber con exactitud cuantas series se disputarán por categoría pero garantizamos un minimo de 6 series por equipo.`
    },
    {
      title: '🎾 Pelotas',
      text: `Las pelotas serán responsabilidad del <strong >equipo local</strong>, deben ser nuevas o con un solo uso reciente, puediendo ser sueltas o de tubo presurizado.`
    },
    {
      title: '💵 ¿Cuál es el valor y como abonar la inscripción por cada equipo?',
      text: `
      <strong>Durante el mes de Julio $99.000.- </strong><br/>
      <strong>Desde Agosto $130.000.- </strong><br/> <br/>
      Alias: imltenis2023<br/>
      Mariano Arias
      <br/><br/>
      Enviar comprobante al área administrativa +54 9 11 3017-1475 <br/>
      ¡Reserva ahora! y consulta descuentos por cantidad de equipos.`
    },
    {
      title: '💵 ¿Cuál es el valor a abonar cada partido?',
      text: `El costo a abonar cada jugador en conceptos de alquiler de canchas al club local será definido antes del comienzo del torneo.`
    },
    {
      title: '😀 ¿Cómo llevo adelante la inscripción?',
      text: `Cada equipo deberá tener un capitán responsable, quien será el encargado de realizar la inscripción y de enviar la lista de buena fe de su equipo hasta la fecha indicada. `
    }
  ]
  return (
    <section className='fade-in flex flex-col gap-y-6 max-w-2xl m-auto'>
      <div className='flex flex-col items-center gap-y-6'>
        <Counter />
      </div>

      <div className='aspect-square lg:aspect-video'>
        <img
          className='w-full h-full object-cover'
          src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTczeWgwYXZjcDhyZ2s3ZzZwd24yMzNlamdlN2Q1emwya2s1c3UzZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J4JR8nlwPgXcuKRBoG/giphy-downsized-large.gif'
        />
      </div>

      <article className='text-sm flex flex-col gap-y-3'>
        <p>
          Comienza un nuevo torneo y vas a poder formar parte de una de las
          <span className='text-primary'> ligas de clubes</span> más importante de la zona. <br />
          Participá junto a tu grupo de amigos representando a tu club o barrio, jugando en tus canchas y también
          conociendo otros lugares y jugadores cada semana, siempre con los
          <span className='text-primary'> resultados y rankings actualizados</span> en nuestro sitio web.
        </p>
        <p>
          No te pierdas la oportunidad de poder ser elegido el
          <span className='text-primary'> jugador destacado de la fecha</span> o recibir importantes premios al final de
          la temporada siendo el mejor del <span className='text-primary'> ranking de jugadores</span> y también ayudar
          a tu club a ganar la competencia anual de clubes en el
          <span className='text-primary'> ranking de clubes.</span>
        </p>
        <p>
          Como si fuera poco, sobre todas las cosas, queremos mucho a nuestra comunidad y también tenemos momentos de
          entretenimiento en nuestras redes sociales, como
          <span className='text-primary'> la batalla de los clubes</span>,
          <span className='text-primary'> la elección de los mejores capitanes</span> y los nuevos
          <span className='text-primary'> IML Awards.</span>
        </p>
        <p>
          Además de participar de las finales junto a todas las categorías en un evento de cierre con entrega de premios
          y sorteos.
        </p>
      </article>

      {data.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          text={item.text}
        />
      ))}

      <div className='text-sm'>
        Podes ver el reglamento completo en este{' '}
        <NavLink
          to='/reglamento'
          className='underline hover:text-primary'
        >
          enlace
        </NavLink>
      </div>
      <div className='text-primary'>
        Si tenes dudas contactactate por WhatsApp al{' '}
        <a
          href='https://wa.me/5491130171475'
          className='hover:underline'
          target='_blank'
        >
          +54 9 11 3017-1475
        </a>
      </div>
      <div className='text-primary font-bold text-sm'>¡Nos vemos en la cancha! 😉</div>

      <div className='aspect-square lg:aspect-video overflow-hidden'>
        <img
          className='w-full h-full object-cover block'
          src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmQwd2NuY3pobDdlcDI2OGRyZHRxem5hNHFhaG1samN3ZHFuZjVreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1cmAN17b0KFJ6/giphy.gif'
        />
      </div>

      <Helmet>
        <title>IML Tenis Bienvenido</title>
      </Helmet>
    </section>
  )
}

export default Presentacion

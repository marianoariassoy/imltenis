import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import Item from './Item'

const Presentacion = () => {
  const data = [
    {
      title: '🤔 ¿Qué necesito para realizar la inscripción?',
      text: `Para inscribirte necesitás leer la información completa de cómo se lleva adelante el torneo y armar tu equipo con un mínimo de 6 participantes en la lista de buena fe y un máximo de 20 jugadores. Tener o alquilar 2 canchas de Tenis de la misma superficie para poder hacer de local.`
    },
    {
      title: '📅 Fechas',
      text: `Inicio de torneo: <strong>Sábado 16 y Domingo 17 de Marzo.</strong><br />
Cierre de Inscripción: <strong>Sábado 3 de Marzo.</strong><br />
Cierre de listas de buena fe: <strong>Lunes 11 de Marzo</strong>`
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
      <strong>Los Sábados:</strong> Tercera +45, Segunda Damas, Tercera Damas, Cuarta Damas. `
    },
    {
      title: '📈 ¿Cómo se a que categoría corresponde mi equipo?',
      text: `<strong>Niveles orientativos: </strong>
        Quinta: Jugadores categoría 125, C. Cuarta: Jugadores categoría 250, B2, B-. Tercera: Jugadores categoría 500,
        B1 Segunda: Jugadores categoría 750, A1, A2 Primera: Jugadores categoría 1000, Super A.`
    },
    {
      title: '🔞 ¿Hay restricciones por edad?',
      text: `Solamente en la categoría Tercera +45, el resto de las categorías son libres de edad.`
    },
    {
      title: '🌍 ¿Dónde se juega?',
      text: `Cada equipo <strong >representa a un club</strong> que jugará de local reservando o alquilando cancha según corresponda.<br/>
      Zonas de juego: Zona Norte, Zona Oeste y CABA, Buenos Aires.`
    },

    {
      title: '🕛 ¿Qué día y horario se juega por categoría?',
      text: `Las categorías de los Domingos de <strong>9 a 17 hs.</strong><br/>Las categorías de los Sabados de <strong>13 a 17 hs.</strong> <br/><br/>
      Cada equipo puede elegir el horario cuando actúa de local. En caso de que una institución presente más de un equipo, la organización lo tendrá presente a la hora de las programaciones para no superponer horarios.`
    },
    {
      title: '🎾 Pelotas',
      text: `Las pelotas serán responsabilidad del <strong >equipo local</strong>, deben ser nuevas o con un solo uso reciente, puediendo ser sueltas o de tubo presurizado.`
    },
    {
      title: '💵 ¿Cuál es el valor y como abonar la inscripción?',
      text: `<strong>Hasta el 17 de Febrero $80.000- </strong><br/>
      <strong>A partir del 17 de Febrero $99.000.- </strong><br/><br/>
      CVU: 0000168300000001419333<br/>
      Alias: imltenis2023
      <br/><br/>
      Enviar comprobante al área administrativa +54 9 11 3017-1475`
    },
    {
      title: '💵 ¿Cuál es el valor a abonar cada partido?',
      text: `El costo a abonar cada jugador al momento de jugar será de $3.000.- al club local en conceptos de alquiler de canchas.`
    },
    {
      title: '😀 ¿Cómo llevo adelante la inscripción?',
      text: `Cada equipo deberá tener un capitán responsable, quien será el encargado de realizar la inscripción y de enviar la lista de buena fe de su equipo hasta la fecha indicada. `
    }
  ]
  return (
    <section className='fade-in flex flex-col gap-y-6 text-sm max-w-xl m-auto'>
      <div className='text-center text-xl'>
        <h1 className='font-bold text-primary'>Bienvenido al Apertura 2024</h1>
        👋
      </div>

      <img
        src='https://media.giphy.com/media/btRdY5yb4hn5m/giphy.gif?cid=790b76115xugin2g9ys6cql6bvl7thgzwytfergylptmpqhc&ep=v1_gifs_search&rid=giphy.gif&ct=gg'
        className=''
      />

      <article>
        <p className='border-t border-b py-6 border-primary text-primary '>
          Formá parte de una de las <strong>ligas de clubes</strong> más importante de la zona. Participá junto a tu
          grupo de amigos representando a tu club, jugando en tus canchas y también conociendo otros clubes y jugadores.
          <br />
          Vas a poder jugar <strong>cada semana</strong>, ver resultados y rankings siempre actualizados en nuestro
          sistema web.
          <br />
          Vas a poder particiar de diferentes certamenes y premios en nuestras redes sociales, como{' '}
          <strong> el jugador de la fecha</strong>,<strong> la batalla de los clubes</strong>, la elección{' '}
          <strong>del gran capitan</strong>. Además de participár de las finales junto a todas las categorías en un
          evento de cierre con entrega de premios y sorteos.
        </p>
      </article>

      {data.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          text={item.text}
        />
      ))}

      <div>
        Podes ver el reglamento completo en este{' '}
        <NavLink
          to='/reglamento'
          className='underline hover:text-primary'
        >
          enlace
        </NavLink>
      </div>
      <div className='text-primary'>
        Cualquier duda contactate por WhatsApp al{' '}
        <a
          href='https://wa.me/5491130171475'
          className='hover:underline'
          target='_blank'
        >
          +54 9 11 3017-1475
        </a>{' '}
      </div>
      <div className='text-primary font-bold'>¡Nos vemos en la cancha! 😉</div>

      <img src='https://media.giphy.com/media/dBxamPnud4X4abBZWJ/giphy.gif?cid=ecf05e47k5jpck16vq0k5lj71jidpfspxknowulho82pobk9&ep=v1_gifs_search&rid=giphy.gif&ct=g' />

      <Helmet>
        <title>IML Tenis Bienvenido</title>
      </Helmet>
    </section>
  )
}

export default Presentacion

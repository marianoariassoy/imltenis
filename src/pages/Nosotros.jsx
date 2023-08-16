import { Helmet } from 'react-helmet'

const Nosotros = () => {
  return (
    <>
      <Helmet>
        <title>Nosotros</title>
      </Helmet>

      <section className='text-center '>
        <div>
          <h1 className='mb-6 font-bold text-primary text-xl'>¡Hola! 👋</h1>
          <div className='max-w-2xl m-auto text-sm'>
            <p className='mb-4'>
              En <span className='font-semibold'>IML Tenis</span> somos un grupo de amigos unidos por la pasión del
              tenis, la amistad y la competencia 🏆
              <br />
              Durante años participamos y organizamos diferentes torneos, pero siempre tuvimos las mejores experiencias
              y momentos jugando por equipos, por eso conocemos y valoramos cada detalle de este tipo de liga y lo que
              los jugadores y clubes necesitan 😉
            </p>
            <p className='mb-4'>
              Queremos que durante cada semana previa a una fecha el grupo de WhatsApp de tu equipo explote, que el día
              del partido sientas la ansiedad y los nervios de representar a tu equipo y que al final de cada partido
              con un apreton de manos a tu rival, ganes o pierdas te lleves cada vez más ganas de volver a jugar.
            </p>
            <p className='font-semibold mb-6'>Nos vemos en la cancha 💪</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nosotros

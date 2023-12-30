import { Helmet } from 'react-helmet'

const Nosotros = () => {
  return (
    <>
      <Helmet>
        <title>Nosotros</title>
      </Helmet>

      <section className='text-center mb-14'>
        <div>
          <h1 className='mb-6 font-bold text-primary text-xl'>¡Hola! 👋</h1>
          <div className='max-w-2xl m-auto'>
            <p className='mb-4 text-wrap'>
              Quienes hacemos la <strong className='text-primary'>liga de clubes IML Tenis</strong> {''}
              somos un grupo de amigos unidos por la pasión del tenis, la amistad y la competencia 🏆 <br />
              Durante años participamos y organizamos diferentes tipos de torneos, pero siempre tuvimos los mejores y
              más emocionantes momentos jugando en equipo, por eso conocemos y valoramos cada detalle de este tipo de
              competencia y lo que significa para los jugadores, capitanes y clubes. <br />
              Nos encanta que puedas ser parte de esta comunidad que ama al tenis y la buena competencia. 💪
            </p>

            <strong className='text-primary'>¡Nos vemos en la cancha! 😉 </strong>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nosotros

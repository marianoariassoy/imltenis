import { Helmet } from 'react-helmet'

const Nosotros = () => {
  return (
    <section className='fade-in text-center max-w-2xl m-auto flex flex-col gap-y-6'>
      <h1 className='font-bold text-primary text-xl'>¡Hola! 👋</h1>

      <p className='text-wrap'>
        Quienes hacemos la <strong className='text-primary'>liga de clubes IML Tenis</strong> {''}
        somos un grupo de amigos unidos por la pasión del tenis, la amistad y la competencia. <br />
        Durante años participamos y organizamos diferentes tipos de torneos, pero siempre tuvimos los mejores y más
        emocionantes momentos jugando en equipo, por eso conocemos y valoramos cada detalle de este tipo de competencia
        y lo que significa para los jugadores, capitanes y clubes. 💪
      </p>

      <strong className='text-primary'>¡Nos vemos en la cancha! 😉 </strong>

      <Helmet>
        <title>IML Tenis Nosotros</title>
      </Helmet>
    </section>
  )
}

export default Nosotros

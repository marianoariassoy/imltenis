import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className='fade-in flex flex-col text-center text-sm'>
      <div className='text-primary font-medium'>¡Ya estas registrado en nuestro sistema! 🎉</div>
      <Link
        to='/usuarios/login'
        className='hover:text-primary hover:opacity-100 opacity-70'
      >
        Inicia sesión haciendo clic acá.
      </Link>
    </div>
  )
}

export default Thanks

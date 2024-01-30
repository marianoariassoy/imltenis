import Counter from './Counter'

const Soon = () => {
  return (
    <div className='fade-in flex flex-col items-center justify-center h-full'>
      <h1 className='text-4xl mb-3'>🚀</h1>
      <Counter />
      <div className='text-primary text-center'>
        <span className='block font-bold text-xl'>¡Inscripciones abiertas!</span>
        <span className='block font-bold mb-3 text-xl'>Inicio el 16 y 17 de Marzo</span>
        <span className='block'>Descuentos hasta el 17 de Febrero</span>
        <span className='block font-bold'>
          Más información{' '}
          <a
            href='https://www.instagram.com/p/C2M_QQ2gUEJ/'
            target='_blank'
            className='underline'
          >
            click acá
          </a>
        </span>
        <span>
          o al WhatsApp{' '}
          <a
            href='https://wa.me/5491130171475'
            className='underline'
            target='_blank'
          >
            {' '}
            +54 9 11 3017-1475
          </a>
        </span>
      </div>
    </div>
  )
}

export default Soon

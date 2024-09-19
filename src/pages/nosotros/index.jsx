import { Helmet } from 'react-helmet'

const Nosotros = () => {
  return (
    <section className='fade-in text-center max-w-2xl m-auto flex flex-col gap-y-6'>
      <div className='text-xl'>
        <h1 className='font-bold text-primary'>¡Hola!</h1>
      </div>

      <div className='flex flex-col gap-y-6 text-sm px-6'>
        <div className='[&>span]:font-bold [&>span]:text-primary'>
          <span>Director:</span> Luis Armando Pujol <br />
          <span>Coordinadores:</span> Emiliano Carro, Mariano Arias, Carmelo Grieco. <br />
          <span>RRSS:</span> Joaquina Yagua <br />
          <span>Sistemas: </span>
          <a
            href='https://www.marianoarias.soy'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Mariano Arias
          </a>
          <br />
          <span>Comercial:</span> Anabel Segovia <br />
          <span>Legales: </span>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Estudio Jurídico Massi
          </a>
          <br />
          <span>Logo: </span>
          <a
            href='http://www.nicolasbarraza.com.ar/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Nicolas Barraza
          </a>
          <br />
        </div>
        <div className='[&>span]:font-bold [&>span]:text-primary'>
          <span>IML Weekend:</span> Lorena Chañal, Adrián Micheli. <br />
          <span>IML Juniors:</span> Marcos Velazquez
          {/* <span>IML Circuito:</span> Jonatan Polvora */}
        </div>
      </div>

      <Helmet>
        <title>IML Tenis Nosotros</title>
      </Helmet>
    </section>
  )
}

export default Nosotros

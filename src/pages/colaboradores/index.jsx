import { Helmet } from 'react-helmet'
// import { WhatsApp, Instagram } from '../../components/icons'

const Amigos = () => {
  const data = [
    {
      title: 'Alex Tennis',
      subtitle: 'Insumos y accesorios para Tenis',
      description: 'Todo lo que necesitas para jugar la liga.',
      phone: '5491144752027',
      url: 'https://www.instagram.com/alexunfhutennis/'
    },
    {
      title: 'Tennis Station',
      subtitle: 'Academia / Escuela de tenis',
      description: 'Nos encontras en SAG Los Polvorines.',
      phone: '5491150391880',
      url: 'https://www.instagram.com/tennis.station2023/'
    },
    {
      title: 'Estudio jurídico Giollo y Asoc.',
      subtitle: 'Bufet de abogados',
      description: 'Oficina en Los Polvorines.',
      phone: '5491168537131',
      url: 'https://www.instagram.com/giolloabogados/'
    }
  ]
  return (
    <section className='fade-in flex flex-col gap-y-6 text-center max-w-2xl m-auto'>
      <div>
        <div className='text-primary text-xl mb-2'>
          <h1 className='font-bold'>Colaboradores</h1>👉
        </div>
        <p className='text-sm text-wrap'>
          Gracias al apoyo y la contribucion generosa de los siguientes colaboradores nuestra liga y comunidad tenistica
          continua creciendo y fortalciendose.
        </p>
      </div>

      <div className='flex flex-col gap-y-4 text-sm text-center'>
        {data.map((item, index) => (
          <article
            key={index}
            className='border-white/20 flex flex-col'
          >
            <a
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary'
            >
              <h2 className='font-bold'>
                <span className='text-primary'>{item.title}</span> &bull; {item.subtitle}
              </h2>
            </a>
            <div>
              {item.description}{' '}
              {item.phone && (
                <a
                  href={'https://wa.me/' + item.phone}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-primary'
                >
                  Tel. {item.phone}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className='text-sm'>
        🤙 Comunicate al{' '}
        <a
          href='https://wa.me/5491130171475'
          className='underline hover:text-primary'
          target='_blank'
        >
          {' '}
          +54 9 11 3017-1475
        </a>{' '}
        para anunciar
      </p>

      <Helmet>
        <title>IML Tenis Colaboradores</title>
      </Helmet>
    </section>
  )
}

export default Amigos

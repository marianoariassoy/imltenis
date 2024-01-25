import { Helmet } from 'react-helmet'

const Amigos = () => {
  const data = [
    {
      title: 'Tennis Station',
      subtitle: 'Academia / Escuela de tenis',
      description: 'Sociedad Alemana de Gimnasia',
      phone: '11 5039 1880'
    },
    {
      title: 'Estudio jurídico Giollo y Asoc.',
      subtitle: 'Bufet de abogados',
      description: 'Los Polvorines',
      phone: '11 6853 7131'
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

      <div className='flex flex-col gap-y-3 text-sm text-center'>
        {data.map((item, index) => (
          <article
            key={index}
            className='border-white/20 pb-3'
          >
            <h2 className='font-bold'>
              <span className='text-primary'>{item.title}</span> &bull; {item.subtitle}
            </h2>
            <p>
              {item.description} &bull; Tel. {item.phone}
            </p>
          </article>
        ))}
      </div>

      <p className='text-sm'>
        🤙 Comunicate al{' '}
        <a
          href='https://wa.me/5491130171475'
          className='underline'
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

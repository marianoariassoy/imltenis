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
    <section className='fade-in mb-6 max-w-xl m-auto'>
      <div className='mb-3'>
        <div className='text-center text-primary text-xl'>
          <h1 className='font-bold'>Colaboradores</h1>👉
        </div>
      </div>

      <p className='mb-6 text-sm text-center'>
        Gracias al apoyo y la contribucion generosa de los siguientes colaboradores nuestra liga y comunidad tenistica
        continua creciendo y fortalciendose.
      </p>

      <div className='flex flex-col gap-y-3 text-sm text-center'>
        {data.map((item, index) => (
          <article
            key={index}
            className=' border-white/20 pb-3'
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

      <Helmet>
        <title>IML Tenis Colaboradores</title>
      </Helmet>
    </section>
  )
}

export default Amigos

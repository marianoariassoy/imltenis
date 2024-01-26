const Footer = () => {
  const year = new Date().getFullYear()
  const logos = [
    {
      alt: 'Logo de Yuka',
      url: 'https://www.instagram.com/yuka_ant/',
      image: '/assets/logos/yuka.svg'
    },
    {
      alt: 'Logo de Head',
      url: 'https://www.instagram.com/headshoesargentina/',
      image: '/assets/logos/head.svg'
    },
    {
      alt: 'Logo de Urban',
      url: 'https://www.instagram.com/urbankicks.ar/',
      image: '/assets/logos/urban.svg'
    },
    {
      alt: 'Logo de TYP',
      url: 'https://www.instagram.com/typdeportes/',
      image: '/assets/logos/typ.svg'
    },
    {
      alt: 'Logo de Addnice',
      url: 'https://www.addnicetienda.com.ar/',
      image: '/assets/logos/addnice.svg'
    },
    {
      alt: 'Logo de Tienda Vinica',
      url: 'https://www.instagram.com/tiendavinica/',
      image: '/assets/logos/vinica.svg'
    }
  ]

  return (
    <div className='footer-main p-6 opacity-60 mt-8'>
      <div className='max-w-[18rem] lg:max-w-xl m-auto grid grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-center text-center [&>div]:flex [&>div]:justify-center [&>div>a:hover]:opacity-70 mb-6 lg:mb-12'>
        {logos.map((logo, index) => (
          <div key={index}>
            <a
              href={logo.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={logo.image}
                alt={logo.alt}
              />
            </a>
          </div>
        ))}
      </div>

      <div className='text-[.8rem] text-center'>
        <span className='block lg:inline-block font-bold'>Liga de clubes IML Tenis </span> &nbsp;
        <span>Buenos Aires, Argentina. &copy; {year}</span>
        <span className='block'>
          Desarrollo: &nbsp;
          <a
            href='http://marianoarias.soy'
            className='font-bold hover:text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            Mariano Arias
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer

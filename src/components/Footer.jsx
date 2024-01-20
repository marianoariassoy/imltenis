const Footer = () => {
  return (
    <div className='footer-main px-6 py-6 opacity-60 mt-8'>
      <div className='max-w-[18rem] lg:max-w-xl m-auto grid grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-center text-center [&>div]:flex [&>div]:justify-center [&>div>a:hover]:opacity-70 mb-6 lg:mb-12'>
        <div>
          <a
            href='https://www.instagram.com/yuka_ant/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/assets/logos/yuka.svg' />
          </a>
        </div>
        <div>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/assets/logos/head.svg' />
          </a>
        </div>
        <div>
          <a
            href='https://www.instagram.com/urbankicks.ar/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/assets/logos/urban.svg' />
          </a>
        </div>
        <div>
          <a
            href='https://www.instagram.com/typdeportes/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/assets/logos/typ.svg' />
          </a>
        </div>
        <div>
          <a
            href='https://www.addnicetienda.com.ar/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/assets/logos/addnice.svg' />
          </a>
        </div>
        <div>
          <a
            href='https://www.instagram.com/tiendavinica/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/assets/logos/vinica.svg' />
          </a>
        </div>
      </div>

      <div className='text-[.8rem] text-center'>
        <span className='block lg:inline-block font-bold'>Liga de clubes IML Tenis </span> &nbsp;
        <span>Buenos Aires, Argentina. &copy; 2024</span>
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

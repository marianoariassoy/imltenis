import { Yuka, Typ, Urban, Vinica } from '../icons/icons'

const Footer = () => {
  return (
    <div className='footer-main px-4 py-6 opacity-50'>
      <div className='flex justify-center gap-x-4 mb-4'>
        <a
          href='https://www.instagram.com/yuka_ant/'
          className='icon-sponsor hover:opacity-60'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Yuka />
        </a>
        <a
          href='https://www.instagram.com/typdeportes/'
          className='icon-sponsor hover:opacity-60'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Typ />
        </a>
        <a
          href='https://www.instagram.com/urbankicks.ar/'
          className='icon-sponsor hover:opacity-60'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Urban />
        </a>
        <a
          href='https://www.instagram.com/tiendavinica/'
          className='icon-sponsor hover:opacity-60'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Vinica />
        </a>
      </div>

      <div className='text-[.8rem] text-center'>
        <span className='block lg:inline-block font-bold'>Liga de equipos IML Tenis &copy; 2023</span> &nbsp;
        <span>Buenos Aires, Argentina.</span> &nbsp;
        <span className='block lg:inline-block'>
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

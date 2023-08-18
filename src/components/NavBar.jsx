import { NavLink, Link } from 'react-router-dom'
import { menu } from '../data/data'
import { Logo, Instagram, Bars } from '../icons/icons'

const NavBar = () => {
  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <div className='navbar p-4 pt-6 fixed z-50 backdrop-blur-md w-screen'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label
            className='cursor-pointer hover:text-primary'
            onClick={openMenu}
          >
            <Bars />
          </label>
        </div>
      </div>
      <div className='navbar-center'>
        <Link
          to='/'
          className='text-primary'
        >
          <Logo />
        </Link>
      </div>
      <div className='navbar-end'>
        <a
          href='https://www.instagram.com/imltenis/'
          target='_blank'
          className='hover:text-primary'
        >
          <Instagram />
        </a>
      </div>
      <nav
        className='fade-in fixed top-0 left-0 w-screen h-screen backdrop-blur-md -z-10 content-center text-center hidden'
        onClick={openMenu}
      >
        <ul className='text-xl italic lg:text-3xl text-white/70'>
          {menu.map((item, index) => (
            <li
              key={index}
              className='mb-1'
            >
              <NavLink
                to={item.url}
                className={`${item.style} nav-link`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {/* <li>
            <a
              href='https://imltenis.com.ar/assets/docs/planilla_de_carga_iml_tenis.pdf'
              target='_blank'
            >
              Planilla de carga
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar

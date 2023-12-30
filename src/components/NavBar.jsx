import { NavLink } from 'react-router-dom'
import { menu } from '../data/data'
const NavBar = () => {
  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <nav
      className='fade-in fixed top-0 left-0 w-full h-screen content-center text-center z-30 bg-black/10 backdrop-blur-md hidden'
      onClick={openMenu}
    >
      <ul className='text-xl italic lg:text-2xl text-white/70'>
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
      </ul>
    </nav>
  )
}

export default NavBar

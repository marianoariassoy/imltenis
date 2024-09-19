import { NavLink } from 'react-router-dom'
import { menu, categories } from '../components/data'
const NavBar = () => {
  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <nav
      className='fade-in fixed top-0 left-0 w-full bg-black/20 h-screen content-center text-center  backdrop-blur-md hidden'
      onClick={openMenu}
    >
      <ul className='text-white/70 italic mb-3'>
        {categories.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.url}
              className='nav-link text-primary'
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className='text-white/70 flex flex-col font-medium  lg:text-base'>
        {menu.map((item, index) => (
          <li key={index + 12}>
            <NavLink
              to={item.url}
              className='nav-link'
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

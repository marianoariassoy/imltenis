import { NavLink } from 'react-router-dom'
import { menu, categories } from '../data/data'
const NavBar = () => {
  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <nav
      className='fade-in fixed top-0 left-0 w-full h-screen content-center text-center z-30 bg-black/30 backdrop-blur-md hidden'
      onClick={openMenu}
    >
      <ul className=' text-white/70 flex flex-col'>
        {categories.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.url}
              className='nav-link text-primary italic text-xl lg:text-2xl leading-7'
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        {menu.map((item, index) => (
          <li key={index + 10}>
            <NavLink
              to={item.url}
              className='nav-link font-medium leading-7 text-[1.18rem] lg:text-[1.35rem]'
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

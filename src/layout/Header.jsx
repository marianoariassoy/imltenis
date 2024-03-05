import { Link } from 'react-router-dom'
import { Logo, Bars, Instagram } from '../components/icons'
import UserMenu from './UserMenu'

const Header = () => {
  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <div className='navbar w-full py-6 px-5 backdrop-blur-md'>
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
      <div className='navbar-center text-primary'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='navbar-end'>
        <UserMenu />
      </div>
    </div>
  )
}

export default Header

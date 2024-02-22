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
      <div className='navbar-start gap-x-4'>
        <div className='dropdown'>
          <label
            className='cursor-pointer hover:text-primary'
            onClick={openMenu}
          >
            <Bars />
          </label>
        </div>
        {/* <div>
          <a
            href='https://www.instagram.com/imltenis/'
            target='_blank'
            className='hover:text-primary'
          >
            <Instagram />
          </a>
        </div> */}
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

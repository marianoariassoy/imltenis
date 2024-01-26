import { Link } from 'react-router-dom'
import { Logo, Instagram, Bars } from '../components/icons'

const Header = () => {
  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <div className='navbar w-full p-6 backdrop-blur-md'>
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
    </div>
  )
}

export default Header

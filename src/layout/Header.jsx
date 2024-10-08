import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Bars, Logo } from '../components/icons'
import UserMenu from './UserMenu'

const Header = () => {
  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  useEffect(() => {
    const logo = document.querySelector('.logo-main')

    window.onscroll = () => {
      if (window.scrollY > 0) {
        logo.classList.add('text-xs')
      } else {
        logo.classList.remove('text-xs')
      }
    }
  }, [])

  return (
    <div className='navbar w-full px-5 bg-base-100'>
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
      <div className='navbar-center text-primary logo-main transition-all'>
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

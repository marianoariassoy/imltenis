import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Ghost, Instagram } from '../components/icons'
import { useAuth } from '../context'

const UserMenu = () => {
  const { logout, isLoggedIn, userData } = useAuth()
  const location = useLocation()
  const [image, setImage] = useState(null)

  if (!isLoggedIn)
    return (
      <div className='flex gap-x-4 items-center'>
        <a
          href='https://www.instagram.com/imltenis/'
          target='_blank'
          className='hover:text-primary'
        >
          <Instagram />
        </a>
        <Link
          to='/usuarios/login'
          className={location.pathname === '/usuarios/login' ? 'text-primary' : 'hover:text-primary'}
        >
          <Ghost />
        </Link>
      </div>
    )

  return (
    <div className='dropdown dropdown-end absolute'>
      <div
        tabIndex={0}
        role='button'
        className='btn btn-ghost btn-circle avatar'
      >
        <div className='w-10 rounded-full'>
          <img
            alt='Foto de perfil'
            src={userData.image}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
      >
        <li>
          <Link
            to='/usuarios/perfil'
            className={location.pathname === '/usuarios/perfil' ? 'text-primary' : ''}
          >
            Perfil
          </Link>
        </li>
        <li>
          <Link
            to='/usuarios/misdatos'
            className={location.pathname === '/usuarios/misdatos' ? 'text-primary' : ''}
          >
            Mis datos
          </Link>
        </li>
        <li>
          <button onClick={logout}>Salir</button>
        </li>
      </ul>
    </div>
  )
}

export default UserMenu

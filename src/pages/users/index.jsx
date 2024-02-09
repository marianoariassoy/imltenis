import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from '../../components/Loader'
import { Input, Button } from '../ui'
import { texts } from '../../components/data'

const index = () => {
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    setSending(true)

    axios
      .post('https://', {
        ...data
      })
      .then(data => {
        if (data.data === 'success') {
          setSended(true)
          setSending(false)
        } else {
          setError(true)
          setSending(false)
        }
      })
  }

  const Error = () => {
    return <div className='text-primary mt-2 text-sm'>{texts.required}</div>
  }

  return (
    <section>
      <div className='flex flex-col gap-y-6'>
        <div className='text-center'>
          <h1 className='font-bold text-primary text-xl mb-3'>¡Hola! 👋</h1>
          <p className='text-sm'>Ingresá con tu email y contraseña.</p>
          <Link
            to='/users/registro'
            className='text-sm hover:text-primary'
          >
            Si no estas registrado hacé click acá
          </Link>
        </div>

        <div className='w-full max-w-xs lg:max-w-sm m-auto'>
          {error && <span className='text-primary font-bold'>{texts.error}</span>}
          {sended && <span className='text-primary font-bold'>{texts.thanks}</span>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control'>
              <Input
                type='email'
                title='Email'
                placeholder=''
                register={register('email', { required: true })}
              />
              {errors.email && <Error />}
            </div>
            <div className='form-control'>
              <Input
                type='password'
                title='Contraseña'
                placeholder=''
                register={register('password', { required: true })}
              />
              {errors.password && <Error />}

              <div className='mt-2'>
                <a
                  href='#'
                  className='text-xs link link-hover'
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div className='form-control mt-6'>
              <Button>Ingresar</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default index

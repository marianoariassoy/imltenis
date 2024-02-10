import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'
import { Input, Button } from '../ui'
import { texts } from '../../components/data'
import Error from './Error'
import { useAuth } from '../../context'

const index = () => {
  const { login } = useAuth()
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    setSending(true)
    try {
      const response = await axios.post('https://imltenis.com.ar/api/users/login', data)
      if (response.data.success) {
        setSending(false)
        const token = response.data.token
        login(token)
        navigate('/usuarios/perfil')
      } else {
        setError(response.data.message)
        setSending(false)
      }
    } catch (error) {
      setError(error)
      setSending(false)
    }
  }

  return (
    <section>
      <div className='flex flex-col gap-y-6'>
        <div className='text-center'>
          <p className='text-sm'>Ingresá con tu email y contraseña.</p>
          <Link
            to='/usuarios/registro'
            className='text-sm hover:text-primary'
          >
            Si no estas registrado hacé click acá
          </Link>
        </div>

        <div className='w-full max-w-md m-auto'>
          {error && <div className='text-primary font-medium text-center text-sm mb-4'>{error} 🤔</div>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control'>
              <Input
                type='email'
                title='Email'
                placeholder='email'
                register={register('email', {
                  required: texts.required,
                  maxLength: 30,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Dirección de correo electrónico inválida'
                  }
                })}
              />
              {errors.email && <Error text={errors.email.message} />}
            </div>
            <div className='form-control'>
              <Input
                type='password'
                title='Contraseña'
                placeholder='contraseña'
                register={register('password', {
                  required: texts.required,
                  validate: value => value.length > 4 || 'La longitud debe ser mayor a 4 caracteres'
                })}
              />
              {errors.password && <Error text={errors.password.message} />}
            </div>
            <div className='mt-2'>
              <a
                href='#'
                className='text-xs link link-hover'
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className='form-control mt-6 flex items-center justify-center'>
              {sending ? (
                <div className='mt-6'>
                  <BeatLoader />
                </div>
              ) : (
                <Button>Inresar</Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default index

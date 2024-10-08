import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'
import { Input, Button } from '../../ui'
import { texts } from '../../components/data'
import { useAuth } from '../../context'
import Error from './Error'
import Messages from './Messages'

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
        {/* <h1 className='text-center text-primary font-bold text-[1.15rem] lg:text-xl'>¡Hola! 👋</h1> */}

        <div className='w-full max-w-md m-auto'>
          {error && <Messages text={error} />}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control'>
              <Input
                type='email'
                title='Email'
                placeholder='email'
                register={register('email', {
                  required: texts.required,
                  maxLength: 50,
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
              <Link
                to='/usuarios/recuperar-password'
                className='hover:text-primary hover:opacity-100 opacity-70 text-sm'
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <div className='form-control mt-6 flex items-center justify-center'>
              {sending ? (
                <div className='mt-6'>
                  <BeatLoader />
                </div>
              ) : (
                <Button>Ingresar</Button>
              )}
            </div>
          </form>
        </div>
        <div className='text-center'>
          <Link
            to='/usuarios/registro'
            className='hover:text-primary hover:opacity-100 opacity-70 text-sm'
          >
            Si no estas registrado hacé clic acá
          </Link>
        </div>
      </div>
      <Helmet>
        <title>IML Tenis Login</title>
      </Helmet>
    </section>
  )
}

export default index

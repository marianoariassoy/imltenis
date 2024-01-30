import { useState, useEffect } from 'react'

const Countdown = () => {
  const targetDate = new Date('March 16, 2024 00:00:00 GMT-03:00').getTime()
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  function calculateTimeRemaining() {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  return (
    <section className='grid grid-cols-4 items-center gap-x-3 text-primary text-center mb-3 text-sm'>
      <div className='countdown-item'>
        <span className='font-bold text-4xl'>{timeRemaining.days}</span>
        <p>Días</p>
      </div>
      <div className='countdown-item'>
        <span className='font-bold text-4xl'>{timeRemaining.hours}</span>
        <p>Hs.</p>
      </div>
      <div className='countdown-item'>
        <span className='font-bold text-4xl'>{timeRemaining.minutes}</span>
        <p>Min.</p>
      </div>
      <div className='countdown-item'>
        <span className='font-bold text-4xl'>{timeRemaining.seconds}</span>
        <p>Seg.</p>
      </div>
    </section>
  )
}

export default Countdown

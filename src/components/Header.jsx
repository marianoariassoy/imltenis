const Header = ({ title, subtitle = '', description = '', emoji = '' }) => {
  return (
    <header className='text-center flex flex-col'>
      <div className='flex gap-x-2 justify-center items-center text-[1.15rem] lg:text-xl px-6'>
        <h1 className='font-bold text-primary'>{title}</h1>
        {subtitle && <span className='font-medium text-primary'>{subtitle}</span>}
      </div>
      {emoji && <div className='text-2xl'>{emoji}</div>}
      <div className='font-medium text-sm lg:text-base'>{description}</div>
    </header>
  )
}

export default Header

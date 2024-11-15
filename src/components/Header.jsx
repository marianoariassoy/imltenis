const Header = ({ title, subtitle = '', description = '', emoji = '' }) => {
  return (
    <header className='text-center flex flex-col gap-y-1'>
      <div className='flex gap-x-2 justify-center items-center text-[1.15rem] lg:text-xl'>
        <h1 className='font-bold text-primary'>{title}</h1>
        <span className='font-medium text-primary'>{subtitle}</span>
      </div>
      <div className='text-2xl'>{emoji}</div>
      <div className='font-medium opacity-70 text-sm lg:text-base'>{description}</div>
    </header>
  )
}

export default Header

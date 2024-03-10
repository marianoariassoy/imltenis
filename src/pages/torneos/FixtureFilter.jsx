const FixtureFilter = ({ filters, setFilters }) => {
  const options = [
    {
      name: 'Todo',
      value: 'all'
    },
    {
      name: 'Por jugar',
      value: false
    },
    {
      name: 'Jugados',
      value: true
    },
    {
      name: 'Ocultar',
      value: null
    }
  ]

  return (
    <div className='grid grid-cols-4 text-center text-sm mb-3 lg:mb-6 m-auto w-80'>
      {options.map((item, index) => (
        <button
          key={index}
          className={`font-medium ${
            filters === item.value ? 'text-primary' : 'opacity-70 hover:opacity-100  hover:text-primary'
          }`}
          onClick={() => setFilters(item.value)}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default FixtureFilter

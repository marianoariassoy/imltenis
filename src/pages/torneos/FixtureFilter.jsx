const FixtureFilter = ({ filters, setFilters }) => {
  const options = [
    {
      name: 'Todos',
      value: 'all'
    },
    {
      name: 'Por jugar',
      value: false
    },
    {
      name: 'Jugados',
      value: true
    }
  ]

  return (
    <div className='grid grid-cols-3 gap-x-3 text-center text-sm mb-3 lg:mb-6 max-w-xs m-auto'>
      {options.map((item, index) => (
        <button
          key={index}
          className={`font-medium ${filters === item.value ? 'text-primary' : 'opacity-70 hover:text-primary'}`}
          onClick={() => setFilters(item.value)}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default FixtureFilter

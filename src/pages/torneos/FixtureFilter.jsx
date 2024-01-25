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
    <div className='flex gap-x-6 justify-center text-sm mb-3 lg:mb-6'>
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

import Fixture from './Fixture'

const Playoff = ({ data }) => {
  return (
    <div>
      {data
        .filter(item => item.type === 2)
        .map(item => (
          <div
            className='text-center mb-3'
            key={item.id}
          >
            <h1 className='italic mb-1 text-primary'>{item.title}</h1>

            <Fixture
              group_id={item.id}
              type={item.type}
            />
          </div>
        ))}
    </div>
  )
}

export default Playoff

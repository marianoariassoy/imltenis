import GroupsItem from './GroupsItem'

const Groups = ({ data }) => {
  const dataFiltered = data.filter(item => item.type === 1)

  return (
    <section className='flex flex-col gap-y-3'>
      {dataFiltered.map((item, index) => (
        <div key={index}>
          <h2 className='italic text-primary text-center mb-3'>{item.title}</h2>
          <GroupsItem data={item} />
        </div>
      ))}
    </section>
  )
}

export default Groups

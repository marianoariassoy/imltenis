const Labels = ({ labels }) => {
  return (
    <ul className='flex gap-x-2 justify-center text-sm opacity-50 flex-wrap '>
      {labels
        .filter(item => item.value)
        .map((item, index) => (
          <li key={index}>
            <strong>{item.name}:</strong> {item.value}
          </li>
        ))}
    </ul>
  )
}

export default Labels

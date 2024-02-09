const Select = ({ options, register, title }) => {
  return (
    <select
      className='select select-bordered w-full max-w-xs border-primary'
      {...register}
    >
      <option
        disabled
        selected
        value=''
      >
        {title}
      </option>
      {options.map((item, index) => {
        return <option key={index}>{item}</option>
      })}
    </select>
  )
}

export default Select

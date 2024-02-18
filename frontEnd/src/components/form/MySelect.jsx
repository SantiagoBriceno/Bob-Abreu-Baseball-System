import { Select } from '@chakra-ui/react'
const MySelect = ({ opt, value, onChange, id }) => {
  console.log(opt)
  return (
    <Select value={value} onChange={onChange} id={id}>
      {opt.map((o, index) => (
        <option key={index} value={o.value}>{o.label}</option>
      ))}
    </Select>
  )
}

export default MySelect
